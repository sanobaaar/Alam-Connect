import {
  Award,
  People,
  Compass,
  ShieldCheck,
  Clock
} from "react-bootstrap-icons"

const WhyUs = () => {
  return (
    <div>
      <section className="why-section">
        <div className="section-heading">
          <h2>Why Choose Alam Connect?</h2>

          <div className="gold-line center"></div>
        </div>

        <div className="why-grid">
          <WhyCard
            icon={<Award />}
            title="30+ Years of Travel Industry Experience"
            text="Decades of industry experience have given us the knowledge, relationships, and expertise to make your travel planning simple and reliable."
          />

          <WhyCard
            icon={<People />}
            title="Experienced Professionals"
            text="Our highly qualified team is passionate about travel and committed to providing knowledgeable, friendly, and personalized service."
          />

          <WhyCard
            icon={<Compass />}
            title="Personalized Travel Solutions"
            text="From choosing the right destination to arranging flights, hotels, transfers, and activities, we help create travel experiences tailored to you."
          />

          <WhyCard
            icon={<ShieldCheck />}
            title="Reliable Service"
            text="We believe great travel is about more than booking a ticket. We are committed to supporting you throughout your journey and making every step as smooth as possible."
          />

          <WhyCard
            icon={<Clock />}
            title="Travel Made Simple"
            text="Planning a trip can be overwhelming. Our experts take care of the details so you can focus on enjoying the journey."
          />
        </div>
      </section>
    </div>
  )
}

export default WhyUs

function WhyCard({ icon, title, text }) {
  return (
    <div className="why-card">
      <div className="why-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{text}</p>
    </div>
  )
}
