import { useEffect, useRef } from "react"

import flightsImg from "../assets/flight.jpg"
import hotelsImg from "../assets/hotel.jpg"
import visaImg from "../assets/visa.jpg"
import miceImg from "../assets/family.jpg"
import transfersImg from "../assets/rental.jpg"
import pilgrimageImg from "../assets/pilgrimage.jpg"
import tailorMadeImg from "../assets/holiday.jpg"
import corporateImg from "../assets/corporate.jpg"

const services = [
  {
    image: flightsImg,
    title: "Flights",
    description: "Domestic and international flight bookings with flexible options and personalized assistance.",
  },
  {
    image: hotelsImg,
    title: "Hotel Reservations",
    description: "Comfortable stays worldwide with carefully selected hotels to suit your needs and budget.",
  },
  {
    image: visaImg,
    title: "Visa Assistance",
    description: "Professional guidance with visa requirements, documentation, applications, and travel procedures.",
  },
  {
    image: miceImg,
    title: "Group Travel & MICE",
    description: "Seamless travel planning for groups, meetings, incentives, conferences, and corporate events.",
  },
  {
    image: transfersImg,
    title: "Transfers & Car Rental",
    description: "Reliable airport transfers and car rental solutions for convenient and stress-free travel.",
  },
  {
    image: pilgrimageImg,
    title: "Pilgrimage Travel",
    description: "Thoughtfully arranged travel services for Umrah and other pilgrimage journeys with ease and care.",
  },
  {
    image: tailorMadeImg,
    title: "Tailor-Made Travel Solutions",
    description:
      "Customized itineraries designed around your destination, schedule, interests, and travel preferences.",
  },
  {
    image: corporateImg,
    title: "Corporate & Business Travel",
    description: "End-to-end business travel management focused on efficiency, flexibility, cost control, and support.",
  },
]

const ServicesHome = () => {
  const trackRef = useRef(null)
  const isPausedRef = useRef(false)
  const positionRef = useRef(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let animationFrame
    let previousTime = 0
    const speed = 35

    const animate = time => {
      if (!previousTime) previousTime = time

      const delta = Math.min((time - previousTime) / 1000, 0.05)
      previousTime = time

      if (!isPausedRef.current) {
        positionRef.current += speed * delta

        const loopWidth = track.scrollWidth / 2

        if (loopWidth > 0 && positionRef.current >= loopWidth) {
          positionRef.current %= loopWidth
        }

        track.style.transform = `translate3d(${-positionRef.current}px, 0, 0)`
      }

      animationFrame = requestAnimationFrame(animate)
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [])

  const moveCarousel = direction => {
    const track = trackRef.current
    if (!track) return

    const firstCard = track.querySelector(".square-service")
    if (!firstCard) return

    const gap = parseFloat(window.getComputedStyle(track).columnGap) || 0

    const cardStep = firstCard.getBoundingClientRect().width + gap
    const loopWidth = track.scrollWidth / 2

    if (!loopWidth) return

    positionRef.current += direction * cardStep

    if (positionRef.current < 0) {
      positionRef.current = Math.max(0, loopWidth - cardStep)
    }

    if (positionRef.current >= loopWidth) {
      positionRef.current = 0
    }

    track.style.transform = `translate3d(${-positionRef.current}px, 0, 0)`
  }

  return (
    <section className="services-section" id="services">
      <header className="services-header">
        <h2>OUR SERVICES</h2>
        <div className="gold-line center"></div>
      </header>

      <div
        className="services-carousel"
        onMouseEnter={() => {
          isPausedRef.current = true
        }}
        onMouseLeave={() => {
          isPausedRef.current = false
        }}
        onFocusCapture={() => {
          isPausedRef.current = true
        }}
        onBlurCapture={event => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            isPausedRef.current = false
          }
        }}
      >
        <div className="services-track-window">
          <div className="services-track" ref={trackRef}>
            {[...services, ...services].map((service, index) => (
              <article
                className="square-service"
                key={`${service.title}-${index}`}
                aria-hidden={index >= services.length ? "true" : undefined}
              >
                <div className="service-image">
                  <img
                    src={service.image}
                    alt={index >= services.length ? "" : service.title}
                    loading={index < 4 ? "eager" : "lazy"}
                    draggable="false"
                  />

                  <div className="service-image-overlay" />
                </div>

                <div className="card-content">
                  <span className="service-number">{String((index % services.length) + 1).padStart(2, "0")}</span>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <span className="service-explore">EXPLORE SERVICE ↗</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="carousel-controls">
          <button
            type="button"
            className="carousel-arrow"
            aria-label="Previous services"
            onClick={() => moveCarousel(-1)}
          >
            &#8592;
          </button>

          <button type="button" className="carousel-arrow" aria-label="Next services" onClick={() => moveCarousel(1)}>
            &#8594;
          </button>
        </div>
      </div>
    </section>
  )
}

export default ServicesHome
