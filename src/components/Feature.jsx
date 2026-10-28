import { Plane, Hotel, Stamp, Users, CarFront, Compass, Globe2, BriefcaseBusiness } from "lucide-react"
import NavBar from "./NavBar"

import serviceHero from "../assets/servicesheri.jpg"

const services = [
  {
    number: "01",
    icon: Plane,
    title: "Flights",
    subtitle: "Domestic & International",
    description:
      "Seamless air travel solutions with competitive fares, flexible options, and expert assistance for journeys around the world.",
  },
  {
    number: "02",
    icon: Hotel,
    title: "Hotel Reservations",
    description:
      "From business hotels to luxury resorts, we arrange comfortable stays that match your destination, preferences, and budget.",
  },
  {
    number: "03",
    icon: Stamp,
    title: "Visa Assistance",
    description:
      "Simplifying the visa process with professional guidance on documentation, applications, and travel requirements.",
  },
  {
    number: "04",
    icon: Users,
    title: "Group Travel & MICE",
    description:
      "From group tours to corporate meetings, incentives, conferences, and exhibitions — we manage every detail for a smooth experience.",
  },
  {
    number: "05",
    icon: CarFront,
    title: "Transfers & Car Rental",
    description:
      "Reliable airport transfers, chauffeur services, and car rentals to keep your journey comfortable, convenient, and stress-free.",
  },
  {
    number: "06",
    icon: Compass,
    title: "Pilgrimage Travel",
    description:
      "Thoughtfully planned Umrah, Hajj, and pilgrimage journeys, combining reliable travel arrangements with comfort and peace of mind.",
  },
  {
    number: "07",
    icon: Globe2,
    title: "Tailor-Made Travel Solutions",
    description:
      "Every journey is different. We create personalized travel experiences designed around your schedule, interests, preferences, and budget.",
  },
  {
    number: "08",
    icon: BriefcaseBusiness,
    title: "Corporate & Business Travel",
    description:
      "Smart and efficient travel solutions for businesses — including flights, accommodation, transfers, visa assistance, and complete corporate travel management.",
  },
]

export default function Feature() {
  return (
    <>
      <div className="hero-wrapper">
        <NavBar />
      </div>
      <main className="services-page">
        {/* HERO SECTION */}
        <section className="services-hero">
          <div className="service-hero-image">
            <img src={serviceHero} alt="Services" />
          </div>
          <div className="service-hero-overlay" />
          <div className="services-hero-inner">
            
            <h1>
              Every Journey.
              <br />
              <span>One Connection.</span>
            </h1>

            <a href="/about" className="contact-hero-button">
              LEARN MORE ABOUT US <span>↗</span>
            </a>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="services-intro" id="our-services">
          <div>
            <span className="services-section-label">WHAT WE DO</span>

            <h2>Travel made simpler.</h2>
          </div>

          <p>Whatever brings you to the world, we provide the travel expertise and support to get you there.</p>
        </section>

        {/* SERVICES GRID */}
        <section className="services-grid-section">
          <div className="services-grid">
            {services.map(service => {
              const Icon = service.icon

              return (
                <article className="service-card" key={service.number}>
                  <div className="service-card-top">
                    <div className="service-icon">
                      <Icon size={25} strokeWidth={1.6} />
                    </div>

                    <span className="service-number">{service.number}</span>
                  </div>

                  <h3>{service.title}</h3>

                  {service.subtitle && <p className="service-subtitle">{service.subtitle}</p>}

                  <p className="service-description">{service.description}</p>

                  <div className="service-card-bottom">
                    <span />
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        {/* CLOSING STATEMENT */}
        <section className="services-closing">
          <span className="services-section-label">YOUR JOURNEY, OUR EXPERTISE</span>

          <h2>
            One Connection.
            <br />
            <span>Every Travel Solution.</span>
          </h2>

          <p>
            From business trips and family holidays to group journeys and pilgrimage, we connect you to the world with
            expertise, care, and confidence.
          </p>
        </section>
      </main>
    </>
  )
}
