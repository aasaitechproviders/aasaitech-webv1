import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal.js'
import SEO from '../components/SEO.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { PRODUCTS } from '../data/content.js'
import './SimplePage.css'

export default function ProductsIndex() {
  useReveal([])
  const featured = PRODUCTS.find((p) => p.featured)
  const rest = PRODUCTS.filter((p) => !p.featured)
  return (
    <div className="sp">
      <SEO title="AI Products" path="/products" description="Explore Aasai Tech’s four production AI systems — BoutiqueAI virtual try-on, Aasai SmartEDU school platform, Aasai Tech AI free chat, and SupportGent support & sales agents." />
      <section className="sp-hero">
        <div className="sp-hero-bg" aria-hidden />
        <div className="container">
          <span className="eyebrow">Our AI Products</span>
          <h1 className="display-title">Four production AI systems,<br /><span className="text-blue">one studio.</span></h1>
          <p className="section-sub" style={{ marginTop: '1rem' }}>
            Each product is purpose-built for a distinct industry — from retail virtual
            try-on to education, free AI chat, and customer support. Click any product to
            explore it in depth.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {featured && <div style={{ marginBottom: 18 }}><ProductCard product={featured} large /></div>}
          <div className="sp-products-grid">
            {rest.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </div>
      </section>
    </div>
  )
}
