import { Outlet, useLocation, Link } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import './styles/floating-contact.css'

// Scroll to top on route change, or to a hash target (e.g. /#services) if present.
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60)
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname, hash])
  return null
}

export default function Layout() {
  const location = useLocation()
  // Don't show the float on the contact page itself
  const showFloat = location.pathname !== '/contact'

  return (
    <>
      <ScrollManager />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />

      {showFloat && (
        <Link to="/contact" className="float-contact">
          <span className="float-contact-icon">
            <i className="fas fa-comment-dots" />
          </span>
          <span className="float-contact-label">Contact Us</span>
        </Link>
      )}
    </>
  )
}
