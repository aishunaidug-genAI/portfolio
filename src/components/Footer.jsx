import { personal } from '../data/resumeData'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">
        Built with React · Deployed on GitHub Pages
      </p>
      <p className="footer-copy">
        © {new Date().getFullYear()} <span className="gradient-text">{personal.name}</span>
      </p>
    </footer>
  )
}
