import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import useReveal from '../hooks/useReveal.js'
import SEO from '../components/SEO.jsx'
import { PRODUCTS } from '../data/content.js'
import './ProductPage.css'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.07, ease: [0.2, 0.7, 0.2, 1] } }),
}

// Per-product background icon sets
const PRODUCT_BG_ICONS = {
  'boutique-ai': {
    hero:     ['fa-shirt','fa-camera','fa-palette','fa-mobile-alt','fa-star','fa-image','fa-magic'],
    problems: ['fa-shopping-bag','fa-undo','fa-clock','fa-comment-slash','fa-heart-broken','fa-tag'],
    features: ['fa-camera','fa-wand-magic-sparkles','fa-tshirt','fa-palette','fa-star','fa-share-alt'],
    audience: ['fa-store','fa-instagram','fa-whatsapp','fa-gem','fa-child','fa-shoe-prints'],
  },
  'smartedu': {
    hero:     ['fa-graduation-cap','fa-book','fa-school','fa-chalkboard-teacher','fa-atom','fa-calculator','fa-pencil-ruler'],
    problems: ['fa-book-open','fa-clock','fa-file-pdf','fa-question-circle','fa-search','fa-language'],
    features: ['fa-brain','fa-upload','fa-users','fa-chart-bar','fa-language','fa-lock'],
    audience: ['fa-school','fa-user-tie','fa-chalkboard-teacher','fa-user-graduate','fa-handshake','fa-globe'],
  },
  'aasai-tech-ai': {
    hero:     ['fa-comments','fa-robot','fa-brain','fa-bolt','fa-image','fa-code','fa-cloud'],
    problems: ['fa-history','fa-download','fa-key','fa-question','fa-lock','fa-wifi'],
    features: ['fa-bolt','fa-image','fa-history','fa-chart-line','fa-palette','fa-keyboard'],
    audience: ['fa-book','fa-briefcase','fa-code','fa-globe','fa-mobile-alt','fa-lightbulb'],
  },
  'supportgent': {
    hero:     ['fa-headset','fa-comments','fa-whatsapp','fa-instagram','fa-envelope','fa-robot','fa-store'],
    problems: ['fa-moon','fa-repeat','fa-inbox','fa-puzzle-piece','fa-cart-shopping','fa-language'],
    features: ['fa-tools','fa-brain','fa-shopping-cart','fa-satellite-dish','fa-inbox','fa-globe'],
    audience: ['fa-store','fa-cut','fa-puzzle-piece','fa-comment','fa-chart-line','fa-headset'],
  },
}

// Reusable floating bg icon grid
function BgIcons({ icons, color = 'var(--p-color)' }) {
  const positions = [
    { top: '6%',  left: '1%',   rot: -18, sz: 'xl', f: 'f1' },
    { top: '28%', left: '3%',   rot:  28, sz: 'lg', f: 'f3' },
    { top: '55%', left: '1%',   rot: -38, sz: 'md', f: 'f5' },
    { top: '78%', left: '12%',  rot:  15, sz: 'lg', f: 'f7' },
    { top: '90%', left: '30%',  rot: -55, sz: 'sm', f: 'f2' },
    { top: '8%',  right: '2%',  rot:  22, sz: 'lg', f: 'f4' },
    { top: '38%', right: '1%',  rot: -42, sz: 'xl', f: 'f6' },
    { top: '65%', right: '5%',  rot:  60, sz: 'md', f: 'f8' },
    { top: '85%', right: '18%', rot: -20, sz: 'lg', f: 'f2' },
    { top: '20%', left: '18%',  rot:  45, sz: 'sm', f: 'f5' },
    { top: '48%', left: '28%',  rot: -12, sz: 'sm', f: 'f3' },
    { top: '72%', right: '25%', rot:  35, sz: 'md', f: 'f7' },
  ]
  return (
    <div className="section-bg" aria-hidden>
      {icons.slice(0, positions.length).map((icon, i) => {
        const pos = positions[i]
        const style = {
          color,
          transform: `rotate(${pos.rot}deg)`,
          fontSize: pos.sz === 'xl' ? '3.2rem' : pos.sz === 'lg' ? '2.2rem' : pos.sz === 'md' ? '1.6rem' : '1.2rem',
          ...( pos.left  !== undefined ? { left:  pos.left  } : {} ),
          ...( pos.right !== undefined ? { right: pos.right } : {} ),
          top: pos.top,
        }
        return <i key={i} className={`fas ${icon} ${pos.f}`} style={style} />
      })}
    </div>
  )
}

export default function ProductPage() {
  const { slug } = useParams()
  const p = PRODUCTS.find((x) => x.slug === slug)
  const [openFaq, setOpenFaq] = useState(0)
  useReveal([slug])

  if (!p) return <Navigate to="/products" replace />

  const others = PRODUCTS.filter((x) => x.slug !== slug).slice(0, 3)
  const accent = { '--p-color': p.color, '--p-soft': p.soft }
  const bgIcons = PRODUCT_BG_ICONS[p.slug] || PRODUCT_BG_ICONS['aasai-tech-ai']

  return (
    <div className="pp" style={accent}>
      <SEO
        title={`${p.name} — ${p.category}`}
        description={p.short}
        path={`/products/${p.slug}`}
      />
      {/* Hero */}
      <section className="pp-hero has-bg-icons">
        <div className="pp-hero-bg" aria-hidden />
        <BgIcons icons={bgIcons.hero} color={p.color} />
        <div className="pp-hero-bg-icons" aria-hidden>
          <i className={`fas ${p.icon}`} />
          <i className="fas fa-brain" />
          <i className="fas fa-microchip" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
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
                  {p.featured ? 'Start Free' : 'Launch Platform'} <i className="fas fa-arrow-right" style={{ fontSize: '0.8rem' }} />
                </a>
                {p.demoUrl && (
                  <a href={p.demoUrl} target="_blank" rel="noreferrer" className="btn btn-demo btn-lg">
                    <i className="fas fa-play-circle" style={{ fontSize: '0.85rem' }} /> {p.demoLabel || 'Try Live Demo'}
                  </a>
                )}
                <Link to="/contact" className="btn btn-outline btn-lg">Talk to us</Link>
              </motion.div>
              <motion.p variants={fadeUp} custom={4} className="pp-note">{p.hero.note}</motion.p>
            </motion.div>

            <motion.div
              className="pp-hero-card"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {p.heroImg && (
                <img src={p.heroImg} alt={`${p.name} screenshot`} className="pp-hero-img" />
              )}
              <div className="pp-hero-card-body">
                <div className="pp-card-ic" style={{ background: p.soft, color: p.color }}>
                  <i className={`fas ${p.icon}`} />
                </div>
                <div className="pp-card-name">{p.name}</div>
                <div className="pp-card-cat">{p.category}</div>
                {p.metrics ? (
                  <div className="pp-card-metrics">
                    {p.metrics.map((m, i) => (
                      <div key={i}>
                        <b style={{ color: p.color }}>{m.num}</b>
                        <span>{m.label}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="pp-card-blurb">{p.short}</p>
                )}
                <a href={p.url} target="_blank" rel="noreferrer" className="pp-card-url">
                  <i className="fas fa-globe" /> {p.url.replace('https://', '')}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems it solves */}
      {p.problems && (
        <section className="section pp-problems-section has-bg-icons">
          <BgIcons icons={bgIcons.problems} color={p.color} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="section-head center reveal">
              <span className="eyebrow">The problem</span>
              <h2 className="display-title">Real problems, <em>solved</em></h2>
            </div>
            <div className="pp-problems-grid">
              {p.problems.map((pr, i) => (
                <div className="pp-problem reveal" key={i}>
                  <div className="pp-problem-ic">{pr.icon}</div>
                  <h4>{pr.title}</h4>
                  <p>{pr.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How it works */}
      {p.steps && (
        <section className="section pp-steps-section">
          <div className="container">
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
                  <div className="pp-step-num">Step 0{i + 1}</div>
                  <div className="pp-step-ic">{s.icon}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <span className="pp-step-time">⚡ {s.time}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Audience */}
      {p.audience && (
        <section className="section has-bg-icons">
          <BgIcons icons={bgIcons.audience} color={p.color} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
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
                  <h4>{a.title}</h4>
                  <p>{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features */}
      <section className="section pp-feat-section has-bg-icons">
        <BgIcons icons={bgIcons.features} color={p.color} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-head center reveal">
            <span className="eyebrow">Features</span>
            <h2 className="display-title">Everything you need,<br />nothing you don't</h2>
          </div>
          <div className="pp-feat-grid">
            {p.features.map((f, i) => (
              <div className="pp-feat reveal" key={i}>
                <div className="pp-feat-ic">{typeof f.icon === 'string' && f.icon.length <= 3 ? f.icon : <i className={`fas ${f.icon}`} />}</div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing (BoutiqueAI) */}
      {p.pricing && (
        <section className="section pp-pricing-section">
          <div className="container">
            <div className="section-head center reveal">
              <span className="eyebrow">Pricing</span>
              <h2 className="display-title">{p.featured ? "Start free. Scale when you're ready." : 'Plans that scale with you'}</h2>
              <p className="section-sub">Choose the tier that fits, and upgrade anytime. Visit the platform for current plans and pricing.</p>
            </div>
            <div className="pp-plans">
              {p.pricing.map((plan, i) => (
                <div className={`pp-plan reveal ${plan.popular ? 'popular' : ''}`} key={i}>
                  {plan.popular && <div className="pp-plan-badge">Most Popular</div>}
                  <div className="pp-plan-name">{plan.name}</div>
                  <div className="pp-plan-price">
                    <span className="pp-amt">{plan.price}</span>
                    {plan.period && <span className="pp-per">{plan.period}</span>}
                  </div>
                  <div className="pp-plan-note">{plan.note}</div>
                  <div className="pp-plan-credits">⚡ {plan.credits}</div>
                  <hr className="divider" />
                  <ul className="pp-plan-feats">
                    {plan.feats.map((f, j) => (
                      <li key={j}><i className="fas fa-check" /> {f}</li>
                    ))}
                  </ul>
                  <a href={p.url} target="_blank" rel="noreferrer" className={`btn ${plan.popular ? 'pp-btn-primary' : 'btn-outline'} pp-plan-cta`}>
                    View plan <i className="fas fa-arrow-up-right-from-square" style={{ fontSize: '0.7rem' }} />
                  </a>
                </div>
              ))}
            </div>
            {p.pricingNote && <p className="pp-pricing-foot">{p.pricingNote}</p>}
          </div>
        </section>
      )}

      {/* Why this product */}
      {p.why && (
        <section className="section pp-why-section">
          <div className="container">
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

      {/* Use cases (BoutiqueAI) */}
      {p.useCases && (
        <section className="section">
          <div className="container">
            <div className="section-head center reveal">
              <span className="eyebrow">Real-world use cases</span>
              <h2 className="display-title">How {p.name} solves<br />real problems</h2>
            </div>
            <div className="pp-cases">
              {p.useCases.map((c, i) => (
                <div className="pp-case reveal" key={i}>
                  <span className="pp-case-num">0{i + 1}</span>
                  <div>
                    <h4>{c.title}</h4>
                    <p>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Security (BoutiqueAI) */}
      {p.security && (
        <section className="section pp-sec-section">
          <div className="container">
            <div className="section-head center reveal">
              <span className="eyebrow">Security & privacy</span>
              <h2 className="display-title">Customer data is safe</h2>
            </div>
            <div className="pp-sec-grid">
              {p.security.map((s, i) => (
                <div className="pp-sec reveal" key={i}>
                  <div className="pp-sec-ic">{s.icon}</div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tech */}
      {p.tech && (
        <section className="section pp-tech-section">
          <div className="container reveal">
            <span className="eyebrow" style={{ textAlign: 'center', display: 'block' }}>Built on</span>
            <div className="pp-tech-row">
              {p.tech.map((t) => (
                <span className="pp-tech-pill" key={t}><i className="fas fa-circle" /> {t}</span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ (BoutiqueAI) */}
      {p.faq && (
        <section className="section pp-faq-section">
          <div className="container">
            <div className="section-head center reveal">
              <span className="eyebrow">FAQ</span>
              <h2 className="display-title">Straight answers</h2>
            </div>
            <div className="pp-faq reveal">
              {p.faq.map((f, i) => (
                <div className={`pp-faq-item ${openFaq === i ? 'open' : ''}`} key={i}>
                  <button className="pp-faq-q" onClick={() => setOpenFaq(openFaq === i ? -1 : i)}>
                    {f.q}
                    <i className={`fas fa-chevron-down`} />
                  </button>
                  <div className="pp-faq-a"><p>{f.a}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="pp-cta-band reveal">
            <h2 className="display-title" style={{ color: '#fff' }}>
              Ready to put <em style={{ color: p.color }}>{p.name}</em> to work?
            </h2>
            <div className="pp-cta-actions">
              <a href={p.url} target="_blank" rel="noreferrer" className="btn pp-btn-primary btn-lg">
                {p.featured ? 'Get Started Free' : 'Launch Platform'} <i className="fas fa-arrow-right" style={{ fontSize: '0.8rem' }} />
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

      {/* Other products */}
      <section className="section pp-more-section">
        <div className="container">
          <div className="section-head reveal"><span className="eyebrow">More from Aasai Tech</span>
            <h2 className="display-title">Explore other products</h2></div>
          <div className="pp-more-grid">
            {others.map((o) => (
              <Link to={`/products/${o.slug}`} className="pp-more-card reveal" key={o.slug}>
                <span className="pp-more-ic" style={{ background: o.soft, color: o.color }}>
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
