import NavBar from "../components/NavBar"
import Hero from "../components/Hero"
import ServicesHome from "../components/ServicesHome"
import Footer from "../components/Footer"
import AboutHome from "../components/AboutHome"
import ContactHome from "../components/ContactHome"
import WhyUs from "../components/WhyUs"

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <AboutHome />
      <WhyUs />
      {/* <TrustBar /> */}
      <ServicesHome />
      <ContactHome /> <Footer />
    </div>
  )
}

export default Home
