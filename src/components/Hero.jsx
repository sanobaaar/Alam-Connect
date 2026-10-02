import videoBg from "../assets/sunset-island.mp4"

const Hero = () => {
  return (
    <section className="hero-container">
      {/* Background Video */}
      <video src={videoBg} autoPlay loop muted playsInline className="video-background" />

      {/* Dark / Light overlay */}
      <div className="heroWash"></div>

      {/* Hero Content */}
      <div className="heroCopy">
        <div className="hero-heading">
          <h1>Connecting you to the World</h1>
        </div>

        <div className="box-shadow">
          <h3>Where travel meets sustainability. </h3>
          <h3>A new generation of travel, built on 30+ years of experience.</h3>
        </div>
      </div>
    </section>
  )
}

export default Hero
