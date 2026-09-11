import { Link } from "react-router-dom"

import journeyImage from "../assets/startjourney.jpg"
function StartJourney() {
  return (
    <section className="journey-cta">
      <div
        className="journey-cta-background"
        style={{
          backgroundImage: `url(${journeyImage})`,
        }}
      />

      <div className="journey-cta-overlay"></div>

      <div className="journey-cta-content">
        {/* TEXT */}
        <div className="journey-cta-text">
          <h2>Start Your Journey</h2>

          <div className="journey-gold-line"></div>

          <p>
            Your next adventure is waiting. Let the experienced professionals at Star.com help you plan your perfect
            trip.
          </p>
        </div>

        {/* BUTTON */}
        <Link to="/contact" style={{ textDecoration: "none" }} className="journey-cta-button">
          <span>CONTACT US TODAY</span>

          <span className="journey-arrow">›</span>
        </Link>
      </div>
    </section>
  )
}

export default StartJourney
