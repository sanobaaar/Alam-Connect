import { useState } from "react"
import { Plane, Mail, Phone } from "lucide-react"
import contactImage from "../assets/holiday.jpg"

const ContactHome = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiryType: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target

    setFormData(previous => ({
      ...previous,
      [name]: value,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    console.log("Homepage enquiry:", formData)

    setSubmitted(true)

    setFormData({
      name: "",
      email: "",
      phone: "",
      enquiryType: "",
      message: "",
    })
  }

  return (
    <section className="home-contact">
      {/* =========================
          BACKGROUND / LEFT SIDE
      ========================= */}

      <div className="home-contact-image">
        <img src={contactImage} alt="Travel destination" />

        <div className="home-contact-overlay"></div>

        <div className="home-contact-content">
          <span className="home-contact-eyebrow">LET'S PLAN YOUR JOURNEY</span>

          <h2>
            Wherever You're Going,
            <br />
            <span>We'll Get You There.</span>
          </h2>

          <div className="home-contact-line"></div>

          <p>
            From business travel and family holidays to customized journeys, our travel experts are here to make every
            trip simple and seamless.
          </p>

          <div className="home-contact-details">
            <div>
              <Phone />
              <span>Speak With Us</span>
            </div>

            <div>
              <Mail />
              <span>Send An Enquiry</span>
            </div>
          </div>
        </div>
      </div>

      {/* =========================
          CONTACT FORM / RIGHT SIDE
      ========================= */}

      <div className="home-contact-form">
        <div className="home-form-heading">
          <div className="home-form-icon">
            <Plane />
          </div>

          <div>
            <span>GET IN TOUCH</span>
            <h3>Tell Us About Your Trip</h3>
          </div>
        </div>

        {submitted && <div className="home-success">Thank you! We'll be in touch shortly.</div>}

        <form onSubmit={handleSubmit}>
          <div className="home-form-row">
            <div className="home-form-group">
              <label htmlFor="home-name">Your Name *</label>

              <input
                id="home-name"
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="home-form-group">
              <label htmlFor="home-email">Email *</label>

              <input
                id="home-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="home-form-row">
            <div className="home-form-group">
              <label htmlFor="home-phone">Phone</label>

              <input
                id="home-phone"
                name="phone"
                type="tel"
                placeholder="+1 000 000 0000"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="home-form-group">
              <label htmlFor="home-enquiryType">I'm Interested In</label>

              <select id="home-enquiryType" name="enquiryType" value={formData.enquiryType} onChange={handleChange}>
                <option value="">Select a service</option>
                <option value="flights">Flights</option>
                <option value="hotels">Hotel Reservations</option>
                <option value="visa">Visa Assistance</option>
                <option value="corporate">Corporate Travel</option>
                <option value="group">Group Travel & MICE</option>
                <option value="pilgrimage">Pilgrimage Travel</option>
                <option value="custom">Tailor-Made Travel</option>
                <option value="transfers">Transfers & Car Rental</option>
              </select>
            </div>
          </div>

          <div className="home-form-group">
            <label htmlFor="home-message">How Can We Help?</label>

            <textarea
              id="home-message"
              name="message"
              rows="4"
              placeholder="Tell us about your destination, dates or travel requirements..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="home-contact-submit">
            <span>SEND ENQUIRY</span>
            <span>→</span>
          </button>

          <p className="home-form-note">Our travel team will get back to you with personalized options.</p>
        </form>
      </div>
    </section>
  )
}

export default ContactHome
