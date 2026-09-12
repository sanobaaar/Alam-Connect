import videoBg from "../assets/island.mp4";
import iata from "../assets/iataa.png";

import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-container">

      {/* Background Video */}
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        playsInline
        className="video-background"
      />

      {/* Dark / Light overlay */}
      <div className="heroWash"></div>

      {/* Hero Content */}
      <div className="heroCopy">

        <div className="hero-heading">
          <h1>Travel with Confidence.</h1>
          <h1>Travel with Experience.</h1>
          <h1>
            Travel with <span className="star">Star.com.</span>
          </h1>
        </div>

        <div className="box-shadow">
          <h5>
            Star.com, an IATA accredited travel management company, born out
            of passion for exploration, brings you a diverse range of travel
            solutions, from airline tickets to tailor-made itineraries and
            corporate travel services.
          </h5>
        </div>

        {/* Buttons */}
        <div className="heroActions">

          <Link
            to="/corporate"
            className="businessbtn"
          >
            <span>Plan Corporate Travel</span>
            <ArrowRight />
          </Link>

          <Link
            to="/holiday"
            className="holidaybtn"
          >
            <span>Plan My Holiday</span>
            <ArrowRight />
          </Link>

        </div>

        {/* IATA */}
        <img
          className="iata-img"
          src={iata}
          alt="IATA Accredited Agent"
        />

      </div>
    </section>
  );
};

export default Hero;
