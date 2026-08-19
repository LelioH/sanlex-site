import { createContext, useContext, useState, useEffect, useCallback, useRef } from "react";
import type { ReactNode } from "react";
import config from "../site.config";
import { findProduct } from "../lib/catalog";
import type { CountMap, DrawerState, DrawerType, ToastState, StoreValue } from "../types";

const StoreContext = createContext<StoreValue | null>(null);

const storagePrefix = config.settings.storageKey + ":";

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(storagePrefix + key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}
function write<T>(key: string, value: T): void {
  try {
    localStorage.setItem(storagePrefix + key, JSON.stringify(value));
  } catch {
    /* sandbox / modo privado: mantém apenas em memória */
  }
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CountMap>(() => read<CountMap>("cart", {}));
  const [fav, setFav] = useState<CountMap>(() => read<CountMap>("fav", {}));
  const [drawer, setDrawer] = useState<DrawerState>({ open: false, type: "cart" });
  const [toast, setToast] = useState<ToastState | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => write("cart", cart), [cart]);
  useEffect(() => write("fav", fav), [fav]);
  useEffect(() => { document.body.style.overflow = drawer.open ? "hidden" : ""; }, [drawer.open]);

  const showToast = useCallback((text: string) => {
    setToast({ text, key: Date.now() });
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2400);
  }, []);

  const addToCart = useCallback((ref: string) => {
    const p = findProduct(ref);
    setCart((c) => ({ ...c, [ref]: (c[ref] || 0) + 1 }));
    if (p) showToast(config.ui.toastAdded + p.name);
  }, [showToast]);

  const changeQty = useCallback((ref: string, delta: number) => {
    setCart((c) => {
      const next = { ...c };
      const q = (next[ref] || 0) + delta;
      if (q <= 0) delete next[ref];
      else next[ref] = q;
      return next;
    });
  }, []);

  const removeFromCart = useCallback((ref: string) => {
    setCart((c) => {
      const next = { ...c };
      delete next[ref];
      return next;
    });
  }, []);

  const toggleFav = useCallback((ref: string) => {
    const p = findProduct(ref);
    setFav((f) => {
      const next = { ...f };
      if (next[ref]) {
        delete next[ref];
      } else {
        next[ref] = 1;
        if (p) showToast(config.ui.toastFaved + p.name);
      }
      return next;
    });
  }, [showToast]);

  const openDrawer = useCallback((type: DrawerType) => setDrawer({ open: true, type }), []);
  const closeDrawer = useCallback(() => setDrawer((d) => ({ ...d, open: false })), []);

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const favCount = Object.keys(fav).length;
  const cartTotal = Object.entries(cart).reduce(
    (s, [ref, q]) => s + (findProduct(ref)?.price ?? 0) * q, 0
  );

  const checkoutUrl = useCallback((): string => {
    const lines = Object.entries(cart).map(([ref, q]) => {
      const p = findProduct(ref);
      if (!p) return "";
      const sub = (p.price * q).toFixed(2).replace(".", ",");
      return `• ${p.name} (REF ${p.ref}) — ${q}x — ${config.settings.currency} ${sub}`;
    }).filter(Boolean);
    const total = cartTotal.toFixed(2).replace(".", ",");
    const msg =
      config.ui.checkoutGreeting + "\n\n" +
      lines.join("\n") +
      `\n\n*${config.ui.subtotal}: ${config.settings.currency} ${total}*\n\n` +
      config.ui.checkoutPaymentQuestion;
    return `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(msg)}`;
  }, [cart, cartTotal]);

  const value: StoreValue = {
    cart, fav, drawer, toast,
    addToCart, changeQty, removeFromCart, toggleFav,
    openDrawer, closeDrawer,
    cartCount, favCount, cartTotal, checkoutUrl
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore(): StoreValue {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore deve ser usado dentro de <StoreProvider>");
  return ctx;
}
