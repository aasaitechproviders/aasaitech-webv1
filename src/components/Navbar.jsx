import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { COMPANY, PRODUCTS } from '../data/content.js'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [flyout, setFlyout] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setFlyout(false)
  }, [location])

  // Navigate to a homepage anchor, working from any route
  const goAnchor = (e, hash) => {
    e.preventDefault()
    navigate('/' + hash)
  }

  return (
    <header className={`nav-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <Link to="/" className="nav-logo">
          <img src="/images/logo.png" alt="Aasai Tech" />
          <span className="nav-logo-name">
            Aasai<em>Tech</em>
          </span>
        </Link>

        <nav className={`nav-links ${open ? 'open' : ''}`}>
          <div
            className="nav-item has-flyout"
            onMouseEnter={() => setFlyout(true)}
            onMouseLeave={() => setFlyout(false)}
          >
            <button
              className="nav-link"
              onClick={() => navigate('/products')}
              aria-expanded={flyout}
            >
              Products <i className="fas fa-chevron-down nav-caret" />
            </button>
            <div className={`flyout ${flyout ? 'show' : ''}`}>
              <div className="flyout-grid">
                {PRODUCTS.map((p) => (
                  <Link key={p.slug} to={`/products/${p.slug}`} className="flyout-card">
                    <span className="flyout-ic" style={{ background: p.soft, color: p.color }}>
                      <i className={`fas ${p.icon}`} />
                    </span>
                    <span>
                      <span className="flyout-name">
                        {p.name}
                        {p.featured && <span className="flyout-new">New</span>}
                      </span>
                      <span className="flyout-cat">{p.category}</span>
                    </span>
                  </Link>
                ))}
              </div>
              <Link to="/products" className="flyout-all">
                View all products <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>

          <a className="nav-link" href="/#services" onClick={(e) => goAnchor(e, '#services')}>
            Services
          </a>
          <a className="nav-link" href="/#ragflow" onClick={(e) => goAnchor(e, '#ragflow')}>
            How AI Works
          </a>
          <a className="nav-link" href="/#clients" onClick={(e) => goAnchor(e, '#clients')}>
            Clients
          </a>
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-cta-mobile btn btn-blue" to="/contact">
            Contact us
          </Link>
        </nav>

        <div className="nav-right">
          <Link to="/contact" className="btn btn-blue nav-cta">
            Get in touch <i className="fas fa-arrow-right" style={{ fontSize: '0.75rem' }} />
          </Link>
          <button
            className="nav-toggle"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
          >
            <i className={`fas ${open ? 'fa-times' : 'fa-bars'}`} />
          </button>
        </div>
      </div>
    </header>
  )
}
