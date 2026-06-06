import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal.js'
import SEO from '../components/SEO.jsx'
import { COMPANY, STATS, SERVICES } from '../data/content.js'
import './SimplePage.css'

export default function About() {
  useReveal([])
  return (
    <div className="sp">
      <SEO title="About" path="/about" description="Aasai Tech is an AI-first software studio in Tamil Nadu — a DPIIT-recognized startup and NVIDIA Inception member building production-grade AI for the world." />
      <section className="sp-hero">
        <div className="sp-hero-bg" aria-hidden />
        <div className="sp-hero-accent" aria-hidden />
        <div className="container">
          <span className="eyebrow">About Aasai Tech</span>
          <h1 className="display-title">An AI-first software studio<br /><span className="text-blue">building from Tamil Nadu.</span></h1>
          <p className="section-sub" style={{ marginTop: '1rem' }}>
            {COMPANY.legalName} is a DPIIT-recognized startup and NVIDIA Inception member
            building production-grade AI from Tamil Nadu for the world. We design and deploy
            real systems — virtual try-on, RAG platforms, conversational agents, and
            cloud-native applications — for organizations that demand results.
          </p>
          <div className="hero-chips" style={{ display: 'flex', gap: 10, marginTop: 24, flexWrap: 'wrap' }}>
            <span className="chip nvidia"><i className="fas fa-microchip" /> NVIDIA Inception Member</span>
            <span className="chip dpiit"><i className="fas fa-award" /> DPIIT Recognized Startup</span>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-img-wrap reveal">
            <img src="/images/aboutus.png" alt="Aasai Tech team and workspace" />
          </div>

          <div className="stats-strip about-stats reveal">
            {STATS.map((s, i) => (
              <div className="stat-cell" key={i}>
                <div className="stat-num">{s.num}<sup>{s.suffix}</sup></div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="about-grid">
            <div className="reveal">
              <h2 className="display-title" style={{ fontSize: 'clamp(1.6rem,3vw,2.3rem)' }}>What we do</h2>
              <p className="section-sub" style={{ marginTop: '0.75rem' }}>
                End-to-end technology, from AI research and development through to mobile apps,
                web platforms, and cloud infrastructure. We turn knowledge locked in documents
                into conversational, searchable intelligence — and ship it fast.
              </p>
            </div>
            <div className="about-svc reveal">
              {SERVICES.map((s) => (
                <div className="about-svc-row" key={s.num}>
                  <span className="about-svc-ic"><i className={`fas ${s.icon}`} /></span>
                  <div>
                    <div className="about-svc-name">{s.name}</div>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-cta reveal">
            <div>
              <h3 className="display-title" style={{ color: '#fff', fontSize: 'clamp(1.5rem,3vw,2.1rem)' }}>Want the full picture?</h3>
              <p>Download our company brochure or get in touch to discuss your project.</p>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href={COMPANY.brochure} target="_blank" rel="noreferrer" className="btn btn-blue btn-lg">
                <i className="fas fa-file-pdf" /> Download Brochure
              </a>
              <Link to="/contact" className="btn btn-outline btn-lg" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.25)' }}>
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
