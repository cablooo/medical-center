import { useLang } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLang()
  const h = t.hero

  return (
    <section id="home" className="hero">
      <div className="hero__bg-shapes">
        <div className="hero__shape hero__shape--1" />
        <div className="hero__shape hero__shape--2" />
        <div className="hero__shape hero__shape--3" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="badge">{h.badge}</span>
          <h1 className="hero__title">
            {h.title} <br />
            <span className="text-primary">{h.titleHighlight}</span>
          </h1>
          <p className="hero__subtitle">{h.subtitle}</p>
          <div className="hero__actions">
            <a href="#appointment" className="btn btn--primary">{h.cta1}</a>
            <a href="#services" className="btn btn--outline">{h.cta2}</a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__card-wrap">
            <div className="hero__main-card">
              <div className="hero__pulse-ring" />
              <svg viewBox="0 0 200 200" className="hero__medical-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="90" fill="#e0f2fe" />
                <circle cx="100" cy="100" r="70" fill="#bae6fd" />
                <rect x="82" y="55" width="36" height="90" rx="8" fill="#0ea5e9" />
                <rect x="55" y="82" width="90" height="36" rx="8" fill="#0ea5e9" />
                <circle cx="100" cy="100" r="15" fill="white" />
                <path d="M94 100 L98 104 L107 95" stroke="#0ea5e9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="hero__float-card hero__float-card--tl">
              <span className="hero__float-icon">👨‍⚕️</span>
              <div>
                <div className="hero__float-value">150+</div>
                <div className="hero__float-label">{h.stat2Label}</div>
              </div>
            </div>

            <div className="hero__float-card hero__float-card--br">
              <span className="hero__float-icon">😊</span>
              <div>
                <div className="hero__float-value">50K+</div>
                <div className="hero__float-label">{h.stat3Label}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container hero__stats">
        {[
          { value: h.stat1Value, label: h.stat1Label, icon: '🏆' },
          { value: h.stat2Value, label: h.stat2Label, icon: '👨‍⚕️' },
          { value: h.stat3Value, label: h.stat3Label, icon: '😊' },
          { value: h.stat4Value, label: h.stat4Label, icon: '🏥' },
        ].map((s, i) => (
          <div className="hero__stat" key={i}>
            <span className="hero__stat-icon">{s.icon}</span>
            <div className="hero__stat-value">{s.value}</div>
            <div className="hero__stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
