import { useLang } from '../context/LanguageContext'

export default function About() {
  const { t } = useLang()
  const a = t.about

  return (
    <section id="about" className="section">
      <div className="container about__inner">
        <div className="about__visual">
          <div className="about__img-wrap">
            <div className="about__img-bg" />
            <div className="about__img-card">
              <svg viewBox="0 0 300 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="about__illustration">
                <rect width="300" height="340" rx="20" fill="#f0f9ff" />
                <circle cx="150" cy="100" r="55" fill="#bae6fd" />
                <circle cx="150" cy="88" r="35" fill="#0ea5e9" />
                <ellipse cx="150" cy="280" rx="90" ry="110" fill="#bae6fd" />
                <rect x="127" y="170" width="46" height="60" rx="6" fill="#0ea5e9" />
                <circle cx="150" cy="88" r="28" fill="#fff" />
                <path d="M138 88 L146 96 L163 79" stroke="#0ea5e9" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="105" y="195" width="20" height="10" rx="3" fill="white" opacity="0.8" />
                <rect x="175" y="195" width="20" height="10" rx="3" fill="white" opacity="0.8" />
              </svg>
            </div>
            <div className="about__exp-badge">
              <span className="about__exp-value">{a.experience}</span>
              <span className="about__exp-label">{a.experienceLabel}</span>
            </div>
          </div>
        </div>

        <div className="about__content">
          <span className="badge">{a.badge}</span>
          <h2 className="section-title">{a.title}</h2>
          <p className="about__subtitle">{a.subtitle}</p>
          <ul className="about__points">
            {a.points.map((point, i) => (
              <li key={i} className="about__point">
                <span className="about__point-icon">✓</span>
                {point}
              </li>
            ))}
          </ul>
          <a href="#appointment" className="btn btn--primary">{a.cta}</a>
        </div>
      </div>
    </section>
  )
}
