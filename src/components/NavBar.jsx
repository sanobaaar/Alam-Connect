import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="header">
      {/* Logo */}
      <Link to="/" className="logo-link" onClick={closeMenu}>
        <div className="logo">
          <h1>Alam Connect</h1>
          <p>Your Journey, Our Expertise</p>
        </div>
      </Link>

      {/* Desktop / Tablet Navigation */}
      <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/about" onClick={closeMenu}>
          About Us
        </NavLink>

        <NavLink to="/services" onClick={closeMenu}>
          Services
        </NavLink>

        <NavLink to="/contact" onClick={closeMenu}>
          Contact Us
        </NavLink>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  )
}

export default NavBar
