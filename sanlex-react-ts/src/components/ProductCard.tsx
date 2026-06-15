import config from "../site.config";
import type { Product } from "../types";
import { money, productCategory, fillStyle } from "../lib/catalog";
import Glyph from "../lib/Glyph";
import { useStore } from "../store/StoreContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleFav, fav } = useStore();
  const cat = productCategory(product);
  const isFav = !!fav[product.ref];

  return (
    <article className="card">
      <div className={"card-media" + (product.imageBack ? " has-back" : "")}>
        {product.badge ? <div className="tag-badge">{product.badge}</div> : null}
        <button
          className={"fav" + (isFav ? " on" : "")}
          aria-label={isFav ? config.ui.productUnfavLabel : config.ui.productFavLabel}
          aria-pressed={isFav}
          onClick={() => toggleFav(product.ref)}
        >
          <svg viewBox="0 0 24 24">
            <path d="M12 21s-7.5-4.8-9.7-9.3C.8 8.4 2.3 5 5.7 5c2 0 3.4 1.2 4.3 2.6C10.9 6.2 12.3 5 14.3 5c3.4 0 4.9 3.4 3.4 6.7C19.5 16.2 12 21 12 21z" />
          </svg>
        </button>
        {product.image ? (
          <>
            <img className="fill fill-front" src={product.image} alt={product.name} loading="lazy" />
            {product.imageBack && (
              <img className="fill fill-back" src={product.imageBack} alt="" loading="lazy" />
            )}
          </>
        ) : (
          <>
            <div className="fill" style={fillStyle(cat)} />
            <span className="glyph"><Glyph id={cat.glyph} /></span>
          </>
        )}
      </div>

      <div className="card-body">
        <span className="ref">{config.ui.productRefPrefix}{product.ref}</span>
        <h3>{product.name}</h3>
        <span className="fabric">{product.fabric}</span>
        <div className="sizes">
          {product.sizes.map((s) => <span key={s} className="size">{s}</span>)}
        </div>
        <div className="card-foot">
          <div className="price">
            {money(product.price)}
            <small>ou {config.settings.installments}</small>
          </div>
          <button className="add" onClick={() => addToCart(product.ref)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12h14" />
            </svg>
            <span>{config.ui.productAddLabel}</span>
          </button>
        </div>
      </div>
    </article>
  );
}
