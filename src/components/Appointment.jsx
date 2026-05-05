import { useState } from 'react'
import { useLang } from '../context/LanguageContext'

export default function Appointment() {
  const { t } = useLang()
  const a = t.appointment
  const f = a.form

  const [form, setForm] = useState({ name: '', phone: '', email: '', department: '', date: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', phone: '', email: '', department: '', date: '', message: '' })
  }

  const infoItems = [
    { icon: '📞', ...a.info.phone },
    { icon: '✉️', ...a.info.email },
    { icon: '🕐', ...a.info.hours },
    { icon: '🚑', ...a.info.emergency },
  ]

  return (
    <section id="appointment" className="section appointment">
      <div className="container">
        <div className="section-header">
          <span className="badge badge--white">{a.badge}</span>
          <h2 className="section-title text-white">{a.title}</h2>
          <p className="section-subtitle text-white-80">{a.subtitle}</p>
        </div>

        <div className="appointment__inner">
          <div className="appointment__info">
            {infoItems.map((item, i) => (
              <div className="appt-info-card" key={i}>
                <span className="appt-info-card__icon">{item.icon}</span>
                <div>
                  <div className="appt-info-card__label">{item.label}</div>
                  <div className="appt-info-card__value">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="appointment__form-wrap">
            {submitted && (
              <div className="form-success">
                ✅ Appointment request sent! We will contact you soon.
              </div>
            )}
            <form className="appt-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>{f.name}</label>
                  <input name="name" value={form.name} onChange={handleChange} placeholder={f.namePlaceholder} required />
                </div>
                <div className="form-group">
                  <label>{f.phone}</label>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder={f.phonePlaceholder} required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>{f.email}</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder={f.emailPlaceholder} required />
                </div>
                <div className="form-group">
                  <label>{f.department}</label>
                  <select name="department" value={form.department} onChange={handleChange} required>
                    <option value="">{f.departmentPlaceholder}</option>
                    {f.departments.map((d, i) => <option key={i} value={d}>{d}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>{f.date}</label>
                <input type="date" name="date" value={form.date} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>{f.message}</label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder={f.messagePlaceholder} rows="3" />
              </div>
              <button type="submit" className="btn btn--white btn--full">{f.submit}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
