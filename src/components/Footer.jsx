import { Link } from "react-router-dom"
import { Facebook, Instagram, Linkedin, Whatsapp, ArrowRight } from "react-bootstrap-icons"

const Footer = () => {
  return (
    <footer className="site-footer">
      {/* =========================
          CTA SECTION
      ========================= */}

      {/* =========================
          MAIN FOOTER
      ========================= */}

      <div className="footer-main">
        {/* BRAND */}

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            STAR.COM
          </Link>

          <p className="footer-tagline">Your Journey, Our Expertise.</p>

          <p className="footer-description">
            Star.com is an IATA accredited travel management company providing personalized travel solutions for
            businesses, families and individuals around the world.
          </p>

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

        {/* QUICK LINKS */}

        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/corporate">Corporate Travel</Link>
          <Link to="/holiday">Holidays</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* SERVICES */}

        <div className="footer-column">
          <h3>Our Services</h3>

          <Link to="/services#flight-service">Flights</Link>
          <Link to="/services#hotel-service">Hotels</Link>
          <Link to="/services#visa-service">Visa Services</Link>
          <Link to="/services#corporate-service">Corporate Travel</Link>
          <Link to="/services#group-service">Family & Group Travel</Link>
          <Link to="/services#custom-service">Customized Tours</Link>
        </div>

        {/* CONTACT */}

        <div className="footer-column footer-contact">
          <h3>Get In Touch</h3>

          <div className="contact-item">
            <span>📍</span>
            <p>
              Lucknow, Uttar Pradesh <br />
              India
            </p>
          </div>

          <div className="contact-item">
            <span>✉</span>
            <a href="mailto:info@star.com">info@star.com</a>
          </div>

          <div className="contact-item">
            <span>☎</span>
            <a href="tel:+16040000000">+1 (604) 000-0000</a>
          </div>

          <Link to="/contact" className="footer-enquiry">
            Send an Enquiry
            <ArrowRight />
          </Link>
        </div>
      </div>

      {/* =========================
          BOTTOM BAR
      ========================= */}

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Star.com. All rights reserved.</p>

        <div className="footer-legal">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
