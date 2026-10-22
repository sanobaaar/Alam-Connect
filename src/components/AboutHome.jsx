import { Link } from "react-router-dom"

import mainTravelImage from "../assets/holiday.jpg"
import secondaryTravelImage from "../assets/startjourney.jpg"

const AboutHome = () => {
  return (
    <section className="abouthome-section">
      <div className="abouthome-container">
        {/* LEFT: TEXT CONTENT */}
        <div className="abouthome-content">
          <span className="abouthome-eyebrow">ABOUT US</span>

          <h2 className="abouthome-heading">
            Travel <span> done well</span>
          </h2>

          <div className="abouthome-description">
            <p>
              ALAM CONNECT is a new-generation travel company built on more than four decades of experience in the
              travel industry. We combine fresh ideas, modern travel solutions, and deep industry expertise to create
              seamless journeys.
            </p>

            <p>
              From executive travel and business trips to family holidays and unforgettable escapes, we tailor every
              journey to your needs, with personal attention and support at every step.
            </p>
          </div>

          <Link to="/about" className="abouthome-button">
            <span>LEARN MORE</span>
            <span className="abouthome-button-arrow">↗</span>
          </Link>
        </div>

        {/* RIGHT: OVERLAPPING TRAVEL IMAGES */}
        <div className="abouthome-visual">
          <div className="abouthome-image-main">
            <img src={mainTravelImage} alt="A beautiful destination for a memorable journey" />
          </div>

          <div className="abouthome-image-secondary">
            <img src={secondaryTravelImage} alt="Scenic architecture and travel inspiration" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHome
