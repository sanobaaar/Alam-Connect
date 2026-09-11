import { useState } from "react"
// import { Link } from "react-router-dom"

import Navbar from "./NavBar"

import contactImage from "../assets/holiday.jpg"

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    enquiryType: "",
    destination: "",
    travelDate: "",
    travellers: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  // Handle field changes
  const handleChange = e => {
    const { name, value } = e.target

    setFormData(previous => ({
      ...previous,
      [name]: value,
    }))
  }

  // Handle form submission
  const handleSubmit = e => {
    e.preventDefault()

    console.log("Enquiry submitted:", formData)

    setSubmitted(true)

    // Clear form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      enquiryType: "",
      destination: "",
      travelDate: "",
      travellers: "",
      message: "",
    })
  }

  return (
    <div className="contact-page">
      <Navbar />

      {/* =====================================
          CONTACT HERO
      ===================================== */}

      <section className="contact-hero">
        <div className="contact-hero-image">
          <img src={contactImage} alt="Travel destination" />
        </div>

        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-content">
          <span className="contact-eyebrow">GET IN TOUCH</span>

          <h1>
            Let's Plan Your
            <br />
            <span>Next Journey.</span>
          </h1>

          <div className="contact-gold-line"></div>

          <p>
            Whether you're planning a business trip, family holiday, or your next adventure, our experienced travel
            professionals are here to help.
          </p>

          <p>
            Tell us what you're looking for and we'll get back to you with personalized travel options tailored to your
            needs.
          </p>

          {/* CONTACT DETAILS */}

          <div className="contact-details">
            <div className="contact-detail">
              <div className="contact-detail-icon">☎</div>

              <div>
                <span>Call Us</span>
                <strong>+971 4 123 4567</strong>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon">✉</div>

              <div>
                <span>Email Us</span>
                <strong>info@star.com</strong>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon">⌖</div>

              <div>
                <span>Travel Support</span>
                <strong>Available 24/7</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================
          ENQUIRY SECTION
      ===================================== */}

      <section className="contact-section">
        <div className="contact-intro">
          <span className="section-eyebrow">TRAVEL WITH CONFIDENCE</span>

          <h2>
            Tell Us About Your
            <br />
            Travel Plans
          </h2>

          <div className="contact-gold-line"></div>

          <p>Complete the form and one of our travel experts will contact you to discuss your requirements.</p>

          <p>
            From flights and hotels to complete holiday packages, corporate travel and customized itineraries, we're
            here to make your journey simple.
          </p>

          <div className="contact-note">
            <strong>Why contact Star.com?</strong>

            <ul>
              <li>Personalized travel recommendations</li>
              <li>Experienced travel professionals</li>
              <li>Competitive travel options</li>
              <li>Dedicated customer support</li>
            </ul>
          </div>
        </div>

        {/* =====================================
            FORM
        ===================================== */}

        <div className="enquiry-card">
          <div className="form-heading">
            <h2>Send Us An Enquiry</h2>

            <p>Tell us a little about what you need.</p>
          </div>

          {submitted && (
            <div className="success-message">
              Thank you! Your enquiry has been received. Our travel team will contact you shortly.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* NAME */}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>

                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>

                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* EMAIL / PHONE */}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+971 50 000 0000"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* ENQUIRY TYPE */}

            <div className="form-group">
              <label htmlFor="enquiryType">What can we help you with? *</label>

              <select id="enquiryType" name="enquiryType" value={formData.enquiryType} onChange={handleChange} required>
                <option value="">Select an enquiry type</option>

                <option value="flights">Flights</option>

                <option value="holiday">Holiday Packages</option>

                <option value="hotel">Hotel Reservations</option>

                <option value="corporate">Corporate Travel</option>

                <option value="group">Group & Family Travel</option>

                <option value="custom">Customized Tours</option>

                <option value="visa">Visa Services</option>

                <option value="other">Other</option>
              </select>
            </div>

            {/* DESTINATION / TRAVELLERS */}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="destination">Destination</label>

                <input
                  id="destination"
                  name="destination"
                  type="text"
                  placeholder="Where would you like to go?"
                  value={formData.destination}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="travellers">Number of Travellers</label>

                <select id="travellers" name="travellers" value={formData.travellers} onChange={handleChange}>
                  <option value="">Select</option>

                  <option value="1">1</option>

                  <option value="2">2</option>

                  <option value="3-5">3–5</option>

                  <option value="6-10">6–10</option>

                  <option value="10+">10+</option>
                </select>
              </div>
            </div>

            {/* DATE */}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="travelDate">Preferred Travel Date</label>

                <input
                  id="travelDate"
                  name="travelDate"
                  type="date"
                  value={formData.travelDate}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* MESSAGE */}

            <div className="form-group">
              <label htmlFor="message">Tell Us More *</label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us about your travel plans, preferred dates, destinations or anything else we should know..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {/* SUBMIT */}

            <button type="submit" className="contact-submit">
              <span>SEND ENQUIRY</span>

              <span className="submit-arrow">→</span>
            </button>

            <p className="form-disclaimer">
              By submitting this form, you agree to be contacted by our travel team regarding your enquiry.
            </p>
          </form>
        </div>
      </section>

      {/* =====================================
          BOTTOM CTA
      ===================================== */}

      <section className="contact-bottom">
        <h2>Prefer to speak with us directly?</h2>

        <p>Our travel experts are ready to help.</p>

        <div className="bottom-buttons">
          <a style={{ textDecoration: "none" }} href="tel:+97141234567" className="bottom-button">
            ☎ &nbsp; Call Us
          </a>

          <a style={{ textDecoration: "none" }} href="mailto:info@star.com" className="bottom-button outline">
            ✉ &nbsp; Email Us
          </a>
        </div>
      </section>
    </div>
  )
}

export default Contact
