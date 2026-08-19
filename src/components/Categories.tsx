import config from "../site.config";
import { fillStyle } from "../lib/catalog";
import Glyph from "../lib/Glyph";

interface CategoriesProps {
  onPick?: (id: string) => void;
}

export default function Categories({ onPick }: CategoriesProps) {
  return (
    <section className="section" id="categorias">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="eyebrow">Navegue por tipo</span>
            <h2>Cada peça no seu lugar</h2>
          </div>
          <p>Escolha uma categoria e o catálogo se ajusta — do básico do dia a dia ao conjunto especial.</p>
        </div>
        <div className="cats">
          {config.categories.map((c) => {
            const count = config.products.filter((p) => p.cats.includes(c.id)).length;
            return (
              <a key={c.id} className="cat" href="#colecao" onClick={() => onPick?.(c.id)}>
                {c.image ? (
                  <img className="fill" src={c.image} alt={c.name} />
                ) : (
                  <>
                    <div className="fill" style={fillStyle(c)} />
                    <span className="glyph"><Glyph id={c.glyph} /></span>
                  </>
                )}
                <span className="label">
                  {c.name}
                  <span className="count">{count} modelos</span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
