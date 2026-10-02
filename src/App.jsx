import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"

import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Corporate from "./pages/Corporate"
import Holidays from "./pages/Holidays"
import Services from "./pages/Services"
import Contact from "./pages/Contact"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/corporate" element={<Corporate />} />
      <Route path="/holiday" element={<Holidays />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
