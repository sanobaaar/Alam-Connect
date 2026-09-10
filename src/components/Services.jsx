import flight  from "../assets/flight.jpg"
import hotel  from "../assets/hotel.jpg"
import holiday  from "../assets/holiday.jpg"
import corporate from "../assets/corporate.jpg"
import family  from "../assets/family.jpg"
import  customize  from "../assets/customize.jpg"
import  honeymoon from "../assets/honeymoon.jpg"
import  support from "../assets/support.jpg"

const Services = () => {
  return (
    <div className="services">
      <header>
        <span>OUR TRAVEL SERVICES</span>
        <h2>Complete Solutions for Every Journey</h2>
        <i></i>
      </header>
      <div class="services-grid">
        <div class="service-card">
          <img src={flight} alt="Flights" class="card-img" />
          <div class="card-overlay">
            <div class="card-content">
              <h5>International & Domestic Flights</h5>
              <p>Find convenient flight options for business and leisure travel.</p>
            </div>
          </div>
        </div>

        <div class="service-card">
          <img src={holiday} alt="Holiday Packages" class="card-img" />
          <div class="card-overlay">
            <div class="card-content">
              <h5>Holiday Packages</h5>
              <p>Discover thoughtfully planned vacations for individuals, couples, families and groups.</p>
            </div>
          </div>
        </div>

        <div class="service-card">
          <img src={hotel} alt="Hotel Reservations" class="card-img" />
          <div class="card-overlay">
            <div class="card-content">
              <h5>Hotel Reservations</h5>
              <p>Accomodation options to suit different destinations, preferences and budgets.</p>
            </div>
          </div>
        </div>
        <div class="service-card">
          <img src={corporate} alt="Corporate Travel" class="card-img" />
          <div class="card-overlay">
            <div class="card-content">
              <h5>Corporate Travel</h5>
              <p>Professional travel solutions designed to meet the needs of businesses and organizations.</p>
            </div>
          </div>
        </div>
        <div class="service-card">
          <img src={family} alt="Family & Group Travel" class="card-img" />
          <div class="card-overlay">
            <div class="card-content">
              <h5>Family & Group Travel</h5>
              <p>Hassle-free planning for memorable family holidays and group journeys.</p>
            </div>
          </div>
        </div>
        <div class="service-card">
          <img src={customize} alt="Customized Tours" class="card-img" />
          <div class="card-overlay">
            <div class="card-content">
              <h5>Customized Tours</h5>
              <p>Personalised itineraries created around your interest, schedule and travel goals.</p>
            </div>
          </div>
        </div>
        <div class="service-card">
          <img src={honeymoon} alt="Honeymoon & Special Holidays" class="card-img" />
          <div class="card-overlay">
            <div class="card-content">
              <h5>Honeymoon & Special Holidays</h5>
              <p>Create unforgettable experiences for life's most special occasions.</p>
            </div>
          </div>
        </div>
        <div class="service-card">
          <img src={support} alt="Travel Assistance" class="card-img" />
          <div class="card-overlay">
            <div class="card-content">
              <h5>Travel Assistance</h5>
              <p>Expert guidance to help you plan your journey with confidence.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
