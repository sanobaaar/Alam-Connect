import NavBar from "../components/NavBar"
import missionImg from "../assets/mission.jpg"
import visionImg from "../assets/vision.jpg"
import promiseImg from "../assets/promise.jpg"

function AboutUs() {
  return (
    <div className="about-page">
      <NavBar />

      {/* =========================
          HERO SECTION
      ========================= */}

      <section className="about-hero">
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
      </section>

      {/* =========================
          WELCOME SECTION
      ========================= */}

      <section className="welcome-section">
        <div className="welcome-text">
          <span className="section-label">ABOUT US</span>

          <h2>Welcome to Star.com</h2>

          <div className="gold-line"></div>

          <p>
            Star.com, an IATA accredited travel management company, born out of passion for exploration, brings you a
            diverse range of travel solutions, from airline tickets to tailor-made itineraries and corporate travel
            services.
          </p>

          <p>
            Our experienced travel professionals understand that every traveler is different. Whether you are planning a
            relaxing holiday, an exciting international adventure, a business trip, or a family vacation, we provide
            personalized travel solutions designed around your needs, preferences, and budget.
          </p>
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

      {/* =========================
          MISSION / VISION / PROMISE
      ========================= */}

      <section className="values-section">
        <ValueCard image={missionImg} icon="⚑" title="Our Mission">
          <p>
            At Star.com, our mission is to be the premier travel agency, providing efficient, knowledgeable, and dynamic
            services. We provide real-time support for our valued customers throughout their journey.
          </p>
        </ValueCard>

        <ValueCard image={visionImg} icon="⌁" title="Our Vision">
          <p>
            Our vision is to redefine travel by seamlessly blending cutting-edge technology and unparalleled service.
            Connecting people and destinations with confidence and care.
          </p>
        </ValueCard>

        <ValueCard image={promiseImg} icon="♢" title="Our Promise">
          <p>
            At Star.com, we combine experience, expertise, and personal service to deliver travel solutions you can
            trust.
          </p>

          <p>We don't simply arrange trips—we help create experiences, memories, and journeys that last a lifetime.</p>
        </ValueCard>
      </section>
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

/* =========================
   VALUE CARD COMPONENT
========================= */

function ValueCard({ image, icon, title, children }) {
  return (
    <div
      className="value-card"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="value-overlay">
        <div className="value-icon">{icon}</div>

        <div className="value-content">
          <h3>{title}</h3>

          <div className="gold-line"></div>

          {children}
        </div>
      </div>
    </div>
  )
}

export default AboutUs
