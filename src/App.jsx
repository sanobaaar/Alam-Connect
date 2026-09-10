import { Routes, Route } from "react-router-dom"
import "./App.css"
import Hero from "./components/Hero"
import Navbar from "./components/NavBar"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import TrustBar from "./components/TrustBar"
import Services from "./components/Services"
import ServiceEnquiry from "./pages/ServiceEnquiry"

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Navbar />
          <Hero />
          <TrustBar />
          <Services />
        </>
      } />
      <Route path="/enquiry/:id" element={
        <>
          <Navbar />
          <ServiceEnquiry />
        </>
      } />
    </Routes>
  )
}

export default App
