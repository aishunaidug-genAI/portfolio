import { useEffect, useRef } from 'react'
import { projects } from '../data/resumeData'
import './Projects.css'

export default function Projects() {
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
    <section id="projects" className="section">
      <p className="section-label">Work</p>
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((proj, i) => (
          <div
            key={proj.title}
            className="project-card card fade-in"
            ref={el => (refs.current[i] = el)}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div className="project-top">
              <div className="project-folder">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3 7C3 5.9 3.9 5 5 5H11L13 7H19C20.1 7 21 7.9 21 9V17C21 18.1 20.1 19 19 19H5C3.9 19 3 18.1 3 17V7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-github"
                aria-label="View on GitHub"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>
            <h3 className="project-title">{proj.title}</h3>
            <ul className="project-bullets">
              {proj.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
            <div className="project-tags">
              {proj.tags.map(tag => (
                <span key={tag} className="tag cyan">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
