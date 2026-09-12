import missionImg from "../assets/mission.jpg"
import visionImg from "../assets/vision.jpg"

const Statement = () => {
  return (
    <section className="statement-section">
      <div className="values-section">
        <ValueCard image={missionImg} title="Our Mission">
          <p>
            At Star.com, our mission is to be the premier travel agency, providing efficient, knowledgeable, and dynamic
            services. We provide real-time support for our valued customers throughout their journey.
          </p>
        </ValueCard>

        <ValueCard image={visionImg} title="Our Vision">
          <p>
            Our vision is to redefine travel by seamlessly blending cutting-edge technology and unparalleled service.
            Connecting people and destinations with confidence and care.
          </p>
        </ValueCard>
      </div>
    </section>
  )
}

function ValueCard({ image, title, children }) {
  return (
    <article className="value-card">
      <div className="value-image" style={{ backgroundImage: `url(${image})` }} />

      <div className="value-content">
        <h3>{title}</h3>

        <div className="gold-line"></div>

        <div className="value-text">{children}</div>
      </div>
    </article>
  )
}

export default Statement
