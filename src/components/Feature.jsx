import flyPlane from "../assets/flyplane.mp4"
import IATA from "../assets/IATA.png"
const Feature = () => {
  return (
    <div className="feature">
      <div className="feature-container">
        <video src={flyPlane} autoPlay loop muted className="feature-background" />
      </div>

      <div className="featureCopy">
        {/* <h3>Travel with Confidence. Travel with Experience. Travel with Star.com.</h3> */}

        <br />
        <div className="box-shadow">
          <span>
            Star.com, <bold>an IATA accredited travel management company</bold>, born out of passion for exploration,
            brings you a diverse range of travel solutions, from airline tickets to tailor-made itineraries and
            corporate travel services.
          </span>
          <br />
          {/* <span>
            {" "}
            Our experienced travel professionals understand that every traveler is different. Whether you are planning a
            relaxing holiday, an exciting international adventure, a business trip, or a family vacation, we provide
            personalized travel solutions designed around your needs, preferences, and budget.
          </span> */}
        </div>
        <div className="accredit">
          <ul>
            <i className="bi bi-globe" style={{ fontSize: "1rem", color: "black" }}></i>
            <li>30+ Years of Experience</li>
            <i class="bi bi-headset" style={{ fontSize: "1rem", color: "black" }}></i>
            <li>24/7 Support</li>
            <i class="bi bi-emoji-smile" style={{ fontSize: "1rem", color: "black" }}></i>
            <li>99% Customer Satisfaction</li>
          </ul>
        </div>
      </div>
      <img src={IATA} alt="IATA" style={{ width: "200px" }} />
    </div>
  )
}

export default Feature
