import "./App.css"
import Hero from "./components/Hero"
import Navbar from "./components/NavBar"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
// import Feature from "./components/Feature"
import TrustBar from "./components/TrustBar"
import Services from "./components/Services"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Feature /> */}
      <TrustBar />  
      <Services /> 
    </>
  )
}

export default App
