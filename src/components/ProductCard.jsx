import { Link } from 'react-router-dom'
import './ProductCard.css'

export default function ProductCard({ product, large = false }) {
  const p = product

  if (large) {
    return (
      <Link
        to={`/products/${p.slug}`}
        className="pcard-feature reveal"
        style={{ '--pc': p.color, '--pc-soft': p.soft }}
      >
        <div className="pcf-visual">
          <span className="pcf-ic"><i className={`fas ${p.icon}`} /></span>
          <div className="pcf-badges">
            {p.featured && <span className="pcf-new">New product</span>}
            {p.live && <span className="pcf-live">Live</span>}
          </div>

          {/* Metrics when available */}
          {p.metrics && (
            <div className="pcf-metrics">
              {p.metrics.slice(0, 3).map((m, i) => (
                <div key={i}>
                  <b>{m.num}</b>
                  <span>{m.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* Highlights fallback when no metrics */}
          {!p.metrics && p.highlights && (
            <ul className="pcf-highlights">
              {p.highlights.map((h, i) => (
                <li key={i}>
                  <span className="pcf-hl-ic"><i className={h.icon} /></span>
                  {h.label}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="pcf-body">
          <div className="pcf-cat">{p.category}</div>
          <h3 className="pcf-name">{p.name}</h3>
          <p className="pcf-desc">{p.short}</p>
          <span className="pcf-link">
            Explore {p.name} <i className="fas fa-arrow-right" />
          </span>
        </div>
      </Link>
    )
  }

  return (
    <Link
      to={`/products/${p.slug}`}
      className="pcard reveal"
      style={{ '--pc': p.color, '--pc-soft': p.soft }}
    >
      <div className="pcard-top">
        <span className="pcard-ic" style={{ background: p.soft, color: p.color }}>
          <i className={`fas ${p.icon}`} />
        </span>
        {p.live && <span className="pcard-live">Live</span>}
      </div>
      <div className="pcard-cat" style={{ color: p.color }}>{p.category}</div>
      <h3 className="pcard-name">{p.name}</h3>
      <p className="pcard-desc">{p.short}</p>
      <div className="pcard-foot">
        <span className="pcard-link">
          Explore {p.name} <i className="fas fa-arrow-right" />
        </span>
      </div>
    </Link>
  )
}
