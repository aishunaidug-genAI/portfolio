import { useEffect, useRef } from 'react'
import { education } from '../data/resumeData'
import './Education.css'

export default function Education() {
  const refs = useRef([])

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    refs.current.forEach(r => r && obs.observe(r))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="education" className="section">
      <p className="section-label">Background</p>
      <h2 className="section-title">Education</h2>
      <div className="edu-grid">
        {education.map((edu, i) => (
          <div
            key={edu.school}
            className="edu-card card fade-in"
            ref={el => (refs.current[i] = el)}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="edu-icon">🎓</div>
            <div className="edu-content">
              <h3 className="edu-school">{edu.school}</h3>
              <p className="edu-degree gradient-text">{edu.degree}</p>
              <div className="edu-meta">
                <span>{edu.period}</span>
                <span>·</span>
                <span>{edu.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
