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

const PRODUCT_BG_ICONS = {
  'boutique-ai': {
    hero:     ['fa-shirt','fa-camera','fa-palette','fa-mobile-alt','fa-star','fa-image','fa-magic','fa-wand-magic-sparkles','fa-tshirt','fa-gem','fa-heart','fa-sparkles'],
    problems: ['fa-shopping-bag','fa-undo','fa-clock','fa-comment-slash','fa-tag','fa-box-open'],
    steps:    ['fa-camera','fa-upload','fa-link','fa-share-alt','fa-mobile-alt','fa-check-circle'],
    audience: ['fa-store','fa-gem','fa-child','fa-shoe-prints','fa-tags','fa-bags-shopping'],
    features: ['fa-wand-magic-sparkles','fa-palette','fa-chart-bar','fa-lock','fa-download','fa-star'],
    pricing:  ['fa-tag','fa-credit-card','fa-bolt','fa-gift','fa-percent','fa-award'],
    usecases: ['fa-whatsapp','fa-instagram','fa-store','fa-child','fa-heart','fa-share'],
    security: ['fa-lock','fa-shield-halved','fa-user-shield','fa-key'],
    faq:      ['fa-question-circle','fa-comment-dots','fa-info-circle','fa-lightbulb'],
    cta:      ['fa-shirt','fa-camera','fa-wand-magic-sparkles','fa-store'],
  },
  'smartedu': {
    hero:     ['fa-graduation-cap','fa-book','fa-school','fa-chalkboard-teacher','fa-atom','fa-calculator','fa-pencil-ruler','fa-microscope','fa-flask','fa-brain','fa-lightbulb','fa-award'],
    problems: ['fa-book-open','fa-clock','fa-file-pdf','fa-question-circle','fa-search','fa-language'],
    steps:    ['fa-school','fa-users','fa-upload','fa-comments','fa-check-circle','fa-graduation-cap'],
    audience: ['fa-school','fa-user-tie','fa-chalkboard-teacher','fa-user-graduate','fa-handshake','fa-globe'],
    features: ['fa-brain','fa-upload','fa-users','fa-chart-bar','fa-language','fa-lock'],
    why:      ['fa-graduation-cap','fa-school','fa-globe','fa-shield-halved','fa-users','fa-server'],
    cta:      ['fa-graduation-cap','fa-book','fa-brain','fa-school'],
  },
  'aasai-tech-ai': {
    hero:     ['fa-comments','fa-robot','fa-brain','fa-bolt','fa-image','fa-code','fa-cloud','fa-keyboard','fa-wifi','fa-microchip','fa-terminal','fa-atom'],
    problems: ['fa-history','fa-download','fa-key','fa-question','fa-lock','fa-wifi'],
    steps:    ['fa-user-plus','fa-comments','fa-image','fa-chart-bar','fa-bolt','fa-cloud'],
    audience: ['fa-book','fa-briefcase','fa-code','fa-globe','fa-mobile-alt','fa-lightbulb'],
    features: ['fa-bolt','fa-image','fa-history','fa-chart-line','fa-palette','fa-keyboard'],
    why:      ['fa-robot','fa-globe','fa-shield','fa-download','fa-star','fa-bolt'],
    cta:      ['fa-robot','fa-brain','fa-comments','fa-bolt'],
  },
  'supportgent': {
    hero:     ['fa-headset','fa-comments','fa-envelope','fa-robot','fa-store','fa-globe','fa-mobile-alt','fa-satellite-dish','fa-chart-line','fa-bell','fa-inbox','fa-bolt'],
    problems: ['fa-moon','fa-repeat','fa-inbox','fa-puzzle-piece','fa-cart-shopping','fa-language'],
    steps:    ['fa-robot','fa-book','fa-shopping-cart','fa-rocket','fa-check-circle','fa-headset'],
    audience: ['fa-store','fa-cut','fa-puzzle-piece','fa-comment','fa-chart-line','fa-headset'],
    features: ['fa-tools','fa-brain','fa-shopping-cart','fa-satellite-dish','fa-inbox','fa-globe'],
    pricing:  ['fa-tag','fa-bolt','fa-headset','fa-chart-bar','fa-globe','fa-star'],
    why:      ['fa-headset','fa-globe','fa-satellite-dish','fa-shield','fa-bolt','fa-robot'],
    cta:      ['fa-headset','fa-robot','fa-comments','fa-bolt'],
  },
}

// Positions grid — 12 slots with varied placement, rotation, size, speed
const POS = [
  { top:'5%',  left:'0.5%', rot:-18, sz:3.2, f:'f1' },
  { top:'22%', left:'2%',   rot: 28, sz:2.2, f:'f3' },
  { top:'44%', left:'0.5%', rot:-38, sz:1.6, f:'f5' },
  { top:'66%', left:'2%',   rot: 15, sz:2.2, f:'f7' },
  { top:'84%', left:'10%',  rot:-55, sz:1.3, f:'f2' },
  { top:'92%', left:'28%',  rot: 35, sz:1.6, f:'f8' },
  { top:'5%',  right:'0.5%',rot: 22, sz:2.2, f:'f4' },
  { top:'26%', right:'1%',  rot:-42, sz:3.2, f:'f6' },
  { top:'50%', right:'0.5%',rot: 60, sz:1.6, f:'f8' },
  { top:'70%', right:'4%',  rot:-20, sz:2.2, f:'f1' },
  { top:'88%', right:'16%', rot: 45, sz:1.3, f:'f5' },
  { top:'38%', left:'46%',  rot:-12, sz:1.3, f:'f3' },
]

function BgIcons({ icons, color }) {
  const c = color || 'var(--blue)'
  return (
    <div className="section-bg" aria-hidden>
      {icons.slice(0, POS.length).map((icon, i) => {
        const p = POS[i]
        return (
          <span key={i} className={p.f} style={{
            position:'absolute', top:p.top,
            ...(p.left  ? {left:p.left}   : {}),
            ...(p.right ? {right:p.right} : {}),
            display:'inline-flex', transform:`rotate(${p.rot}deg)`,
            opacity:0.1, color:c, lineHeight:1, fontSize:`${p.sz}rem`,
          }}>
            <i className={`fas ${icon}`} style={{display:'block'}} />
          </span>
        )
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
  const bg = PRODUCT_BG_ICONS[p.slug] || PRODUCT_BG_ICONS['aasai-tech-ai']
  const Z = { position:'relative', zIndex:1 }

  return (
    <div className="pp" style={accent}>
      <SEO title={`${p.name} — ${p.category}`} description={p.short} path={`/products/${p.slug}`} />

      {/* ── HERO ── */}
      <section className="pp-hero has-bg-icons">
        <div className="pp-hero-bg" aria-hidden />
        <BgIcons icons={bg.hero} color={p.color} />
        <div className="container" style={Z}>
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
        <section className="section pp-problems-section has-bg-icons">
          <BgIcons icons={bg.problems} color={p.color} />
          <div className="container" style={Z}>
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
        <section className="section pp-steps-section has-bg-icons">
          <BgIcons icons={bg.steps || bg.hero} color={p.color} />
          <div className="container" style={Z}>
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
        <section className="section has-bg-icons">
          <BgIcons icons={bg.audience} color={p.color} />
          <div className="container" style={Z}>
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
      <section className="section pp-feat-section has-bg-icons">
        <BgIcons icons={bg.features} color={p.color} />
        <div className="container" style={Z}>
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

      {/* ── PRICING ── */}
      {p.pricing && (
        <section className="section pp-pricing-section has-bg-icons">
          <BgIcons icons={bg.pricing || bg.features} color={p.color} />
          <div className="container" style={Z}>
            <div className="section-head center reveal">
              <span className="eyebrow">Pricing</span>
              <h2 className="display-title">{p.featured ? "Start free. Scale when you're ready." : 'Plans that scale with you'}</h2>
              <p className="section-sub">Choose the tier that fits, and upgrade anytime.</p>
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
                    {plan.feats.map((f, j) => <li key={j}><i className="fas fa-check" /> {f}</li>)}
                  </ul>
                  <a href={p.url} target="_blank" rel="noreferrer" className={`btn ${plan.popular ? 'pp-btn-primary' : 'btn-outline'} pp-plan-cta`}>
                    View plan <i className="fas fa-arrow-up-right-from-square" style={{ fontSize:'0.7rem' }} />
                  </a>
                </div>
              ))}
            </div>
            {p.pricingNote && <p className="pp-pricing-foot">{p.pricingNote}</p>}
          </div>
        </section>
      )}

      {/* ── WHY THIS PRODUCT ── */}
      {p.why && (
        <section className="section pp-why-section has-bg-icons">
          <BgIcons icons={bg.why || bg.features} color={p.color} />
          <div className="container" style={Z}>
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
        <section className="section has-bg-icons">
          <BgIcons icons={bg.usecases || bg.audience} color={p.color} />
          <div className="container" style={Z}>
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
        <section className="section pp-sec-section has-bg-icons">
          <BgIcons icons={bg.security || ['fa-lock','fa-shield-halved','fa-user-shield','fa-key','fa-database','fa-cloud']} color={p.color} />
          <div className="container" style={Z}>
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
        <section className="section pp-tech-section has-bg-icons">
          <BgIcons icons={['fa-microchip','fa-server','fa-cloud','fa-code','fa-database','fa-network-wired','fa-atom','fa-cogs','fa-terminal','fa-layer-group','fa-bolt','fa-shield']} color={p.color} />
          <div className="container reveal" style={Z}>
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
        <section className="section pp-faq-section has-bg-icons">
          <BgIcons icons={bg.faq || ['fa-question-circle','fa-comment-dots','fa-info-circle','fa-lightbulb','fa-circle-info','fa-comments']} color={p.color} />
          <div className="container" style={Z}>
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
      <section className="section has-bg-icons">
        <BgIcons icons={bg.cta || bg.hero.slice(0,6)} color={p.color} />
        <div className="container" style={Z}>
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
      <section className="section pp-more-section has-bg-icons">
        <BgIcons icons={['fa-shirt','fa-graduation-cap','fa-comments','fa-headset','fa-robot','fa-store','fa-brain','fa-bolt','fa-mobile-alt','fa-cloud','fa-code','fa-star']} color="var(--blue)" />
        <div className="container" style={Z}>
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
