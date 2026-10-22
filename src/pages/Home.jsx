import NavBar from "../components/NavBar"
import Hero from "../components/Hero"
import ServicesHome from "../components/ServicesHome"
import Footer from "../components/Footer"
import AboutHome from "../components/AboutHome"
import ContactHome from "../components/ContactHome"
import WhyUs from "../components/WhyUs"
import Plan from "../components/Plan"

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-wrapper">
        <NavBar />
        <Hero />
      </div>

      <AboutHome />
      <WhyUs />
      <ServicesHome />
      <Plan />
      <ContactHome />
      <Footer />
    </div>
  )
}

export default Home
