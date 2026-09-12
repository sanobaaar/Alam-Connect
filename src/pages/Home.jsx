import NavBar from "../components/NavBar"
import Hero from "../components/Hero"
import ServicesHome from "../components/ServicesHome"
import StartJourney from "../components/StartJourney"
import TrustBar from "../components/TrustBar"
import Statement from "../components/Statement"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <TrustBar />
      <ServicesHome />
      <Statement />
      <StartJourney />
      <Footer/>
    </div>
  )
}

export default Home
