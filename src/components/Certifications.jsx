import { useEffect, useRef } from 'react'
import { certifications } from '../data/resumeData'
import './Certifications.css'

export default function Certifications() {
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
    <section id="certifications" className="section">
      <p className="section-label">Credentials</p>
      <h2 className="section-title">Certifications</h2>
      <div className="certs-grid">
        {certifications.map((cert, i) => (
          <div
            key={cert.name}
            className="cert-card card fade-in"
            ref={el => (refs.current[i] = el)}
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <span className="cert-icon">{cert.icon}</span>
            <div>
              <h3 className="cert-name">{cert.name}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
