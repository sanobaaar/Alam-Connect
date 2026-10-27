import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import logo from "../assets/alamlogogold.png"

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
    setAboutOpen(false)
  }

  const toggleAbout = () => {
    setAboutOpen(open => !open)
  }

  return (
    <header className="header">
      <Link to="/" className="logo-link" onClick={closeMenu}>
        <img src={logo} alt="Alam Connect" className="navbar-logo" />
      </Link>

      {/* Desktop Navigation */}
      <nav className="nav-links" aria-label="Main navigation">
        <NavLink to="/" end className="nav-montserrat" onClick={closeMenu}>
          Home
        </NavLink>

        <div className="nav-dropdown">
          <button
            type="button"
            className="dropdown-toggle nav-montserrat"
            onClick={toggleAbout}
            aria-expanded={aboutOpen}
            aria-haspopup="true"
          >
            About Us
            <span className={`dropdown-arrow ${aboutOpen ? "arrow-open" : ""}`}>▾</span>
          </button>

          {aboutOpen && (
            <div className="dropdown-menu">
              <NavLink to="/about" onClick={closeMenu}>
                Who Are We?
              </NavLink>

              <NavLink to="/message" onClick={closeMenu}>
                Message from the Founder
              </NavLink>
            </div>
          )}
        </div>

        <NavLink to="/services" className="nav-montserrat" onClick={closeMenu}>
          Services
        </NavLink>

        <NavLink to="/contact" className="nav-montserrat" onClick={closeMenu}>
          Contact Us
        </NavLink>
      </nav>

      {/* Mobile Menu Button */}
      <button
        type="button"
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(open => !open)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile Navigation */}
      <nav
        id="mobile-navigation"
        className={`mobile-nav ${menuOpen ? "mobile-nav-open" : ""}`}
        aria-label="Mobile navigation"
      >
        <NavLink to="/" end className="nav-montserrat" onClick={closeMenu}>
          Home
        </NavLink>

        <button
          type="button"
          className="mobile-about-toggle nav-montserrat"
          onClick={toggleAbout}
          aria-expanded={aboutOpen}
        >
          About Us
          <span className={`dropdown-arrow ${aboutOpen ? "arrow-open" : ""}`}>▾</span>
        </button>

        {aboutOpen && (
          <div className="mobile-submenu">
            <NavLink to="/about" onClick={closeMenu}>
              Who Are We?
            </NavLink>

            <NavLink to="/message" onClick={closeMenu}>
              Message from the Founder
            </NavLink>
          </div>
        )}

        <NavLink to="/services" className="nav-lato" onClick={closeMenu}>
          Services
        </NavLink>

        <NavLink to="/contact" className="nav-lato" onClick={closeMenu}>
          Contact Us
        </NavLink>
      </nav>
    </header>
  )
}

export default NavBar
