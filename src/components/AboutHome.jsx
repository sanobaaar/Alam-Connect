import videoAbout from "../assets/abouthome.mp4"

const AboutHome = () => {
  return (
    <section className="abouthome-section">
      {/* CENTERED SECTION HEADING */}

      {/* MAIN ABOUT CARD */}
      <div className="abouthome-card">
        {/* VIDEO — LEFT */}
        <div className="about-video">
          <video autoPlay loop muted playsInline src={videoAbout}></video>

          {/* <div className="about-video-label">
            <span>OUR STORY</span>
          </div> */}
        </div>

        {/* CONTENT — RIGHT */}
        <div className="about-text">
          <h5>About Us</h5>
          <h3>
            Travel with experience.
            <br />
            <span>Travel with confidence.</span>
          </h3>

          <div className="about-accent-line"></div>

          <p>
            ALAM CONNECT is a new-generation travel company built on more than three decades of experience in the travel
            industry. Founded with a passion for exploration and a vision to connect people with the world, we combine
            fresh ideas, modern travel solutions, and deep industry expertise to deliver seamless and personalized
            journeys.
          </p>

          <p>
            Our corporate travel expertise enables us to understand the unique demands of modern business travel—where
            efficiency, flexibility, cost control, timely support, and attention to detail matter.
          </p>

          <p>
            From executive travel and business trips to group movements, meetings, incentives, conferences, and
            corporate events, our team provides end-to-end travel management designed around the needs of each client.
          </p>

          {/* <div className="about-bottom">
            <div className="about-experience">
              <strong>30+</strong>
              <span>
                Years of
                <br />
                Experience
              </span>
            </div>

            <div className="about-divider"></div>

            <div className="about-experience">
              <strong>360°</strong>
              <span>
                Travel
                <br />
                Solutions
              </span>
            </div>

            <div className="about-divider"></div>

            <div className="about-experience">
              <strong>IATA</strong>
              <span>
                Accredited
                <br />
                Agency
              </span>
            </div>
          </div>*/}
        </div>
      </div>
    </section>
  )
}

export default AboutHome
