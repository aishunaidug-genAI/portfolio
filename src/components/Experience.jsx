import { useEffect, useRef } from 'react'
import { experience } from '../data/resumeData'
import './Experience.css'

export default function Experience() {
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
    <section id="experience" className="section">
      <p className="section-label">Career</p>
      <h2 className="section-title">Experience</h2>
      <div className="exp-timeline">
        {experience.map((job, i) => (
          <div
            key={job.company}
            className="exp-item fade-in"
            ref={el => (refs.current[i] = el)}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="exp-dot" />
            <div className="exp-card card">
              <div className="exp-header">
                <div>
                  <h3 className="exp-company">{job.company}</h3>
                  <p className="exp-role gradient-text">{job.role}</p>
                </div>
                <div className="exp-meta">
                  <span className="exp-period">{job.period}</span>
                  <span className="exp-location">{job.location}</span>
                </div>
              </div>
              <ul className="exp-bullets">
                {job.bullets.map((b, j) => (
                  <li key={j}>
                    <span className="exp-bullet-dot" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
