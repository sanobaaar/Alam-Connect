import videoBg from "../assets/island.mp4"
import iata from "../assets/iataa.png"
import { ArrowRight } from "react-bootstrap-icons"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <div className="hero-container">
      <video src={videoBg} autoPlay loop muted className="video-background" />
      <div className="heroWash" />

      <div className="heroCopy">
        <h1>Travel with Confidence.</h1>
        <h1> Travel with Experience. </h1>
        <h1>
          Travel with <span className="star">Star.com. </span>
        </h1>
        <br />

        <div className="box-shadow">
          <h5>
            Star.com, an IATA accredited travel management company, born out of passion for exploration, brings you a
            diverse range of travel solutions, from airline tickets to tailor-made itineraries and corporate travel
            services.
          </h5>
          <br />
        </div>
        <div className="heroActions">
          <Link style={{ textDecoration: "none" }} to="/corporate" className="businessbtn">
            Plan Corporate Travel
            <ArrowRight />
          </Link>
          <Link style={{ textDecoration: "none" }} to="/holiday" className="holidaybtn">
            Plan My Holiday
            <ArrowRight />
          </Link>
          {/* <button className="businessbtn">
            Plan Business Travel <ArrowRight />{" "}
          </button>
          <button className="holidaybtn">
            Plan My Holiday <ArrowRight />{" "}
          </button> */}
        </div>
        <img className="iata-img" src={iata} alt="IATA Accredited Agent" />
      </div>
    </div>
  )
}

export default Hero
