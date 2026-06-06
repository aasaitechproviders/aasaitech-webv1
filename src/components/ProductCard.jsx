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
          {p.heroImg ? (
            <img src={p.heroImg} alt={p.name} className="pcf-hero-img" />
          ) : (
            <span className="pcf-ic"><i className={`fas ${p.icon}`} /></span>
          )}
          <div className="pcf-badges">
            {p.featured && <span className="pcf-new">✨ New product</span>}
            {p.live && <span className="pcf-live">Live</span>}
          </div>
          {p.highlights && (
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
          <div className="pcf-actions">
            <span className="pcf-link">
              Explore {p.name} <i className="fas fa-arrow-right" />
            </span>
            {p.demoUrl && (
              <span className="pcf-demo" onClick={(e) => { e.preventDefault(); window.open(p.demoUrl, '_blank'); }}>
                <i className="fas fa-play-circle" /> {p.demoLabel || 'Try Demo'}
              </span>
            )}
          </div>
        </div>
      </Link>
    )
  }

  return (
    <div className="pcard-wrap reveal" style={{ '--pc': p.color, '--pc-soft': p.soft }}>
      {p.heroImg && (
        <div className="pcard-img-wrap">
          <img src={p.heroImg} alt={p.name} className="pcard-img" />
          {p.live && <span className="pcard-live-badge">● Live</span>}
        </div>
      )}
      <Link to={`/products/${p.slug}`} className="pcard">
        {!p.heroImg && (
          <div className="pcard-top">
            <span className="pcard-ic" style={{ background: p.soft, color: p.color }}>
              <i className={`fas ${p.icon}`} />
            </span>
            {p.live && <span className="pcard-live">Live</span>}
          </div>
        )}
        <div className="pcard-cat" style={{ color: p.color }}>{p.category}</div>
        <h3 className="pcard-name">{p.name}</h3>
        <p className="pcard-desc">{p.short}</p>
        <div className="pcard-foot">
          <span className="pcard-link">
            Explore <i className="fas fa-arrow-right" />
          </span>
          {p.demoUrl && (
            <a
              href={p.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="pcard-demo-btn"
              onClick={(e) => e.stopPropagation()}
            >
              <i className="fas fa-external-link-alt" /> Demo
            </a>
          )}
        </div>
      </Link>
    </div>
  )
}
