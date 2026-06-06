import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal.js'
import SEO from '../components/SEO.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { PRODUCTS } from '../data/content.js'
import './SimplePage.css'

const BG = [
  { icon:'fa-shirt',          top:'6%',  left:'0.5%', rot:-18, sz:3.2, f:'f1', color:'var(--violet)' },
  { icon:'fa-graduation-cap', top:'26%', left:'2%',   rot: 28, sz:2.2, f:'f3', color:'var(--blue)'   },
  { icon:'fa-comments',       top:'50%', left:'0.5%', rot:-38, sz:1.6, f:'f5', color:'var(--green)'  },
  { icon:'fa-headset',        top:'74%', left:'2%',   rot: 15, sz:2.2, f:'f7', color:'var(--violet)' },
  { icon:'fa-robot',          top:'90%', left:'18%',  rot:-55, sz:1.3, f:'f2', color:'var(--blue)'   },
  { icon:'fa-brain',          top:'6%',  right:'0.5%',rot: 22, sz:2.2, f:'f4', color:'var(--blue)'   },
  { icon:'fa-store',          top:'30%', right:'1%',  rot:-42, sz:3.2, f:'f6', color:'var(--violet)' },
  { icon:'fa-mobile-alt',     top:'56%', right:'0.5%',rot: 60, sz:1.6, f:'f8', color:'var(--blue)'   },
  { icon:'fa-wand-magic-sparkles',top:'78%',right:'4%',rot:-20,sz:2.2,f:'f1', color:'var(--violet)' },
  { icon:'fa-cloud',          top:'92%', right:'20%', rot: 35, sz:1.3, f:'f5', color:'var(--blue)'   },
]

export default function ProductsIndex() {
  useReveal([])
  const featured = PRODUCTS.find((p) => p.featured)
  const rest = PRODUCTS.filter((p) => !p.featured)
  return (
    <div className="sp">
      <SEO title="AI Products" path="/products" description="Explore Aasai Tech's four production AI systems — BoutiqueAI virtual try-on, Aasai SmartEDU school platform, Aasai Tech AI free chat, and SupportGent support & sales agents." />

      <section className="sp-hero has-bg-icons">
        <div className="sp-hero-bg" aria-hidden />
        {BG.map((b, i) => (
          <span key={i} className={b.f} style={{ position:'absolute', top:b.top, left:b.left, right:b.right, transform:`rotate(${b.rot}deg)`, display:'inline-flex', color:b.color, opacity:0.1, fontSize:`${b.sz}rem`, zIndex:0 }}>
            <i className={`fas ${b.icon}`} style={{ display:'block' }} />
          </span>
        ))}
        <div className="container" style={{ position:'relative', zIndex:1 }}>
          <span className="eyebrow">Our AI Products</span>
          <h1 className="display-title">Four production AI systems,<br /><span className="text-blue">one studio.</span></h1>
          <p className="section-sub" style={{ marginTop: '1rem' }}>
            Each product is purpose-built for a distinct industry — from retail virtual
            try-on to education, free AI chat, and customer support. Click any product to
            explore it in depth.
          </p>
        </div>
      </section>

      <section className="section has-bg-icons" style={{ paddingTop: 0 }}>
        {BG.map((b, i) => (
          <span key={i} className={b.f} style={{ position:'absolute', top:b.top, left:b.left, right:b.right, transform:`rotate(${b.rot}deg)`, display:'inline-flex', color:b.color, opacity:0.08, fontSize:`${b.sz}rem` }}>
            <i className={`fas ${b.icon}`} style={{ display:'block' }} />
          </span>
        ))}
        <div className="container" style={{ position:'relative', zIndex:1 }}>
          {featured && <div style={{ marginBottom: 18 }}><ProductCard product={featured} large /></div>}
          <div className="sp-products-grid">
            {rest.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      </section>
    </div>
  )
}
