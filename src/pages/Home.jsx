import NavBar from "../components/NavBar"
import Hero from "../components/Hero"
import ServicesHome from "../components/ServicesHome"
import StartJourney from "../components/StartJourney"
import TrustBar from "../components/TrustBar"

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <TrustBar/>
      <ServicesHome />
      <StartJourney />
    </div>
  )
}

export default Home
