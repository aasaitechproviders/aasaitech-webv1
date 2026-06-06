import { useState } from 'react'
import useReveal from '../hooks/useReveal.js'
import SEO from '../components/SEO.jsx'
import { COMPANY, PRODUCTS } from '../data/content.js'
import './SimplePage.css'

// Email backend used by the existing aasaitech.in site
const API_BASE = 'https://aasai-tech-api.onrender.com/aasaitech/email'

const interests = [
  ['boutique-ai', 'BoutiqueAI — Virtual Try-On'],
  ['smartedu', 'Aasai SmartEDU — School Platform'],
  ['aasai-tech-ai', 'Aasai Tech AI — Free AI Chat'],
  ['supportgent', 'SupportGent — Support & Sales'],
  ['custom-ai', 'Custom AI Development'],
  ['web-mobile', 'Web / Mobile Development'],
  ['cloud', 'Cloud & DevOps'],
  ['training', 'Technical Training'],
  ['other', 'Other'],
]

export default function Contact() {
  useReveal([])
  const [form, setForm] = useState({ name: '', email: '', interest: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [msg, setMsg] = useState('')

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setMsg('')
    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) throw new Error(data.message || 'Network error')
      setStatus('success')
      setMsg('Thanks! Your message is on its way — we’ll reply within 24 hours.')
      setForm({ name: '', email: '', interest: '', subject: '', message: '' })
    } catch (err) {
      setStatus('error')
      setMsg('Something went wrong sending your message. Please email us directly at ' + COMPANY.email + '.')
    }
  }

  return (
    <div className="sp">
      <SEO title="Contact" path="/contact" description="Get in touch with Aasai Tech for a product demo or to discuss your AI project. We reply within 24 hours on business days." />
      <section className="sp-hero has-bg-icons">
        <div className="sp-hero-bg" aria-hidden />
        {/* Contact page bg icons: communication theme */}
        <div className="section-bg" aria-hidden>
          <i className="fas fa-envelope    f1" style={{ top:'10%', left:'1%',  color:'var(--blue)', opacity:'0.06', fontSize:'3rem',   transform:'rotate(-18deg)' }} />
          <i className="fas fa-phone-alt   f3" style={{ top:'48%', left:'3%',  color:'var(--blue)', opacity:'0.05', fontSize:'2.2rem', transform:'rotate(28deg)'  }} />
          <i className="fas fa-comment-dots f5" style={{ top:'80%', left:'12%', color:'var(--violet)',opacity:'0.05', fontSize:'2.8rem', transform:'rotate(-35deg)' }} />
          <i className="fas fa-headset     f2" style={{ top:'12%', right:'2%', color:'var(--blue)', opacity:'0.06', fontSize:'3.2rem', transform:'rotate(22deg)'  }} />
          <i className="fas fa-paper-plane f4" style={{ top:'50%', right:'1%', color:'var(--violet)',opacity:'0.05', fontSize:'2.4rem', transform:'rotate(-42deg)' }} />
          <i className="fas fa-map-marker-alt f6" style={{ top:'78%', right:'10%',color:'var(--blue)', opacity:'0.05', fontSize:'2rem', transform:'rotate(55deg)'  }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow">Contact</span>
          <h1 className="display-title">Let's build your<br /><span className="text-blue">AI advantage.</span></h1>
          <p className="section-sub" style={{ marginTop: '0.75rem' }}>
            Have a project in mind or want a product demo? We'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container contact-layout">
          <div className="reveal">
            <div className="contact-img-wrap">
              <img src="/images/contact-illustration.png" alt="Aasai Tech support" />
            </div>
            {[
              ['fa-envelope', 'Email', <a href={`mailto:${COMPANY.email}`} key="e">{COMPANY.email}</a>],
              ['fa-phone', 'Phone', <a href={COMPANY.phoneHref} key="p">{COMPANY.phone}</a>],
              ['fa-map-marker-alt', 'Location', COMPANY.location],
              ['fa-clock', 'Response Time', COMPANY.responseTime],
            ].map(([icon, label, val], i) => (
              <div className="ci-row" key={i}>
                <div className="ci-ic"><i className={`fas ${icon}`} /></div>
                <div><h5>{label}</h5><p>{val}</p></div>
              </div>
            ))}
            <div className="ci-social">
              <a href={COMPANY.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
              <a href={COMPANY.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
              <a href={COMPANY.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><i className="fab fa-instagram" /></a>
              <a href={COMPANY.social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube"><i className="fab fa-youtube" /></a>
            </div>
          </div>

          <div className="reveal">
            <form className="form-box" onSubmit={submit}>
              <div className="form-title">Send us a message</div>
              <div className="two-col">
                <div className="fg">
                  <label htmlFor="name">Full Name</label>
                  <input id="name" type="text" placeholder="Your name" required value={form.name} onChange={update('name')} />
                </div>
                <div className="fg">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" type="email" placeholder="you@company.com" required value={form.email} onChange={update('email')} />
                </div>
              </div>
              <div className="fg">
                <label htmlFor="interest">I'm interested in</label>
                <select id="interest" value={form.interest} onChange={update('interest')}>
                  <option value="">Select a service or product…</option>
                  {interests.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
                </select>
              </div>
              <div className="fg">
                <label htmlFor="subject">Subject</label>
                <input id="subject" type="text" placeholder="Brief subject line" required value={form.subject} onChange={update('subject')} />
              </div>
              <div className="fg">
                <label htmlFor="message">Message</label>
                <textarea id="message" placeholder="Tell us about your project or requirements…" required value={form.message} onChange={update('message')} />
              </div>
              <button type="submit" className="btn btn-ink" style={{ width: '100%', justifyContent: 'center' }} disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : <>Send Message <i className="fas fa-paper-plane" style={{ fontSize: '0.8rem' }} /></>}
              </button>
              {msg && <div className={`form-msg ${status}`}>{msg}</div>}
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
