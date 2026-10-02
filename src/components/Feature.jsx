import { Link } from "react-router-dom"

import { Plane, Palmtree, Hotel, BriefcaseBusiness, Users, Map, FileCheck } from "lucide-react"
import flightsImage from "../assets/flight.jpg"
import holidaysImage from "../assets/holiday.jpg"
import hotelsImage from "../assets/hotel.jpg"
import corporateImage from "../assets/corporate.jpg"
import groupTravelImage from "../assets/family.jpg"
import customizedToursImage from "../assets/customize.jpg"
import visaServicesImage from "../assets/visa.jpg"

// ============================================
// SERVICES DATA
// ============================================

const services = [
  {
    number: "01",
    id: "flights",
    icon: Plane,
    title: "International & Domestic Flights",
    shortTitle: "Flights",
    description:
      "Whether you're travelling for business, leisure or visiting family, we help you find convenient flight options that suit your schedule, destination and budget.",
    details:
      "From simple one-way journeys to complex multi-city itineraries, our travel professionals can assist with route planning, airline options, fare selection and travel arrangements.",
    image: flightsImage,
    points: [
      "International & domestic flights",
      "One-way, return & multi-city itineraries",
      "Business & economy class options",
      "Group flight bookings",
      "Flexible travel arrangements",
    ],
  },
  {
    number: "02",
    id: "hotels",
    icon: Hotel,
    title: "Hotel Reservations",
    shortTitle: "Hotels",
    description:
      "Find comfortable stays that fit your destination, travel style and budget. We help you select accommodation with convenience and value in mind.",
    details:
      "Whether you need a business hotel in the city centre, a family-friendly resort or a luxury stay for a special occasion, our team can help you compare suitable options.",
    image: hotelsImage,
    points: [
      "Hotels worldwide",
      "Business & leisure accommodation",
      "Family-friendly stays",
      "Luxury & resort properties",
      "Accommodation tailored to your trip",
    ],
  },

  {
    number: "03",
    id: "visa",
    icon: FileCheck,
    title: "Visa Services",
    shortTitle: "Visa Services",
    description:
      "Navigating visa requirements can be complicated. Our visa assistance service helps you understand the process and prepare your application requirements.",
    details:
      "Our team can provide guidance on documentation, application requirements and travel-related visa processes based on your intended destination.",
    image: visaServicesImage,
    points: [
      "Visa requirement guidance",
      "Document checklist assistance",
      "Application preparation support",
      "Tourist & business visa assistance",
      "Travel documentation guidance",
    ],
  },
  {
    number: "04",
    id: "special",

    icon: Palmtree,
    title: "Honeymoon & Special Holidays",
    shortTitle: "Special Packages",
    description: "Create unforgettable experiences for life's most special occasions.",
    details:
      "From relaxing beach escapes and city breaks and memorable international adventures, we can help arrange the essential elements of your trip in one place.",
    image: holidaysImage,
    points: [
      "International holiday packages",
      "Suited for your needs",
      "Beach & luxury escapes",
      "Sightseeing & activities",
      "Tailored packages for every budget",
    ],
  },
  {
    number: "05",
    id: "corporate",

    icon: BriefcaseBusiness,
    title: "Corporate Travel",
    shortTitle: "Corporate Travel",
    description:
      "Keep your business travel organized, efficient and stress-free with professional travel solutions built around your company's requirements.",
    details:
      "From executive travel and business flights to accommodation and multi-destination itineraries, we provide coordinated travel support so your team can focus on business.",
    image: corporateImage,
    points: [
      "Business flights & accommodation",
      "Executive travel arrangements",
      "Multi-destination itineraries",
      "Corporate travel coordination",
      "Dedicated travel support",
    ],
  },

  {
    number: "06",
    id: "group",

    icon: Users,
    title: "Group & Family Travel",
    shortTitle: "Group & Family",
    description:
      "Travelling with family, friends or a larger group? We coordinate the details so everyone can enjoy a smoother and more comfortable travel experience.",
    details:
      "We can assist with group flights, accommodation, transportation and customized itineraries while taking different ages, preferences and requirements into consideration.",
    image: groupTravelImage,
    points: [
      "Family holidays",
      "Large group bookings",
      "Group flights & accommodation",
      "Custom group itineraries",
      "Coordinated travel arrangements",
    ],
  },
  {
    number: "07",
    id: "custom",

    icon: Map,
    title: "Customized Tours",
    shortTitle: "Customized Tours",
    description:
      "Your journey doesn't have to follow a standard package. Tell us what you want to experience and we'll help create an itinerary around you.",
    details:
      "From destination discovery and sightseeing to transportation, accommodation and activities, our customized travel service gives you the flexibility to create a journey that feels personal.",
    image: customizedToursImage,
    points: [
      "Tailor-made itineraries",
      "Private & personalized tours",
      "Multi-city travel",
      "Sightseeing & experiences",
      "Flexible travel planning",
    ],
  },

  {
    number: "08",
    id: "holidays",

    icon: Palmtree,
    title: "Holiday Packages",
    shortTitle: "Holidays",
    description:
      "Take the stress out of planning your next holiday with carefully arranged travel packages designed around your destination, preferences and budget.",
    details:
      "From relaxing beach escapes and city breaks to family holidays and memorable international adventures, we can help arrange the essential elements of your trip in one place.",
    image: holidaysImage,
    points: [
      "International holiday packages",
      "Family & couple holidays",
      "Beach & luxury escapes",
      "Sightseeing & activities",
      "Tailored packages for every budget",
    ],
  },
]

// ============================================
// SERVICES PAGE
// ============================================

function Services() {
  return (
    <div className="services-page">
      {/* ======================================
          HERO
      ====================================== */}

      <section className="services-hero">
        <div className="services-hero-content">
          <span className="services-eyebrow">OUR SERVICES</span>

          <h1>
            Travel Solutions.
            <br />
            <span>Made Simple.</span>
          </h1>

          <div className="services-gold-line"></div>

          <p>
            From flights and hotels to complete holidays, corporate travel and personalized journeys, Star.com brings
            your travel needs together in one place.
          </p>

          <Link style={{ textDecoration: "none" }} to="/contact" className="services-hero-button">
            PLAN YOUR JOURNEY
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* ======================================
          INTRO
      ====================================== */}

      <section className="services-intro">
        <span className="section-eyebrow">HOW WE CAN HELP</span>

        <h2>
          Complete Solutions for
          <br />
          Every Journey
        </h2>

        <div className="services-gold-line"></div>

        <p>
          Every journey is different. That's why we offer a complete range of travel services designed for individuals,
          families, groups and businesses.
        </p>
      </section>

      {/* ======================================
          SERVICE SECTIONS
      ====================================== */}

      <main className="services-list">
        {services.map((service, index) => {
          const Icon = service.icon

          const reverse = index % 2 !== 0

          return (
            <section className={`service-section ${reverse ? "service-reverse" : ""}`} key={service.id} id={service.id}>
              {/* IMAGE */}

              <div className="service-image">
                <img src={service.image} alt={service.title} />

                <div className="service-number">{service.number}</div>
              </div>

              {/* CONTENT */}

              <div className="service-content">
                <div className="service-icon">
                  <Icon size={30} strokeWidth={1.6} />
                </div>

                <span className="service-label">{service.shortTitle}</span>

                <h2>{service.title}</h2>

                <div className="service-line"></div>

                <p className="service-description">{service.description}</p>

                <p className="service-details">{service.details}</p>

                {/* FEATURES */}

                <ul className="service-points">
                  {service.points.map(point => (
                    <li key={point}>
                      <span className="check">✓</span>

                      {point}
                    </li>
                  ))}
                </ul>

                {/* BUTTONS */}

                <div className="service-buttons">
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="service-enquire"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    ENQUIRE NOW
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </section>
          )
        })}
      </main>

      {/* ======================================
          FINAL CTA
      ====================================== */}

      <section className="services-final-cta">
        <div>
          <span>READY TO START?</span>

          <h2>Let's plan your next journey.</h2>

          <p>Tell us where you want to go and let our travel professionals take care of the details.</p>
        </div>

        <Link style={{ textDecoration: "none" }} to="/contact" className="final-cta-button">
          TALK TO AN EXPERT
          <span>→</span>
        </Link>
      </section>
    </div>
  )
}

export default Services
