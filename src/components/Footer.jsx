import { Link } from 'react-router-dom'
import { COMPANY, PRODUCTS, SERVICES } from '../data/content.js'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src="/images/logo.png" alt="Aasai Tech" />
            <span>
              Aasai<em>Tech</em>
            </span>
          </Link>
          <p>
            DPIIT-recognized startup and NVIDIA Inception member building
            production-grade AI from Tamil Nadu for the world.
          </p>

          {/* Contact details — visible to Google & users */}
          <address className="footer-contact">
            <a href={COMPANY.phoneHref} className="footer-contact-row">
              <i className="fas fa-phone-alt" />
              <span>{COMPANY.phone}</span>
            </a>
            <a href={`mailto:${COMPANY.email}`} className="footer-contact-row">
              <i className="fas fa-envelope" />
              <span>{COMPANY.email}</span>
            </a>
            <div className="footer-contact-row">
              <i className="fas fa-map-marker-alt" />
              <span>{COMPANY.location}</span>
            </div>
          </address>

          <div className="footer-social">
            <a href={COMPANY.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
            <a href={COMPANY.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
            <a href={COMPANY.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fab fa-instagram" /></a>
            <a href={COMPANY.social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube"><i className="fab fa-youtube" /></a>
          </div>
        </div>

        <div className="footer-col">
          <h5>AI Products</h5>
          <ul>
            {PRODUCTS.map((p) => (
              <li key={p.slug}>
                <Link to={`/products/${p.slug}`}>{p.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h5>Services</h5>
          <ul>
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.num}>
                <Link to="/#services">{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h5>Company</h5>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/#clients">Client Work</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></li>
            <li><a href={COMPANY.phoneHref}>{COMPANY.phone}</a></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {year} {COMPANY.legalName}. All Rights Reserved.</p>
        <div className="footer-badges">
          <span className="fbadge nv">NVIDIA Inception</span>
          <span className="fbadge dp">DPIIT Recognized</span>
        </div>
      </div>
    </footer>
  )
}
