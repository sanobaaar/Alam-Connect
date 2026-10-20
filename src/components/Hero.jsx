import videoBg from "../assets/island.mp4"

const Hero = () => {
  return (
    <section className="hero-container">
      {/* Background Video */}
      <video src={videoBg} autoPlay loop muted playsInline className="video-background" aria-hidden="true" />

      {/* Soft white overlay */}
      <div className="heroWash" aria-hidden="true" />

      {/* Hero Content */}
      <div className="heroCopy">
        <div className="hero-heading">
          <h1>Connecting You to the World</h1>

        </div>

        <div className="box-shadow">
          <p className="hero-tagline">Where travel meets sustainability.</p>

          <p className="hero-description">
            A new generation of travel,
            backed by 40+ years of experience.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
