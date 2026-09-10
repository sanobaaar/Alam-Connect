import { Link } from "react-router-dom"
import { serviceForms } from "../data/serviceForms"

const Services = () => {
  return (
    <div className="services">
      <header>
        <span>OUR TRAVEL SERVICES</span>
        <h2>Complete Solutions for Every Journey</h2>
        <i></i>
      </header>
      <div className="services-grid">
        {serviceForms.map((service) => (
          <Link
            to={`/enquiry/${service.id}`}
            key={service.id}
            className="service-card-link"
          >
            <div className="service-card">
              <img src={service.image} alt={service.alt} className="card-img" />
              <div className="card-overlay">
                <div className="card-content">
                  <h5>{service.title}</h5>
                  <p>{service.subtitle}</p>
                  <span className="enquire-cta">Enquire Now →</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Services
