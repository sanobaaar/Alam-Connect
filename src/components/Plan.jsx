import { Link } from "react-router-dom"
import { ArrowUpRight } from "react-bootstrap-icons"

const Plan = () => {
  return (
    <div className="plan-footer">
      <div className="footer-intro">
        <div className="footer-intro-copy">
          <span className="footer-eyebrow">ALAM CONNECT · EST. IN TRAVEL</span>
          <h2>
            The world is closer
            <br />
            <em>than you think.</em>
          </h2>
        </div>

        <Link to="/contact" className="footer-cta">
          <span>Let's plan your journey</span>
          <ArrowUpRight size={19} />
        </Link>
      </div>

      <div className="footer-divider" />
    </div>
  )
}

export default Plan
