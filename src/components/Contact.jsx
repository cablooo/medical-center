import { useState } from 'react'
import { useLang } from '../context/LanguageContext'

export default function Contact() {
  const { t } = useLang()
  const c = t.contact
  const f = c.form

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  const infoItems = [
    { icon: '📍', label: c.address.label, value: c.address.value },
    { icon: '📞', label: c.phone.label, value: c.phone.value },
    { icon: '✉️', label: c.email.label, value: c.email.value },
    { icon: '🕐', label: c.hours.label, value: c.hours.value },
  ]

  return (
    <section id="contact" className="section section--light">
      <div className="container">
        <div className="section-header">
          <span className="badge">{c.badge}</span>
          <h2 className="section-title">{c.title}</h2>
          <p className="section-subtitle">{c.subtitle}</p>
        </div>

        <div className="contact__inner">
          <div className="contact__info">
            <h3 className="contact__info-title">Get in Touch</h3>
            {infoItems.map((item, i) => (
              <div className="contact-info-item" key={i}>
                <div className="contact-info-item__icon">{item.icon}</div>
                <div>
                  <div className="contact-info-item__label">{item.label}</div>
                  <div className="contact-info-item__value" style={{ whiteSpace: 'pre-line' }}>{item.value}</div>
                </div>
              </div>
            ))}

            <div className="contact__map">
              <div className="contact__map-placeholder">
                <svg viewBox="0 0 300 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="300" height="160" rx="12" fill="#e0f2fe" />
                  <circle cx="150" cy="70" r="18" fill="#0ea5e9" opacity="0.3" />
                  <circle cx="150" cy="70" r="10" fill="#0ea5e9" />
                  <path d="M150 80 L150 110" stroke="#0ea5e9" strokeWidth="2.5" />
                  <path d="M135 95 Q150 105 165 95" stroke="#0ea5e9" strokeWidth="2" fill="none" />
                  <text x="150" y="145" textAnchor="middle" fill="#0ea5e9" fontSize="11" fontFamily="Rubik">
                    MediCare Medical Center
                  </text>
                </svg>
              </div>
            </div>
          </div>

          <div className="contact__form-wrap">
            <h3 className="contact__form-title">Send Us a Message</h3>
            {submitted && <div className="form-success">✅ Message sent! We'll get back to you soon.</div>}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>{f.name}</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder={f.namePlaceholder} required />
                </div>
                <div className="form-group">
                  <label>{f.email}</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder={f.emailPlaceholder} required />
                </div>
              </div>
              <div className="form-group">
                <label>{f.subject}</label>
                <input name="subject" value={form.subject} onChange={handleChange} placeholder={f.subjectPlaceholder} required />
              </div>
              <div className="form-group">
                <label>{f.message}</label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder={f.messagePlaceholder} rows="5" required />
              </div>
              <button type="submit" className="btn btn--primary btn--full">{f.submit}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
