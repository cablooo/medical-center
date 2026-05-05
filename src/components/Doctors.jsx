import { useLang } from '../context/LanguageContext'

export default function Doctors() {
  const { t } = useLang()
  const d = t.doctors

  return (
    <section id="doctors" className="section section--light">
      <div className="container">
        <div className="section-header">
          <span className="badge">{d.badge}</span>
          <h2 className="section-title">{d.title}</h2>
          <p className="section-subtitle">{d.subtitle}</p>
        </div>

        <div className="doctors-grid">
          {d.items.map((doc, i) => (
            <div className="doctor-card" key={i}>
              <div className="doctor-card__avatar" style={{ background: `${doc.color}20`, color: doc.color }}>
                <span>{doc.initials}</span>
                <div className="doctor-card__online" />
              </div>
              <h3 className="doctor-card__name">{doc.name}</h3>
              <p className="doctor-card__specialty">{doc.specialty}</p>
              <p className="doctor-card__exp">{doc.exp}</p>
              <div className="doctor-card__rating">
                {'★★★★★'.split('').map((s, j) => <span key={j} className="star">{s}</span>)}
              </div>
              <a href="#appointment" className="btn btn--outline btn--sm doctor-card__btn">
                Book Appointment
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
