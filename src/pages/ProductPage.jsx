import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import useReveal from '../hooks/useReveal.js'
import SEO from '../components/SEO.jsx'
import BgIcons from '../components/BgIcons.jsx'
import { PRODUCTS } from '../data/content.js'
import './ProductPage.css'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.07, ease: [0.2, 0.7, 0.2, 1] } }),
}

const PRODUCT_ICONS = {
  'boutique-ai':   ['fa-shirt','fa-camera','fa-palette','fa-mobile-alt','fa-star','fa-image','fa-wand-magic-sparkles','fa-gem','fa-heart','fa-sparkles','fa-tshirt','fa-shopping-bag'],
  'smartedu':      ['fa-graduation-cap','fa-book','fa-school','fa-chalkboard-teacher','fa-atom','fa-calculator','fa-pencil-ruler','fa-microscope','fa-flask','fa-brain','fa-lightbulb','fa-award'],
  'aasai-tech-ai': ['fa-comments','fa-robot','fa-brain','fa-bolt','fa-image','fa-code','fa-cloud','fa-keyboard','fa-wifi','fa-microchip','fa-terminal','fa-atom'],
  'supportgent':   ['fa-headset','fa-comments','fa-envelope','fa-robot','fa-store','fa-globe','fa-mobile-alt','fa-satellite-dish','fa-chart-line','fa-bell','fa-inbox','fa-bolt'],
}

// Each product gets a unique, distinct background icon color
// Chosen to be on-brand but clearly different from each other
const PRODUCT_BG_COLOR = {
  'boutique-ai':   '#c084fc',   // soft lavender-rose — feminine, fashion-forward
  'smartedu':      '#38bdf8',   // sky blue — fresh, academic, trustworthy
  'aasai-tech-ai': '#34d399',   // mint green — free, open, tech-fresh
  'supportgent':   '#fb923c',   // warm amber-orange — energetic, support, action
}

export default function ProductPage() {
  const { slug } = useParams()
  const p = PRODUCTS.find((x) => x.slug === slug)
  const [openFaq, setOpenFaq] = useState(0)
  useReveal([slug])

  if (!p) return <Navigate to="/products" replace />

  const others = PRODUCTS.filter((x) => x.slug !== slug).slice(0, 3)
  const accent = { '--p-color': p.color, '--p-soft': p.soft }
  const bgColor = PRODUCT_BG_COLOR[p.slug] || p.color
  // Override --p-color with the unique bg palette color for buttons too
  const pageStyle = { '--p-color': bgColor, '--p-soft': p.soft }
  
  

  return (
    <div className="pp" style={pageStyle}>
      <SEO title={`${p.name} — ${p.category}`} description={p.short} path={`/products/${p.slug}`} />

      {/* ── HERO ── */}
      <section className="pp-hero ibg">
        <div className="pp-hero-bg" aria-hidden />
        <BgIcons icons={PRODUCT_ICONS[p.slug] || PRODUCT_ICONS['aasai-tech-ai']} color={bgColor} />
        <div className="container" style={{position:'relative',zIndex:1}}>
          <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="pp-crumb">
            <Link to="/">Home</Link> <i className="fas fa-chevron-right" /> <Link to="/products">Products</Link>{' '}
            <i className="fas fa-chevron-right" /> <span>{p.name}</span>
          </motion.nav>
          <div className="pp-hero-grid">
            <motion.div initial="hidden" animate="show">
              <motion.div variants={fadeUp} custom={0} className="pp-badge" style={{ background: p.soft, color: p.color }}>
                {p.hero.badge}
              </motion.div>
              <motion.h1 variants={fadeUp} custom={1} className="pp-title">{p.hero.title}</motion.h1>
              <motion.p variants={fadeUp} custom={2} className="pp-sub">{p.hero.sub}</motion.p>
              <motion.div variants={fadeUp} custom={3} className="pp-cta">
                <a href={p.url} target="_blank" rel="noreferrer" className="btn btn-lg pp-btn-primary">
                  {p.featured ? 'Start Free' : 'Launch Platform'} <i className="fas fa-arrow-right" style={{ fontSize:'0.8rem' }} />
                </a>
                {p.demoUrl && (
                  <a href={p.demoUrl} target="_blank" rel="noreferrer" className="btn btn-demo btn-lg">
                    <i className="fas fa-play-circle" style={{ fontSize:'0.85rem' }} /> {p.demoLabel || 'Try Live Demo'}
                  </a>
                )}
                <Link to="/contact" className="btn btn-outline btn-lg">Talk to us</Link>
              </motion.div>
              <motion.p variants={fadeUp} custom={4} className="pp-note">{p.hero.note}</motion.p>
            </motion.div>
            <motion.div className="pp-hero-card" initial={{ opacity:0, scale:0.96 }} animate={{ opacity:1, scale:1 }} transition={{ duration:0.7, delay:0.2 }}>
              {p.heroImg && <img src={p.heroImg} alt={`${p.name} screenshot`} className="pp-hero-img" />}
              <div className="pp-hero-card-body">
                <div className="pp-card-ic" style={{ background:p.soft, color:p.color }}><i className={`fas ${p.icon}`} /></div>
                <div className="pp-card-name">{p.name}</div>
                <div className="pp-card-cat">{p.category}</div>
                {p.metrics ? (
                  <div className="pp-card-metrics">
                    {p.metrics.map((m, i) => <div key={i}><b style={{ color:p.color }}>{m.num}</b><span>{m.label}</span></div>)}
                  </div>
                ) : <p className="pp-card-blurb">{p.short}</p>}
                <a href={p.url} target="_blank" rel="noreferrer" className="pp-card-url">
                  <i className="fas fa-globe" /> {p.url.replace('https://','')}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PROBLEMS ── */}
      {p.problems && (
        <section className="section pp-problems-section ibg">
          <BgIcons icons={PRODUCT_ICONS[p.slug] || PRODUCT_ICONS['aasai-tech-ai']} color={bgColor} />
          <div className="container" style={{position:'relative',zIndex:1}}>
            <div className="section-head center reveal">
              <span className="eyebrow">The problem</span>
              <h2 className="display-title">Real problems, <em>solved</em></h2>
            </div>
            <div className="pp-problems-grid">
              {p.problems.map((pr, i) => (
                <div className="pp-problem reveal" key={i}>
                  <div className="pp-problem-ic">{pr.icon}</div>
                  <h4>{pr.title}</h4><p>{pr.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── HOW IT WORKS ── */}
      {p.steps && (
        <section className="section pp-steps-section ibg">
          <BgIcons icons={PRODUCT_ICONS[p.slug] || PRODUCT_ICONS['aasai-tech-ai']} color={bgColor} />
          <div className="container" style={{position:'relative',zIndex:1}}>
            <div className="section-head center reveal">
              <span className="eyebrow">How it works</span>
              <h2 className="display-title">
                {p.steps.length === 4 ? <>Live in four<br />simple steps</> : <>From zero to live<br />in three steps</>}
              </h2>
            </div>
            {p.slug === 'smartedu' && (
              <div className="pp-section-img pp-section-img--small reveal">
                <img src="/images/smartedu-student.png" alt="Student using AI study assistant" />
              </div>
            )}
            <div className="pp-steps">
              {p.steps.map((s, i) => (
                <div className="pp-step reveal" key={i}>
                  <div className="pp-step-num">Step 0{i+1}</div>
                  <div className="pp-step-ic">{s.icon}</div>
                  <h3>{s.title}</h3><p>{s.desc}</p>
                  <span className="pp-step-time">⚡ {s.time}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── AUDIENCE ── */}
      {p.audience && (
        <section className="section ibg">
          <BgIcons icons={PRODUCT_ICONS[p.slug] || PRODUCT_ICONS['aasai-tech-ai']} color={bgColor} />
          <div className="container" style={{position:'relative',zIndex:1}}>
            <div className="section-head center reveal">
              <span className="eyebrow">Who it's for</span>
              <h2 className="display-title">Built for the people<br />who'll put it to work</h2>
            </div>
            {p.slug === 'boutique-ai' && (
              <div className="pp-section-img reveal">
                <img src="/images/boutique-storefront.png" alt="Indian boutique storefront" />
              </div>
            )}
            {p.slug === 'supportgent' && (
              <div className="pp-section-img pp-section-img--small reveal">
                <img src="/images/supportgent-channels.png" alt="SupportGent multi-channel" />
              </div>
            )}
            <div className="pp-who-grid">
              {p.audience.map((a, i) => (
                <div className="pp-who reveal" key={i}>
                  <div className="pp-who-emoji">{a.emoji}</div>
                  <h4>{a.title}</h4><p>{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FEATURES ── */}
      <section className="section pp-feat-section ibg">
        <BgIcons icons={PRODUCT_ICONS[p.slug] || PRODUCT_ICONS['aasai-tech-ai']} color={bgColor} />
        <div className="container" style={{position:'relative',zIndex:1}}>
          <div className="section-head center reveal">
            <span className="eyebrow">Features</span>
            <h2 className="display-title">Everything you need,<br />nothing you don't</h2>
          </div>
          <div className="pp-feat-grid">
            {p.features.map((f, i) => (
              <div className="pp-feat reveal" key={i}>
                <div className="pp-feat-ic">{typeof f.icon === 'string' && f.icon.length <= 3 ? f.icon : <i className={`fas ${f.icon}`} />}</div>
                <h4>{f.title}</h4><p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY THIS PRODUCT ── */}
      {p.why && (
        <section className="section pp-why-section ibg">
          <BgIcons icons={PRODUCT_ICONS[p.slug] || PRODUCT_ICONS['aasai-tech-ai']} color={bgColor} />
          <div className="container" style={{position:'relative',zIndex:1}}>
            <div className="pp-why-wrap reveal">
              <div className="pp-why-head">
                <span className="eyebrow">Why {p.name}</span>
                <h2 className="display-title">Built to deliver,<br />not just demo.</h2>
              </div>
              <ul className="pp-why-list">
                {p.why.map((w, i) => (
                  <li key={i}><span className="pp-why-check"><i className="fas fa-check" /></span>{w}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* ── USE CASES ── */}
      {p.useCases && (
        <section className="section ibg">
          <BgIcons icons={PRODUCT_ICONS[p.slug] || PRODUCT_ICONS['aasai-tech-ai']} color={bgColor} />
          <div className="container" style={{position:'relative',zIndex:1}}>
            <div className="section-head center reveal">
              <span className="eyebrow">Real-world use cases</span>
              <h2 className="display-title">How {p.name} solves<br />real problems</h2>
            </div>
            <div className="pp-cases">
              {p.useCases.map((c, i) => (
                <div className="pp-case reveal" key={i}>
                  <span className="pp-case-num">0{i+1}</span>
                  <div><h4>{c.title}</h4><p>{c.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── SECURITY ── */}
      {p.security && (
        <section className="section pp-sec-section ibg">
          <BgIcons icons={PRODUCT_ICONS[p.slug] || PRODUCT_ICONS['aasai-tech-ai']} color={bgColor} />
          <div className="container" style={{position:'relative',zIndex:1}}>
            <div className="section-head center reveal">
              <span className="eyebrow">Security & privacy</span>
              <h2 className="display-title">Customer data is safe</h2>
            </div>
            <div className="pp-sec-grid">
              {p.security.map((s, i) => (
                <div className="pp-sec reveal" key={i}>
                  <div className="pp-sec-ic">{s.icon}</div>
                  <h4>{s.title}</h4><p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── TECH STACK ── */}
      {p.tech && (
        <section className="section pp-tech-section ibg">
          <BgIcons icons={PRODUCT_ICONS[p.slug] || PRODUCT_ICONS['aasai-tech-ai']} color={bgColor} />
          <div className="container reveal" style={{position:'relative',zIndex:1}}>
            <span className="eyebrow" style={{ textAlign:'center', display:'block' }}>Built on</span>
            <div className="pp-tech-row">
              {p.tech.map((t) => (
                <span className="pp-tech-pill" key={t}><i className="fas fa-circle" /> {t}</span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      {p.faq && (
        <section className="section pp-faq-section ibg">
          <BgIcons icons={PRODUCT_ICONS[p.slug] || PRODUCT_ICONS['aasai-tech-ai']} color={bgColor} />
          <div className="container" style={{position:'relative',zIndex:1}}>
            <div className="section-head center reveal">
              <span className="eyebrow">FAQ</span>
              <h2 className="display-title">Straight answers</h2>
            </div>
            <div className="pp-faq reveal">
              {p.faq.map((f, i) => (
                <div className={`pp-faq-item ${openFaq === i ? 'open' : ''}`} key={i}>
                  <button className="pp-faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                    {f.q}<i className="fas fa-chevron-down" />
                  </button>
                  <div className="pp-faq-a"><p>{f.a}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="section ibg">
        <BgIcons icons={PRODUCT_ICONS[p.slug] || PRODUCT_ICONS['aasai-tech-ai']} color={bgColor} />
        <div className="container" style={{position:'relative',zIndex:1}}>
          <div className="pp-cta-band reveal">
            <h2 className="display-title" style={{ color:'#fff' }}>
              Ready to put <em style={{ color:p.color }}>{p.name}</em> to work?
            </h2>
            <div className="pp-cta-actions">
              <a href={p.url} target="_blank" rel="noreferrer" className="btn pp-btn-primary btn-lg">
                {p.featured ? 'Get Started Free' : 'Launch Platform'} <i className="fas fa-arrow-right" style={{ fontSize:'0.8rem' }} />
              </a>
              {p.demoUrl && (
                <a href={p.demoUrl} target="_blank" rel="noreferrer" className="btn btn-demo btn-lg">
                  <i className="fas fa-play-circle" /> {p.demoLabel || 'Try Live Demo'}
                </a>
              )}
              <Link to="/contact" className="btn btn-outline btn-lg pp-cta-ghost">Contact sales</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── MORE PRODUCTS ── */}
      <section className="section pp-more-section ibg">
        <BgIcons icons={['fa-shirt','fa-graduation-cap','fa-comments','fa-headset','fa-robot','fa-store','fa-brain','fa-bolt','fa-mobile-alt','fa-cloud','fa-code','fa-star']} color={bgColor} />
        <div className="container" style={{position:'relative',zIndex:1}}>
          <div className="section-head reveal">
            <span className="eyebrow">More from Aasai Tech</span>
            <h2 className="display-title">Explore other products</h2>
          </div>
          <div className="pp-more-grid">
            {others.map((o) => (
              <Link to={`/products/${o.slug}`} className="pp-more-card reveal" key={o.slug}>
                <span className="pp-more-ic" style={{ background:o.soft, color:o.color }}>
                  <i className={`fas ${o.icon}`} />
                </span>
                <div>
                  <div className="pp-more-name">{o.name}</div>
                  <div className="pp-more-cat">{o.category}</div>
                </div>
                <i className="fas fa-arrow-right pp-more-arrow" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
