import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="header">
      <Link to="/">
        {" "}
        <div className="logo">
          <h1>STAR.COM</h1>
          <p>Your Journey, Our Expertise</p>
        </div>
      </Link>
      <div className="nav-links">
        <NavLink to="/corporate">Corporate Travel</NavLink>
        <NavLink to="/holidays">Holidays</NavLink>
        <NavLink to="/destinations"> Destinations</NavLink>
        <NavLink to="/services"> Services</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div></div>
    </div>
  )
}

export default NavBar
