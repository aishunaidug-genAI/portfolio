import { useEffect, useState } from 'react'
import { personal } from '../data/resumeData'
import './Hero.css'

const roles = [
  'Generative AI Engineer',
  'Senior Data Engineer',
  'LLMOps Practitioner',
  'RAG Pipeline Architect',
  'Multi-Agent Systems Builder',
]

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIdx]
    let timeout

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIdx(i => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIdx])

  return (
    <section id="hero" className="hero-section">
      <div className="hero-glow hero-glow--1" />
      <div className="hero-glow hero-glow--2" />
      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Available for opportunities
        </div>
        <h1 className="hero-name">{personal.name}</h1>
        <div className="hero-role">
          <span className="gradient-text">{displayed}</span>
          <span className="hero-cursor">|</span>
        </div>
        <p className="hero-tagline">
          Building production-grade GenAI systems · LangChain · GPT-4 · RAG · LLMOps · AWS · Azure
        </p>
        <div className="hero-actions">
          <a href="#projects" className="hero-btn hero-btn--primary">View Projects</a>
          <a href="#contact" className="hero-btn hero-btn--secondary">Get In Touch</a>
          <a
            href="https://github.com/aishunaidug-genAI"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn hero-btn--ghost"
          >
            GitHub
          </a>
        </div>
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-num gradient-text">4+</span>
            <span className="hero-stat-label">Years Experience</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-num gradient-text">3</span>
            <span className="hero-stat-label">Cloud Platforms</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-num gradient-text">94%</span>
            <span className="hero-stat-label">Model Precision</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat-num gradient-text">92%</span>
            <span className="hero-stat-label">RAG Accuracy</span>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="hero-scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}
