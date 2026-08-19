import type { Product } from "../types";
import config from "../site.config";
import { money, productCategory, fillStyle, findProduct } from "../lib/catalog";
import { useStore } from "../store/StoreContext";

function Thumb({ product }: { product: Product }) {
  const cat = productCategory(product);
  return (
    <div className="line-thumb">
      {product.image
        ? <img className="fill" src={product.image} alt="" />
        : <div className="fill" style={fillStyle(cat)} />}
    </div>
  );
}

export default function Drawer() {
  const {
    drawer, closeDrawer, cart, fav,
    changeQty, removeFromCart, toggleFav, addToCart,
    cartTotal, checkoutUrl
  } = useStore();

  const ui = config.ui;
  const isCart = drawer.type === "cart";
  const refs = isCart ? Object.keys(cart) : Object.keys(fav);
  const empty = refs.length === 0;

  return (
    <>
      <div className={"scrim" + (drawer.open ? " open" : "")} onClick={closeDrawer} />
      <aside className={"drawer" + (drawer.open ? " open" : "")} aria-label={isCart ? ui.cartTitle : ui.favTitle}>
        <div className="drawer-head">
          <h3>{isCart ? ui.cartTitle : ui.favTitle}</h3>
          <button className="drawer-close" aria-label="Fechar" onClick={closeDrawer}>✕</button>
        </div>

        <div className="drawer-body">
          {empty ? (
            <div className="drawer-empty">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                {isCart
                  ? <><path d="M6 8h12l-1 12H7L6 8z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></>
                  : <path d="M12 21s-7.5-4.8-9.7-9.3C.8 8.4 2.3 5 5.7 5c2 0 3.4 1.2 4.3 2.6C10.9 6.2 12.3 5 14.3 5c3.4 0 4.9 3.4 3.4 6.7C19.5 16.2 12 21 12 21z" />}
              </svg>
              <h3>{isCart ? ui.cartEmpty : ui.favEmpty}</h3>
              <p>{isCart ? ui.cartEmptyHint : ui.favEmptyHint}</p>
              <a className="btn btn-primary" style={{ marginTop: 18 }} href="#colecao" onClick={closeDrawer}>
                {ui.viewCollection}
              </a>
            </div>
          ) : (
            refs.map((ref) => {
              const p = findProduct(ref);
              if (!p) return null;
              const q = cart[ref] || 1;
              return (
                <div className="line" key={ref}>
                  <Thumb product={p} />
                  <div className="line-info">
                    <span className="ref">{ui.productRefPrefix}{p.ref}</span>
                    <h4>{p.name}</h4>
                    <div className="meta">{p.fabric}</div>
                    {isCart ? (
                      <div className="qty">
                        <button onClick={() => changeQty(ref, -1)} aria-label="Diminuir">−</button>
                        <span>{q}</span>
                        <button onClick={() => changeQty(ref, 1)} aria-label="Aumentar">+</button>
                      </div>
                    ) : (
                      <button className="add" style={{ marginTop: 10, padding: "8px 14px" }} onClick={() => addToCart(ref)}>
                        <span>{ui.addToBag}</span>
                      </button>
                    )}
                  </div>
                  <div className="line-right">
                    <div className="lp">{money(p.price * (isCart ? q : 1))}</div>
                    <button className="rm" onClick={() => (isCart ? removeFromCart(ref) : toggleFav(ref))}>
                      {ui.remove}
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {isCart && !empty && (
          <div className="drawer-foot">
            <div className="subtotal">
              <span>{ui.subtotal}</span><b>{money(cartTotal)}</b>
            </div>
            <p className="note">{ui.checkoutNote}</p>
            <a className="btn btn-wa" href={checkoutUrl()} target="_blank" rel="noopener noreferrer">
              {ui.checkoutCta}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.5A10 10 0 1 0 12 2zm5.6 14.2c-.2.6-1.2 1.2-1.7 1.2-.4 0-1 .1-3.2-.8-2.7-1.1-4.4-3.9-4.5-4.1-.1-.2-1.1-1.4-1.1-2.7 0-1.3.7-1.9.9-2.2.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2 0 .4-.1.6l-.4.5c-.2.2-.3.3-.1.6.2.3.9 1.4 1.9 2.3 1.3 1.1 2.3 1.4 2.6 1.6.2.1.4.1.6-.1l.7-.9c.2-.2.4-.2.6-.1l1.8.9c.3.1.4.2.5.3.1.2.1.6-.1 1.1z" />
              </svg>
            </a>
          </div>
        )}
      </aside>
    </>
  );
}
