import { Link } from "react-router-dom"
import { Facebook, Instagram, Linkedin, Whatsapp, ArrowUpRight } from "react-bootstrap-icons"

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      {/* Top brand statement */}
      
      {/* Main footer columns */}
      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            Alam Connect<span>.</span>
          </Link>

          <p className="footer-tagline">Your Journey, Our Expertise.</p>

          <p className="footer-description">
            Thoughtful travel solutions for businesses, families, and individuals — connecting people to the places that
            matter.
          </p>

          <div className="footer-experience">
            <span className="footer-experience-number">40+</span>
            <span>
              Years of experience
              <br />
              in travel
            </span>
          </div>
        </div>

        <div className="footer-links">
          <h4>EXPLORE</h4>
          <div className="footer-link-list">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Our Services</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div className="footer-contact">
          <h4>GET IN TOUCH</h4>

          <a href="mailto:info@alamconnect.com">
            info@alamconnect.com
            <ArrowUpRight size={14} />
          </a>

          <a href="tel:+16040000000">
            +1 604 000 0000
            <ArrowUpRight size={14} />
          </a>

          <p>Vancouver, British Columbia</p>
          <p>Canada</p>
        </div>

        <div className="footer-social">
          <h4>STAY CONNECTED</h4>

          <p>Wherever you're headed, we'd love to be part of your journey.</p>

          <div className="footer-socials">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook />
            </a>

            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram />
            </a>

            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin />
            </a>

            <a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <Whatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© {year} Alam Connect. All rights reserved.</p>

        <div className="footer-legal">
          <Link to="/privacy">Privacy Policy</Link>
          <span className="footer-legal-dot">·</span>
          <Link to="/terms">Terms & Conditions</Link>
        </div>

        <a href="#top" className="footer-back-top">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}

export default Footer
