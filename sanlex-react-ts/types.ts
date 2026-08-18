/* Tipos compartilhados do site. */

export type GlyphId = "sutia" | "calc" | "set" | "shape" | "sleep" | "plus";

export interface ThemeColors {
  wine: string; wine2: string; rose: string; roseDeep: string;
  blush: string; nude: string; cream: string; cream2: string;
  ink: string; inkSoft: string; gold: string; line: string;
  white: string; ok: string;
}

export interface FontSpec { name: string; query: string; }

export interface Theme {
  name: string;
  colors: ThemeColors;
  fonts: { display: FontSpec; body: FontSpec };
  radius: string;
}

export interface Category {
  id: string; name: string; glyph: GlyphId;
  c1: string; c2: string; image: string;
}

export interface Product {
  ref: string; name: string; cats: string[]; price: number;
  sizes: string[]; fabric: string; badge: string; image: string;
}

export interface CtaLink { label: string; href: string; }
export interface Stat { value: string; label: string; }

export interface TagCard {
  label: string; product: string; swatches: string[];
  ref: string; price: string;
}

export interface HeroConfig {
  eyebrow: string; title: string; titleEmphasis: string; lede: string; image: string;
  ctaPrimary: CtaLink; ctaSecondary: CtaLink; stats: Stat[]; tagCard: TagCard;
}

export interface Bullet { strong: string; rest: string; }

export interface AtacadoConfig {
  eyebrow: string; title: string; text: string; bullets: Bullet[];
  cta: string; quote: string; quoteAuthor: string;
  whatsappMessage: string;
}

export interface AboutConfig {
  eyebrow: string; title: string; paragraphs: string[];
  sealNumber: string; sealLabel: string; image: string; stats: Stat[];
}

export interface FollowConfig { eyebrow: string; title: string; text: string; }

export interface FooterLink { label: string; href: string; }
export interface FooterColumn { title: string; links: FooterLink[]; }
export interface FooterConfig {
  blurb: string;
  columns: FooterColumn[];
  tagline: string;
  contactTitle: string;
}

export interface Settings {
  currency: string;
  freeShippingFrom: number;
  installments: string;
  showThemeSwitcher: boolean;
  storageKey: string;
}

export interface Brand { name: string; legalName: string; badge: string; since: string; }

export interface Contact {
  whatsapp: string; instagramMain: string; instagramSecondary: string;
  addressLine: string; city: string; hours: string; cnpj: string;
  whatsappFloatMessage: string;
  whatsappLabel: string;
  instagramSecondaryLabel: string;
}

export interface NavItem { href: string; label: string; }

export interface SeoConfig {
  title: string;
  description: string;
  lang: string;
}

export interface UiLabels {
  /* Catálogo */
  catalogEyebrow: string;
  catalogTitle: string;
  catalogPriceNote: string;
  catalogWholesaleLink: string;
  catalogAllLabel: string;
  catalogFavLabel: string;
  sortLabel: string;
  sortRelevance: string;
  sortAsc: string;
  sortDesc: string;
  sortAz: string;
  catalogEmptyTitle: string;
  catalogFavEmptyHint: string;
  catalogCategoryEmptyHint: string;
  productRefPrefix: string;
  productFavLabel: string;
  productUnfavLabel: string;
  productAddLabel: string;
  /* Drawer */
  cartTitle: string;
  favTitle: string;
  cartEmpty: string;
  favEmpty: string;
  cartEmptyHint: string;
  favEmptyHint: string;
  viewCollection: string;
  subtotal: string;
  checkoutNote: string;
  checkoutCta: string;
  addToBag: string;
  remove: string;
  /* Toast */
  toastAdded: string;
  toastFaved: string;
  /* Mensagem de checkout no WhatsApp */
  checkoutGreeting: string;
  checkoutPaymentQuestion: string;
}

export interface SiteConfig {
  seo: SeoConfig;
  activeTheme: string;
  settings: Settings;
  brand: Brand;
  contact: Contact;
  nav: NavItem[];
  announcement: string;
  marquee: string[];
  hero: HeroConfig;
  categories: Category[];
  products: Product[];
  atacado: AtacadoConfig;
  about: AboutConfig;
  follow: FollowConfig;
  footer: FooterConfig;
  ui: UiLabels;
}

/* Estado da loja (carrinho + favoritos) */
export type DrawerType = "cart" | "fav";
export interface DrawerState { open: boolean; type: DrawerType; }
export interface ToastState { text: string; key: number; }
export type CountMap = Record<string, number>;

export interface StoreValue {
  cart: CountMap;
  fav: CountMap;
  drawer: DrawerState;
  toast: ToastState | null;
  addToCart: (ref: string) => void;
  changeQty: (ref: string, delta: number) => void;
  removeFromCart: (ref: string) => void;
  toggleFav: (ref: string) => void;
  openDrawer: (type: DrawerType) => void;
  closeDrawer: () => void;
  cartCount: number;
  favCount: number;
  cartTotal: number;
  checkoutUrl: () => string;
}
