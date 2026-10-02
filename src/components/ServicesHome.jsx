import flightsImg from "../assets/flight.jpg"
import hotelsImg from "../assets/hotel.jpg"
import visaImg from "../assets/visa.jpg"
import miceImg from "../assets/family.jpg"
import transfersImg from "../assets/rental.jpg"
import pilgrimageImg from "../assets/pilgrimage.jpg"
import tailorMadeImg from "../assets/holiday.jpg"
import corporateImg from "../assets/corporate.jpg"

const ServicesHome = () => {
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
      description:
        "End-to-end business travel management focused on efficiency, flexibility, cost control, and support.",
    },
  ]

  return (
    <section className="services-section">
      <header className="services-header">
        <div className="gold-line"></div>

        <span>Solutions for Every Journey</span>

        <h2>OUR TRAVEL SERVICES</h2>

        <i></i>
      </header>

      <div className="services-row">
        {services.map(service => (
          <article className="square-service" key={service.title}>
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>

            <div className="card-content">
              <h5>{service.title}</h5>

              {/* <p>{service.description}</p> */}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ServicesHome
