import { Link } from "react-router-dom"
import { Facebook, Instagram, Linkedin, Whatsapp } from "react-bootstrap-icons"

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        {/* BRAND */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            Alam Connect
          </Link>

          <p className="footer-tagline">Your Journey, Our Expertise.</p>

          <p className="footer-description">
            Personalized travel solutions for businesses, families, and individuals worldwide.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h4>Explore</h4>

          <div className="footer-link-list">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h4>Contact</h4>

          <a href="mailto:info@alamconnect.com">info@alamconnect.com</a>

          <a href="tel:+16040000000">+1 604 000 0000</a>

          <span>Vancouver, BC, Canada</span>
        </div>

        {/* SOCIAL */}
        <div className="footer-social">
          <h4>Follow Us</h4>

          <div className="footer-socials">
            <a href="#" aria-label="Facebook">
              <Facebook />
            </a>

            <a href="#" aria-label="Instagram">
              <Instagram />
            </a>

            <a href="#" aria-label="LinkedIn">
              <Linkedin />
            </a>

            <a href="#" aria-label="WhatsApp">
              <Whatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Alam Connect. All rights reserved.</p>

        <div className="footer-legal">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
