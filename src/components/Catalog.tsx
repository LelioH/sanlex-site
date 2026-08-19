import { useMemo, useState } from "react";
import config from "../site.config";
import { useStore } from "../store/StoreContext";
import ProductCard from "./ProductCard";

type SortKey = "rel" | "asc" | "desc" | "az";

interface CatalogProps {
  filter: string;
  setFilter: (id: string) => void;
}

export default function Catalog({ filter, setFilter }: CatalogProps) {
  const { fav } = useStore();
  const [sort, setSort] = useState<SortKey>("rel");
  const ui = config.ui;

  const chips = useMemo(() => {
    const base = [
      { id: "all", name: ui.catalogAllLabel },
      ...config.categories,
      { id: "fav", name: ui.catalogFavLabel }
    ];
    return base.map((c) => {
      let n: number;
      if (c.id === "all") n = config.products.length;
      else if (c.id === "fav") n = Object.keys(fav).length;
      else n = config.products.filter((p) => p.cats.includes(c.id)).length;
      return { id: c.id, name: c.name, n };
    });
  }, [fav]);

  const list = useMemo(() => {
    let l = config.products.slice();
    if (filter === "fav") l = l.filter((p) => fav[p.ref]);
    else if (filter !== "all") l = l.filter((p) => p.cats.includes(filter));
    if (sort === "asc") l.sort((a, b) => a.price - b.price);
    else if (sort === "desc") l.sort((a, b) => b.price - a.price);
    else if (sort === "az") l.sort((a, b) => a.name.localeCompare(b.name, "pt"));
    return l;
  }, [filter, sort, fav]);

  return (
    <section className="section" id="colecao" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="eyebrow">{ui.catalogEyebrow}</span>
            <h2>{ui.catalogTitle}</h2>
          </div>
          <p>{ui.catalogPriceNote} <a href="#atacado">{ui.catalogWholesaleLink}</a>.</p>
        </div>

        <div className="controls">
          <div className="filters">
            {chips.map((c) => (
              <button
                key={c.id}
                className={"chip" + (filter === c.id ? " active" : "")}
                onClick={() => setFilter(c.id)}
              >
                {c.name}<span className="n">{c.n}</span>
              </button>
            ))}
          </div>
          <div className="sortbox">
            <label htmlFor="sort">{ui.sortLabel}</label>
            <select id="sort" value={sort} onChange={(e) => setSort(e.target.value as SortKey)}>
              <option value="rel">{ui.sortRelevance}</option>
              <option value="asc">{ui.sortAsc}</option>
              <option value="desc">{ui.sortDesc}</option>
              <option value="az">{ui.sortAz}</option>
            </select>
          </div>
        </div>

        <div className="grid">
          {list.length ? (
            list.map((p) => <ProductCard key={p.ref} product={p} />)
          ) : (
            <div className="empty">
              <h3>{ui.catalogEmptyTitle}</h3>
              <p>{filter === "fav" ? ui.catalogFavEmptyHint : ui.catalogCategoryEmptyHint}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
