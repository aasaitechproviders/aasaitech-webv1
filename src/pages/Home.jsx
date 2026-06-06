import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import useReveal from '../hooks/useReveal.js'
import SEO from '../components/SEO.jsx'
import ProductCard from '../components/ProductCard.jsx'
import {
  COMPANY, STATS, PARTNERS, PRODUCTS, SERVICES, CLIENTS, RAG_FLOW,
} from '../data/content.js'
import './Home.css'

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08, ease: [0.2, 0.7, 0.2, 1] } }),
}

// Single bg icon: wrapper span handles float animation, inner i holds the icon
// Separating them means rotation (transform) never conflicts with translateY animation
function BI({ icon, top, left, right, bottom, rot = 0, size = 2.2, delay = 'f1', color = 'var(--blue)', opacity = 0.1 }) {
  return (
    <span
      className={delay}
      style={{
        position: 'absolute',
        top, left, right, bottom,
        transform: `rotate(${rot}deg)`,
        display: 'inline-flex',
        color,
        opacity,
        lineHeight: 1,
        fontSize: `${size}rem`,
      }}
    >
      <i className={`fas ${icon}`} />
    </span>
  )
}

export default function Home() {
  useReveal([])
  const featured = PRODUCTS.find((p) => p.featured)
  const rest = PRODUCTS.filter((p) => !p.featured)

  return (
    <>
      <SEO path="/" />

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg-img" aria-hidden />
        {/* Hero bg icons: AI/tech theme */}
        <div className="section-bg" aria-hidden>
          <BI icon="fa-brain"          top="8%"  left="2%"   rot={-18} size={3.2} delay="f1" />
          <BI icon="fa-microchip"      top="28%" left="8%"   rot={28}  size={2.2} delay="f2" />
          <BI icon="fa-robot"          top="60%" left="3%"   rot={-30} size={1.6} delay="f3" color="var(--violet)" />
          <BI icon="fa-code"           top="80%" left="18%"  rot={40}  size={1.3} delay="f4" />
          <BI icon="fa-network-wired"  top="15%" right="6%"  rot={22}  size={2.2} delay="f5" />
          <BI icon="fa-database"       top="48%" right="3%"  rot={-45} size={1.6} delay="f6" color="var(--violet)" />
          <BI icon="fa-cloud"          top="70%" right="12%" rot={55}  size={3.2} delay="f7" />
          <BI icon="fa-code-branch"    top="40%" left="22%"  rot={-15} size={1.3} delay="f8" color="var(--green)" />
          <BI icon="fa-atom"           top="88%" right="25%" rot={25}  size={1.6} delay="f2" color="var(--violet)" />
        </div>

        <div className="container hero-inner">
          <motion.div initial="hidden" animate="show" className="hero-left">
            <motion.div variants={fadeUp} custom={0} className="hero-tag">
              <span className="tag-dot" /> {COMPANY.tagline}
            </motion.div>
            <motion.h1 variants={fadeUp} custom={1} className="hero-h1">
              Build <em>smarter</em> AI products<br />
              <span className="text-blue">for the real world.</span>
            </motion.h1>
            <motion.p variants={fadeUp} custom={2} className="hero-sub">
              We design and deploy production-grade AI systems — virtual try-on,
              intelligent RAG platforms, conversational agents, and cloud-native
              applications — purpose-built for organizations that demand results.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="hero-chips">
              <span className="chip nvidia"><i className="fas fa-microchip" /> NVIDIA Inception Member</span>
              <span className="chip dpiit"><i className="fas fa-award" /> DPIIT Recognized Startup</span>
            </motion.div>
            <motion.div variants={fadeUp} custom={4} className="hero-cta">
              <Link to="/products" className="btn btn-ink btn-lg">
                Explore Products <i className="fas fa-arrow-right" style={{ fontSize: '0.8rem' }} />
              </Link>
              <Link to="/contact" className="btn btn-outline btn-lg">Schedule a Demo</Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-right"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <div className="dash-card">
              <div className="dash-head">
                <span className="dash-dot" style={{ background: '#f87171' }} />
                <span className="dash-dot" style={{ background: '#fbbf24' }} />
                <span className="dash-dot" style={{ background: '#4ade80' }} />
                <span className="dash-url">aasaitech.in — platform overview</span>
              </div>
              <div className="dash-body">
                <div className="dash-label">Live AI Products</div>
                {PRODUCTS.slice(0, 4).map((p) => (
                  <Link to={`/products/${p.slug}`} className="dash-row" key={p.slug}>
                    <span className="dash-ic" style={{ background: p.soft, color: p.color }}>
                      <i className={`fas ${p.icon}`} />
                    </span>
                    <span className="dash-info">
                      <span className="dash-name">{p.name}</span>
                      <span className="dash-cat">{p.category}</span>
                    </span>
                    <span className="dash-live">Live</span>
                  </Link>
                ))}
                <div className="dash-stats">
                  <div><b>4+</b><span>AI Products</span></div>
                  <div><b>24/7</b><span>Availability</span></div>
                  <div><b>10+</b><span>Clients</span></div>
                </div>
              </div>
            </div>
            <div className="hero-float">NVIDIA Inception<br /><span>Verified Member</span></div>
          </motion.div>
        </div>
      </section>

      {/* ── TRUSTED BY ── */}
      <section className="trusted">
        <div className="container">
          <p className="trusted-label">Recognized &amp; Powered By</p>
          <div className="marquee">
            <div className="marquee-track">
              {[...PARTNERS, ...PARTNERS].map((p, i) => (
                <div className="tlc" key={i}>
                  <span className="tlc-ic" style={{ background: `${p.color}1a`, color: p.color }}>
                    <i className={`${p.brand ? 'fab' : 'fas'} ${p.icon}`} />
                  </span>
                  <span>
                    <span className="tlc-name" style={{ color: p.color }}>{p.name}</span>
                    <span className="tlc-sub">{p.sub}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS — numbers/growth icons ── */}
      <section className="stats-section has-bg-icons">
        <div className="section-bg" aria-hidden>
          <BI icon="fa-chart-line" top="10%"  left="1%"   rot={12}  size={3.2} delay="f1" />
          <BI icon="fa-chart-bar"  top="50%"  left="6%"   rot={-25} size={2.2} delay="f3" />
          <BI icon="fa-trophy"     top="70%"  left="22%"  rot={40}  size={1.6} delay="f5" color="var(--violet)" />
          <BI icon="fa-chart-pie"  top="15%"  right="4%"  rot={-15} size={2.2} delay="f2" />
          <BI icon="fa-rocket"     top="55%"  right="2%"  rot={25}  size={3.2} delay="f4" color="var(--violet)" />
          <BI icon="fa-star"       top="80%"  right="18%" rot={55}  size={1.3} delay="f6" />
        </div>
        <div className="container" style={{ position:'relative', zIndex:1 }}>
          <div className="stats-strip">
            {STATS.map((s, i) => (
              <div className="stat-cell reveal" key={i}>
                <div className="stat-num">{s.num}<sup>{s.suffix}</sup></div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS — product/app icons ── */}
      <section className="section has-bg-icons" id="products">
        <div className="section-bg" aria-hidden>
          <BI icon="fa-shirt"               top="5%"  left="0%"   rot={-20} size={3.2} delay="f1" color="var(--violet)" />
          <BI icon="fa-graduation-cap"      top="35%" left="5%"   rot={30}  size={2.2} delay="f3" />
          <BI icon="fa-comments"            top="65%" left="1%"   rot={-40} size={1.6} delay="f5" color="var(--green)" />
          <BI icon="fa-headset"             top="85%" left="15%"  rot={15}  size={2.2} delay="f2" color="var(--violet)" />
          <BI icon="fa-store"               top="8%"  right="1%"  rot={-25} size={3.2} delay="f4" />
          <BI icon="fa-mobile-alt"          top="40%" right="3%"  rot={40}  size={2.2} delay="f6" color="var(--violet)" />
          <BI icon="fa-robot"               top="72%" right="8%"  rot={-15} size={1.6} delay="f7" />
          <BI icon="fa-wand-magic-sparkles" top="90%" right="20%" rot={55}  size={1.3} delay="f8" color="var(--violet)" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="products-top reveal">
            <div>
              <span className="eyebrow">Our AI Products</span>
              <h2 className="display-title">Intelligent platforms<br /><span className="text-dim">built</span> <span className="text-blue">for scale.</span></h2>
            </div>
            <p className="section-sub">
              Four production-ready AI systems, each purpose-built for a distinct
              industry — from retail virtual try-on to education and customer support.
            </p>
          </div>

          {featured && (
            <div className="featured-wrap">
              <ProductCard product={featured} large />
            </div>
          )}

          <div className="products-grid">
            {rest.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM → SOLUTION — pain/fix icons ── */}
      <section className="section problem-section has-bg-icons">
        <div className="section-bg" aria-hidden>
          <BI icon="fa-times-circle"  top="8%"  left="1%"   rot={-20} size={3.2} delay="f1" color="var(--orange)" opacity={0.08} />
          <BI icon="fa-box-open"      top="40%" left="4%"   rot={30}  size={2.2} delay="f3" color="var(--orange)" opacity={0.08} />
          <BI icon="fa-check-circle"  top="12%" right="1%"  rot={-15} size={3.2} delay="f2" color="var(--green)"  opacity={0.09} />
          <BI icon="fa-bolt"          top="50%" right="3%"  rot={40}  size={2.2} delay="f4" color="var(--green)"  opacity={0.09} />
          <BI icon="fa-shield-halved" top="80%" left="20%"  rot={55}  size={1.6} delay="f5" opacity={0.08} />
          <BI icon="fa-lightbulb"     top="75%" right="15%" rot={-30} size={2.2} delay="f6" color="var(--violet)" opacity={0.08} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-head center reveal">
            <span className="eyebrow">Why AI Matters</span>
            <h2 className="display-title">The old way is <em>holding you back</em></h2>
            <p className="section-sub">
              Traditional tools create friction. Our AI products eliminate it —
              giving your users instant, intelligent answers at scale.
            </p>
          </div>
          <div className="ps-before-after reveal">
            <img src="/images/before-after-ai.png" alt="Before and after AI transformation" />
          </div>
          <div className="ps-grid reveal">
            <div className="ps-col ps-problem">
              <div className="ps-label problem"><i className="fas fa-times-circle" /> Without AI</div>
              {[
                "Customers can't visualize products before buying — leading to hesitation and returns",
                'Students search hundreds of PDF pages to find one answer',
                'Teachers spend hours answering the same repetitive questions',
                'Support queues pile up overnight with no response',
                'Building AI requires months of R&D and a dedicated team',
              ].map((t, i) => (
                <div className="ps-item" key={i}><span className="ps-x"><i className="fas fa-times" /></span>{t}</div>
              ))}
            </div>
            <div className="ps-arrow"><i className="fas fa-arrow-right" /></div>
            <div className="ps-col ps-solution">
              <div className="ps-label solution"><i className="fas fa-check-circle" /> With Aasai Tech AI</div>
              {[
                'Shoppers try on outfits virtually and buy with confidence — fewer returns, more sales',
                'Students get instant, accurate answers from the exact syllabus content',
                'AI handles repetitive queries 24/7 — teachers focus on real teaching',
                'Support Agent AI resolves queries instantly at any scale, any hour',
                'White-label AI platform deploys in days, not months',
              ].map((t, i) => (
                <div className="ps-item" key={i}><span className="ps-c"><i className="fas fa-check" /></span>{t}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES — dev/build icons ── */}
      <section className="section has-bg-icons" id="services">
        <div className="section-bg" aria-hidden>
          <BI icon="fa-laptop-code"      top="5%"  left="0%"   rot={-20} size={3.2} delay="f1" />
          <BI icon="fa-server"           top="38%" left="3%"   rot={30}  size={2.2} delay="f3" />
          <BI icon="fa-terminal"         top="70%" left="8%"   rot={-40} size={1.6} delay="f5" color="var(--violet)" />
          <BI icon="fa-cloud-upload-alt" top="10%" right="2%"  rot={15}  size={2.2} delay="f2" />
          <BI icon="fa-cogs"             top="48%" right="1%"  rot={40}  size={3.2} delay="f4" color="var(--violet)" />
          <BI icon="fa-sitemap"          top="80%" right="12%" rot={-25} size={1.6} delay="f6" />
          <BI icon="fa-code"             top="90%" left="25%"  rot={55}  size={1.3} delay="f7" color="var(--green)" />
        </div>
        <div className="container services-layout" style={{ position: 'relative', zIndex: 1 }}>
          <div className="services-sticky reveal">
            <span className="eyebrow">Services</span>
            <h2 className="display-title">What we<br /><span className="text-blue">build</span><br /><span className="text-dim">for you.</span></h2>
            <p className="section-sub" style={{ marginTop: '1.25rem' }}>
              End-to-end technology services from AI development to mobile apps and cloud infrastructure.
            </p>
            <Link to="/contact" className="btn btn-ink" style={{ marginTop: '2rem' }}>
              Start a Project <i className="fas fa-arrow-right" style={{ fontSize: '0.8rem' }} />
            </Link>
            <div className="services-img-wrap">
              <img src="/images/services-illustration.png" alt="AI development team" />
            </div>
          </div>
          <div className="services-list">
            {SERVICES.map((s) => (
              <div className="service-row reveal" key={s.num}>
                <span className="sr-num">{s.num}</span>
                <div className="sr-body">
                  <div className="sr-ic"><i className={`fas ${s.icon}`} /></div>
                  <div className="sr-name">{s.name}</div>
                  <p className="sr-desc">{s.desc}</p>
                </div>
                <span className="sr-arrow"><i className="fas fa-arrow-up-right-from-square" /></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RAG FLOW — data pipeline icons ── */}
      <section className="section ragflow-section has-bg-icons" id="ragflow">
        <div className="section-bg" aria-hidden>
          <BI icon="fa-project-diagram" top="8%"  left="1%"   rot={-20} size={3.2} delay="f1" />
          <BI icon="fa-vector-square"   top="45%" left="3%"   rot={30}  size={2.2} delay="f3" />
          <BI icon="fa-database"        top="78%" left="10%"  rot={-40} size={1.6} delay="f5" color="var(--violet)" />
          <BI icon="fa-brain"           top="10%" right="2%"  rot={15}  size={2.2} delay="f2" />
          <BI icon="fa-search"          top="50%" right="1%"  rot={40}  size={3.2} delay="f4" color="var(--violet)" />
          <BI icon="fa-comment-dots"    top="82%" right="8%"  rot={-25} size={1.6} delay="f6" color="var(--green)" />
          <BI icon="fa-cube"            top="30%" left="20%"  rot={55}  size={1.3} delay="f7" />
          <BI icon="fa-filter"          top="62%" right="22%" rot={-15} size={1.6} delay="f8" color="var(--violet)" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-head center reveal">
            <span className="eyebrow">Under The Hood</span>
            <h2 className="display-title">How <em>RAG technology</em> powers our AI</h2>
            <p className="section-sub">
              Retrieval-Augmented Generation is the architecture behind our products.
              Here's how a question becomes an accurate response in milliseconds.
            </p>
          </div>
          <div className="rag-flow reveal">
            {RAG_FLOW.map((n, i) => (
              <div className="rag-node-wrap" key={i}>
                <div className="rag-node">
                  <div className="rag-ic"><i className={`fas ${n.icon}`} /></div>
                  <div className="rag-node-title">{n.title}</div>
                  <div className="rag-node-desc">{n.desc}</div>
                </div>
                {n.edge && (
                  <div className="rag-arrow">
                    <div className="rag-line"><span className="rag-packet" /></div>
                    <div className="rag-edge-label">{n.edge}</div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="rag-diagram-img reveal">
            <img src="/images/rag-diagram.png" alt="RAG AI pipeline architecture diagram" />
          </div>

          <div className="rag-tech reveal">
            {['Azure OpenAI Embeddings', 'MongoDB Atlas Vector Search', 'Google Gemini / GPT', 'AWS Lambda Serverless', 'Streaming SSE Output'].map((t) => (
              <span className="rag-pill" key={t}><i className="fas fa-circle" /> {t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENTS — business icons ── */}
      <section className="section has-bg-icons" id="clients">
        <div className="section-bg" aria-hidden>
          <BI icon="fa-handshake" top="8%"  left="1%"   rot={-20} size={3.2} delay="f1" color="var(--violet)" />
          <BI icon="fa-briefcase" top="55%" left="4%"   rot={30}  size={2.2} delay="f3" />
          <BI icon="fa-building"  top="82%" left="14%"  rot={-40} size={1.6} delay="f5" />
          <BI icon="fa-award"     top="12%" right="2%"  rot={15}  size={2.2} delay="f2" color="var(--violet)" />
          <BI icon="fa-users"     top="50%" right="1%"  rot={40}  size={3.2} delay="f4" />
          <BI icon="fa-star"      top="80%" right="10%" rot={-25} size={1.6} delay="f6" color="var(--violet)" />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-head reveal">
            <span className="eyebrow">Client Work</span>
            <h2 className="display-title">Trusted by organizations<br /><span className="text-dim">that demand</span> <span className="text-blue">excellence.</span></h2>
          </div>
          <div className="clients-grid">
            {CLIENTS.map((c) => (
              <a className="client-card reveal" href={c.url} target="_blank" rel="noreferrer" key={c.name}>
                <div className="client-thumb" style={{ background: c.bg, color: c.color }}>
                  <i className={`fas ${c.icon}`} />
                </div>
                <div className="client-body">
                  <div className="client-cat">{c.cat}</div>
                  <h3 className="client-name">{c.name}</h3>
                  <p className="client-desc">{c.desc}</p>
                  <span className="client-link">Visit Website <i className="fas fa-external-link-alt" /></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section">
        <div className="container">
          <div className="cta-band reveal">
            <div className="cta-content">
              <h2 className="display-title" style={{ color: '#fff' }}>Let's build your <em style={{ color: 'var(--blue-2)' }}>AI advantage.</em></h2>
              <p>Have a project in mind or want a product demo? We'll get back to you within 24 hours.</p>
            </div>
            <Link to="/contact" className="btn btn-blue btn-lg cta-btn">
              Get in touch <i className="fas fa-arrow-right" style={{ fontSize: '0.8rem' }} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
