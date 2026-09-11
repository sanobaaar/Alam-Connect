import "./App.css"
// import Hero from "./components/Hero"
// import Navbar from "./components/NavBar"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
// import Feature from "./components/Feature"
// import TrustBar from "./components/TrustBar"
import Services from "./pages/Services"
// import ServicesHome from "./components/ServicesHome"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Contact from "./pages/Contact"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />;
      <Route path="/about" element={<AboutUs />} />;
      <Route path="/services" element={<Services />} />;
      <Route path="/contact" element={<Contact />} />;
    </Routes>
  )
}

export default App
