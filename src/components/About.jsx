import { useEffect, useRef } from 'react'
import { summary } from '../data/resumeData'
import './About.css'

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current?.classList.add('visible') },
      { threshold: 0.2 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" className="section">
      <p className="section-label">Who I Am</p>
      <h2 className="section-title">About Me</h2>
      <div className="about-grid fade-in" ref={ref}>
        <div className="about-text card">
          <p>{summary}</p>
        </div>
        <div className="about-highlights">
          {[
            { icon: '🤖', title: 'GenAI & LLMOps', desc: 'Production RAG systems, multi-agent pipelines, prompt engineering, and hallucination monitoring at enterprise scale.' },
            { icon: '☁️', title: 'Cloud Native', desc: 'AWS, Azure, and GCP — building scalable serverless pipelines across all three major cloud platforms.' },
            { icon: '⚙️', title: 'Data Engineering', desc: 'End-to-end ETL/ELT with Snowflake, dbt, Airflow — integrating GenAI capabilities directly into data workflows.' },
          ].map(h => (
            <div key={h.title} className="about-highlight card">
              <span className="about-highlight-icon">{h.icon}</span>
              <div>
                <h4 className="about-highlight-title">{h.title}</h4>
                <p className="about-highlight-desc">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
