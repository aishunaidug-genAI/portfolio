import { useEffect, useRef } from 'react'
import { skills } from '../data/resumeData'
import './Skills.css'

export default function Skills() {
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
    <section id="skills" className="section">
      <p className="section-label">Tech Stack</p>
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((group, i) => (
          <div
            key={group.category}
            className="skills-card card fade-in"
            ref={el => (refs.current[i] = el)}
            style={{ transitionDelay: `${i * 0.07}s` }}
          >
            <div className="skills-card-header">
              <span className="skills-icon">{group.icon}</span>
              <h3 className="skills-category">{group.category}</h3>
            </div>
            <div className="skills-tags">
              {group.items.map(item => (
                <span key={item} className="tag">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
