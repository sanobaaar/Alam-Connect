import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import Statement from "../components/Statement"

function AboutUs() {
  return (
    <div className="about-page">
      <NavBar />

      {/* =========================
          HERO SECTION
      ========================= */}

      {/* <section className="about-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <span className="eyebrow">ABOUT STAR.COM</span>

            <h1>
              Your Journey.
              <br />
              <span>Our Expertise.</span>
            </h1>

            <p>
              For over 30 years, we have been creating seamless travel experiences for businesses, families and
              individuals around the world.
            </p>
          </div>
        </div>
      </section> */}

      {/* =========================
          WELCOME SECTION
      ========================= */}

      <section className="welcome-section">
        <div className="welcome-text">
          <span className="section-label">ABOUT US</span>

          <h2>Welcome to Alam Connect</h2>

          <div className="gold-line"></div>

          <p>
            ALAM CONNECT is a new-generation travel company built on more than three decades of experience in the travel
            industry. Founded with a passion for exploration and a vision to connect people with the world, we combine
            fresh ideas, modern travel solutions, and deep industry expertise to deliver seamless and personalized
            journeys.
          </p>

          <p>
            Our corporate travel expertise enables us to understand the unique demands of modern business travel—where
            efficiency, flexibility, cost control, timely support, and attention to detail matter. From executive travel
            and business trips to group movements, meetings, incentives, conferences, and corporate events, our team
            provides end-to-end travel management designed around the needs of each client.
          </p>

          <Link style={{ textDecoration: "none" }} className="journey-cta-button" to="/about">
            About Us
          </Link>
        </div>

        {/* STATS */}

        <div className="stats-card">
          <div className="stat">
            <div className="stat-icon">◎</div>

            <strong>30+</strong>

            <span>Years of Experience</span>
          </div>

          <div className="stat">
            <div className="stat-icon">✈</div>

            <strong>IATA</strong>

            <span>Accredited</span>
          </div>

          <div className="stat">
            <div className="stat-icon">♧</div>

            <strong>Real-Time</strong>

            <span>Support</span>
          </div>

          <div className="stat">
            <div className="stat-icon">♡</div>

            <strong>Personalized</strong>

            <span>Travel Solutions</span>
          </div>
        </div>
      </section>

      <Statement />

      {/* =========================
          WHY CHOOSE US
      ========================= */}

      <section className="why-section">
        <div className="section-heading">
          <h2>Why Choose Star.com?</h2>

          <div className="gold-line center"></div>
        </div>

        <div className="why-grid">
          <WhyCard
            icon="♧"
            title="30+ Years of Travel Industry Experience"
            text="Decades of industry experience have given us the knowledge, relationships, and expertise to make your travel planning simple and reliable."
          />

          <WhyCard
            icon="♙"
            title="Experienced Professionals"
            text="Our highly qualified team is passionate about travel and committed to providing knowledgeable, friendly, and personalized service."
          />

          <WhyCard
            icon="▣"
            title="Personalized Travel Solutions"
            text="From choosing the right destination to arranging flights, hotels, transfers, and activities, we help create travel experiences tailored to you."
          />

          <WhyCard
            icon="♢"
            title="Reliable Service"
            text="We believe great travel is about more than booking a ticket. We are committed to supporting you throughout your journey and making every step as smooth as possible."
          />

          <WhyCard
            icon="◷"
            title="Travel Made Simple"
            text="Planning a trip can be overwhelming. Our experts take care of the details so you can focus on enjoying the journey."
          />
        </div>
      </section>
      <Footer />
    </div>
  )
}

/* =========================
   WHY CARD COMPONENT
========================= */

function WhyCard({ icon, title, text }) {
  return (
    <div className="why-card">
      <div className="why-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{text}</p>
    </div>
  )
}

export default AboutUs
