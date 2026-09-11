import NavBar from "../components/NavBar"
import Hero from "../components/Hero"
import ServicesHome from "../components/ServicesHome"
import StartJourney from "../components/StartJourney"
import TrustBar from "../components/TrustBar"
import Statement from "../components/Statement"

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <TrustBar />
      <ServicesHome />
      <Statement />
      <StartJourney />
    </div>
  )
}

export default Home
