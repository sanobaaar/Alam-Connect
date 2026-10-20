import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import logo from "../assets/alam-logo.svg"

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
    setAboutOpen(false)
  }

  return (
    <header className="header">
      {/* LEFT NAVIGATION */}
      <nav className="nav-side nav-left" aria-label="Primary navigation">
        <NavLink to="/" end onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/services" onClick={closeMenu}>
          Services
        </NavLink>
      </nav>

      {/* CENTER LOGO */}
      <Link to="/" className="logo-link" onClick={closeMenu} aria-label="Alam Connect home">
        <img src={logo} alt="Alam Connect — Your Journey, Our Expertise" className="navbar-logo" />
      </Link>

      {/* RIGHT NAVIGATION */}
      <nav className="nav-side nav-right" aria-label="Secondary navigation">
        {/* ABOUT US DROPDOWN */}
        <div
          className={`nav-dropdown ${aboutOpen ? "dropdown-open" : ""}`}
          onMouseEnter={() => setAboutOpen(true)}
          onMouseLeave={() => setAboutOpen(false)}
        >
          <button
            type="button"
            className="dropdown-toggle"
            onClick={() => setAboutOpen(open => !open)}
            aria-expanded={aboutOpen}
          >
            About Us
            <span className="dropdown-arrow" aria-hidden="true">
              ▾
            </span>
          </button>

          <div className="dropdown-menu">
            <NavLink to="/about" onClick={closeMenu}>
              Who Are We?
            </NavLink>

            <NavLink to="/message" onClick={closeMenu}>
              Message from the Founder
            </NavLink>
          </div>
        </div>

        <NavLink to="/contact" onClick={closeMenu}>
          Contact Us
        </NavLink>
      </nav>

      {/* MOBILE MENU BUTTON */}
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

      {/* MOBILE NAVIGATION */}
      <nav
        id="mobile-navigation"
        className={`mobile-nav ${menuOpen ? "mobile-nav-open" : ""}`}
        aria-label="Mobile navigation"
      >
        <NavLink to="/" end onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/services" onClick={closeMenu}>
          Services
        </NavLink>

        <button
          type="button"
          className="mobile-about-toggle"
          onClick={() => setAboutOpen(open => !open)}
          aria-expanded={aboutOpen}
        >
          About Us
          <span className="dropdown-arrow" aria-hidden="true">
            ▾
          </span>
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

        <NavLink to="/contact" onClick={closeMenu}>
          Contact Us
        </NavLink>
      </nav>
    </header>
  )
}

export default NavBar
