import { useEffect, useRef } from 'react'
import { achievements } from '../data/resumeData'
import './Achievements.css'

export default function Achievements() {
  const refs = useRef([])

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.15 }
    )
    refs.current.forEach(r => r && obs.observe(r))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="achievements" className="section">
      <p className="section-label">Impact</p>
      <h2 className="section-title">Achievements</h2>
      <div className="achievements-grid">
        {achievements.map((a, i) => (
          <div
            key={a.label}
            className="achievement-card card fade-in"
            ref={el => (refs.current[i] = el)}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <span className="achievement-metric gradient-text">{a.metric}</span>
            <h3 className="achievement-label">{a.label}</h3>
            <p className="achievement-detail">{a.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
