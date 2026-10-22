import videoBg from "../assets/island.mp4"
import NavBar from "./NavBar"

const Hero = () => {
  return (
    <section className="hero-container">
      {/* Background Video */}
      <div className="hero-video-wrapper" aria-hidden="true">
        <video src={videoBg} autoPlay loop muted playsInline className="video-background" />
      </div>

      {/* Soft White Overlay */}
      <div className="heroWash" aria-hidden="true" />

      {/* Navigation Bar */}
      <NavBar />

      {/* Hero Content */}
      <div className="heroCopy">
        <div className="hero-heading">
          <h1>Connecting You to the World</h1>
        </div>

        <div className="box-shadow">
          <p className="hero-tagline">Where travel meets sustainability.</p>

          <p className="hero-description">A new generation of travel, backed by 40+ years of experience.</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
