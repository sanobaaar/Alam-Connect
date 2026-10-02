import NavBar from "../components/NavBar"
import Hero from "../components/Hero"
import ServicesHome from "../components/ServicesHome"
import TrustBar from "../components/TrustBar"
import Footer from "../components/Footer"
import AboutHome from "../components/AboutHome"
import ContactHome from "../components/ContactHome"

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <AboutHome />
      <TrustBar />
      <ServicesHome />
      <ContactHome /> <Footer />
    </div>
  )
}

export default Home
