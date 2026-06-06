import { useState } from 'react'
import useReveal from '../hooks/useReveal.js'
import SEO from '../components/SEO.jsx'
import { COMPANY, PRODUCTS } from '../data/content.js'
import BgIcons from '../components/BgIcons.jsx'
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
      <section className="sp-hero ibg">
        <div className="sp-hero-bg" aria-hidden />
        <BgIcons icons={['fa-envelope','fa-phone-alt','fa-comment-dots','fa-headset','fa-paper-plane','fa-map-marker-alt','fa-clock','fa-bolt','fa-comments','fa-inbox','fa-at','fa-satellite-dish']} color="var(--blue)" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow">Contact</span>
          <h1 className="display-title">Let's build your<br /><span className="text-blue">AI advantage.</span></h1>
          <p className="section-sub" style={{ marginTop: '0.75rem' }}>
            Have a project in mind or want a product demo? We'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="section ibg" style={{ paddingTop: 0 }}>
        <div className="section-bg" aria-hidden>
          {[
            { icon:'fa-envelope',      top:'5%',  left:'0.5%', rot:-18, sz:3.2, f:'f1', color:'var(--blue)'   },
            { icon:'fa-phone',         top:'30%', left:'2%',   rot: 28, sz:2.2, f:'f3', color:'var(--blue)'   },
            { icon:'fa-comment-dots',  top:'58%', left:'0.5%', rot:-38, sz:1.6, f:'f5', color:'var(--violet)' },
            { icon:'fa-map-marker-alt',top:'80%', left:'2%',   rot: 15, sz:2.2, f:'f7', color:'var(--blue)'   },
            { icon:'fa-headset',       top:'5%',  right:'0.5%',rot: 22, sz:2.2, f:'f4', color:'var(--blue)'   },
            { icon:'fa-paper-plane',   top:'32%', right:'1%',  rot:-42, sz:3.2, f:'f6', color:'var(--violet)' },
            { icon:'fa-clock',         top:'60%', right:'0.5%',rot: 60, sz:1.6, f:'f8', color:'var(--blue)'   },
            { icon:'fa-bolt',          top:'82%', right:'4%',  rot:-20, sz:2.2, f:'f2', color:'var(--violet)' },
          ].map((b, i) => (
            <span key={i} className={b.f} style={{ position:'absolute', top:b.top, left:b.left, right:b.right, transform:`rotate(${b.rot}deg)`, display:'inline-flex', color:b.color, opacity:0.1, fontSize:`${b.sz}rem` }}>
              <i className={`fas ${b.icon}`} style={{ display:'block' }} />
            </span>
          ))}
        </div>
        <div className="container contact-layout" style={{ position:'relative', zIndex:1 }}>
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
