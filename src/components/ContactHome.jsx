import { useState } from "react"
import { ArrowUpRight, Plane } from "lucide-react"

import contactImage from "../assets/wheretravel.jpg"
import secondaryImage from "../assets/family.jpg"

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  enquiryType: "",
  message: "",
}

const ContactHome = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target

    setFormData(previous => ({
      ...previous,
      [name]: value,
    }))

    setSubmitted(false)
  }

  const handleSubmit = e => {
    e.preventDefault()

    // Connect your email service or backend here.
    console.log("Homepage enquiry:", formData)

    setSubmitted(true)
    setFormData({ ...initialFormData })
  }

  return (
    <section className="home-contact" id="contact">
      {/* LEFT: Overlapping editorial image composition */}
      <div className="home-contact-visual">
        <div className="contact-image-main">
          <img src={secondaryImage} alt="Discover your next travel destination" loading="lazy" />
        </div>

        <div className="contact-floating-note">
          <span className="contact-note-mark">“</span>
          <p>
            See more of the world.
            <br />
            Make more of every moment.
          </p>
        </div>

        <div className="contact-image-secondary">
          <img src={contactImage} alt="Memorable travel experiences" loading="lazy" />
        </div>
      </div>

      {/* RIGHT: Contact form */}
      <div className="home-contact-form">
        <div className="home-form-heading">
          <span className="home-form-eyebrow">LET'S CONNECT</span>

          <h2>
            Where will
            <br />
            life <em>take you?</em>
          </h2>

          <p>
            Every great journey starts with a conversation. Tell us what you have in mind, and let’s plan something
            worth looking forward to.
          </p>
        </div>

        {submitted && (
          <div className="home-success" role="status">
            Thank you for your enquiry. We look forward to helping you plan your next journey.
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="home-form-row">
            <div className="home-form-group">
              <label htmlFor="home-name">FULL NAME *</label>
              <input
                id="home-name"
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />
            </div>

            <div className="home-form-group">
              <label htmlFor="home-email">EMAIL ADDRESS *</label>
              <input
                id="home-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div className="home-form-row">
            <div className="home-form-group">
              <label htmlFor="home-phone">PHONE NUMBER</label>
              <input
                id="home-phone"
                name="phone"
                type="tel"
                placeholder="+1 000 000 0000"
                value={formData.phone}
                onChange={handleChange}
                autoComplete="tel"
              />
            </div>

            <div className="home-form-group">
              <label htmlFor="home-enquiryType">SERVICE</label>
              <select id="home-enquiryType" name="enquiryType" value={formData.enquiryType} onChange={handleChange}>
                <option value="">Choose a service</option>
                <option value="flights">Flight bookings</option>
                <option value="hotels">Hotel reservations</option>
                <option value="visa">Visa assistance</option>
                <option value="corporate">Corporate travel</option>
                <option value="group">Group travel & MICE</option>
                <option value="pilgrimage">Pilgrimage travel</option>
                <option value="custom">Tailor-made holidays</option>
                <option value="transfers">Transfers & car rental</option>
              </select>
            </div>
          </div>

          <div className="home-form-group">
            <label htmlFor="home-message">TELL US ABOUT YOUR TRIP</label>
            <textarea
              id="home-message"
              name="message"
              rows={3}
              placeholder="Destinations, dates, or ideas you have in mind..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="home-contact-submit">
            <span>Send an enquiry</span>
            <span className="home-submit-icon">
              <ArrowUpRight size={19} strokeWidth={1.7} />
            </span>
          </button>

          <p className="home-form-note">
            <Plane size={15} strokeWidth={1.5} />
            <span>40+ years of experience. A personal touch at every step.</span>
          </p>
        </form>
      </div>
    </section>
  )
}

export default ContactHome
