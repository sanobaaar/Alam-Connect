const Statement = () => {
  return (
    <div>
      <div className="services-section">
        <header>
          <div className="gold-line"></div>
        </header>
      </div>

      <section className="values-section">
        <ValueCard title="Mission">
          <p>
            At Star.com, our mission is to be the premier travel agency, providing efficient, knowledgeable, and dynamic
            services. We provide real-time support for our valued customers throughout their journey.
          </p>
        </ValueCard>

        <ValueCard title="Vision">
          <p>
            Our vision is to redefine travel by seamlessly blending cutting-edge technology and unparalleled service.
            Connecting people and destinations with confidence and care.
          </p>
        </ValueCard>
      </section>
    </div>
  )
}

export default Statement

function ValueCard({ title, children }) {
  return (
    <div className="value-card">
      <div className="value-overlay">
        {/* <div className="value-icon">{icon}</div> */}

        <div className="value-content">
          <h3>{title}</h3>

          <div className="gold-line"></div>

          {children}
        </div>
      </div>
    </div>
  )
}
