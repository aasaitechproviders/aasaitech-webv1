import { Link } from 'react-router-dom'
import './SimplePage.css'

export default function NotFound() {
  return (
    <div className="sp">
      <section className="sp-hero" style={{ textAlign: 'center', paddingBottom: 120 }}>
        <div className="sp-hero-bg" aria-hidden />
        <div className="container">
          <div style={{ fontFamily: 'var(--display)', fontSize: '6rem', fontWeight: 700, color: 'var(--blue)', lineHeight: 1 }}>404</div>
          <h1 className="display-title" style={{ marginTop: 12 }}>Page not found</h1>
          <p className="section-sub" style={{ margin: '12px auto 28px' }}>
            The page you're looking for doesn't exist or may have moved.
          </p>
          <Link to="/" className="btn btn-ink btn-lg">Back to home <i className="fas fa-arrow-right" style={{ fontSize: '0.8rem' }} /></Link>
        </div>
      </section>
    </div>
  )
}
