import { useState } from "react"
import contactImage from "../assets/holiday.jpg"
import NavBar from "./NavBar"

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
  const [error, setError] = useState("")

  const handleChange = e => {
    const { name, value } = e.target

    setFormData(previous => ({
      ...previous,
      [name]: value,
    }))

    setSubmitted(false)
    setError("")
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setError("")

    // Connect your form to a form service or backend
    // before publishing. This local handler does not
    // send an email by itself.
    console.log("Alam Connect enquiry:", formData)

    setSubmitted(true)
  }

  return (
    <>
      <div className="hero-wrapper">
        <NavBar />
      </div>
      <div className="contact-page">
        {/* HERO */}
        <section className="contact-hero">
          <div className="contact-hero-image">
            <img src={contactImage} alt="Beautiful travel destination" />
          </div>

          <div className="contact-hero-overlay" />

          <div className="contact-hero-content">
            <h1>
              Your Next Journey,
              <br />
              <span>Starts Here.</span>
            </h1>

            <div className="contact-accent-line" />

            <a href="#enquiry-form" className="contact-hero-button">
              PLAN YOUR JOURNEY <span>↗</span>
            </a>
          </div>

          <div className="contact-hero-label">
            <span>01</span> PERSONALIZED TRAVEL SOLUTIONS
          </div>
        </section>

        {/* SERVICES
        <section className="contact-services">
          <div className="contact-services-heading">
            <span className="contact-section-label">HOW CAN WE HELP?</span>

            <h2>One team. Every journey.</h2>

            <p>Tell us what you need and let our travel professionals help you plan your next move.</p>
          </div>

          <div className="contact-services-grid">
            <article className="contact-service-card">
              <span className="service-number">01</span>
              <div className="service-icon">✈</div>
              <h3>Flights &amp; Ticketing</h3>
              <p>Flight reservations, fare options and travel arrangements tailored to your itinerary.</p>
            </article>

            <article className="contact-service-card">
              <span className="service-number">02</span>
              <div className="service-icon">◎</div>
              <h3>Holiday Packages</h3>
              <p>Personalized holidays, family getaways and customized itineraries for your next adventure.</p>
            </article>

            <article className="contact-service-card">
              <span className="service-number">03</span>
              <div className="service-icon">▤</div>
              <h3>Corporate Travel</h3>
              <p>Professional travel coordination for business trips, teams and corporate requirements.</p>
            </article>

            <article className="contact-service-card">
              <span className="service-number">04</span>
              <div className="service-icon">⌖</div>
              <h3>Hotels &amp; Travel Services</h3>
              <p>Hotel reservations, visa assistance and other travel services to help organize your journey.</p>
            </article>
          </div>
        </section> */}

        {/* ENQUIRY SECTION */}
        <section className="contact-enquiry-section" id="enquiry-form">
          <div className="contact-enquiry-info">
            <span className="contact-section-label">GET IN TOUCH</span>

            <h2>
              Let's talk about
              <br />
              <span>your travel plans.</span>
            </h2>

            <div className="contact-accent-line" />

            <p>
              Have a question or need help organizing your next trip? Complete the enquiry form and tell us a little
              about what you're looking for.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-info-icon">✉</div>
                <div>
                  <span>Email</span>
                  <a href="mailto:info@alamconnect.com">info@alamconnect.com</a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">☎</div>
                <div>
                  <span>Phone</span>
                  <p>Contact our travel team</p>
                </div>
              </div>
            </div>

            <div className="contact-info-note">
              <span>✦</span>
              Your journey matters to us. Let's plan it together.
            </div>
          </div>

          {/* FORM */}
          <div className="contact-form-card">
            <div className="contact-form-heading">
              <span>YOUR ENQUIRY</span>
              <h2>How can we help?</h2>
              <p>Fields marked * are required.</p>
            </div>

            {submitted && (
              <div className="contact-success" role="status">
                <strong>Thank you for reaching out!</strong>
                <p>
                  Your form has been validated in this demo. To deliver your enquiry to Alam Connect, connect this form
                  to an email service or backend.
                </p>
              </div>
            )}

            {error && (
              <div className="contact-error" role="alert">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Your first name"
                    autoComplete="given-name"
                    required
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Your last name"
                    autoComplete="family-name"
                    required
                  />
                </div>
              </div>

              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your contact number"
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div className="contact-form-group">
                <label htmlFor="enquiryType">What can we help you with? *</label>

                <select
                  id="enquiryType"
                  name="enquiryType"
                  value={formData.enquiryType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose a service</option>
                  <option value="flights">Flights &amp; Ticketing</option>
                  <option value="holidays">Holiday Packages</option>
                  <option value="hotels">Hotel Reservations</option>
                  <option value="corporate">Corporate Travel</option>
                  <option value="visa">Visa Assistance</option>
                  <option value="group">Group &amp; Family Travel</option>
                  <option value="custom">Customized Itineraries</option>
                  <option value="other">Other Enquiry</option>
                </select>
              </div>

              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="destination">Destination / Route</label>
                  <input
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="e.g. Dubai to London"
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="travellers">Travellers</label>
                  <select id="travellers" name="travellers" value={formData.travellers} onChange={handleChange}>
                    <option value="">Select number</option>
                    <option value="1">1 traveller</option>
                    <option value="2">2 travellers</option>
                    <option value="3-5">3–5 travellers</option>
                    <option value="6-10">6–10 travellers</option>
                    <option value="10+">More than 10</option>
                  </select>
                </div>
              </div>

              <div className="contact-form-group">
                <label htmlFor="travelDate">Preferred Travel Date</label>
                <input
                  id="travelDate"
                  name="travelDate"
                  type="date"
                  value={formData.travelDate}
                  onChange={handleChange}
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="message">Tell Us More *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share your requirements, dates, questions or any other details..."
                  required
                />
              </div>

              <button type="submit" className="contact-submit">
                <span>SEND YOUR ENQUIRY</span>
                <span className="contact-submit-arrow">↗</span>
              </button>

              <p className="contact-form-disclaimer">
                Your information should be used only to respond to your enquiry and handled in accordance with the
                company's privacy practices.
              </p>
            </form>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="contact-intro-section">
          <div className="contact-intro-heading">
            <span className="contact-section-label">WE'RE HERE FOR YOU</span>

            <h2>
              Travel expertise.
              <br />
              <span>Personal attention.</span>
            </h2>
          </div>

          <div className="contact-intro-copy">
            <p>
              At Alam Connect, we combine decades of travel industry experience with a modern, personalized approach to
              travel planning.
            </p>

            <p>
              Tell us what you have in mind. From a simple flight booking to a complete travel itinerary, we'll help you
              explore the options that suit your needs.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}

export default Contact
