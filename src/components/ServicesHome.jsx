import flight from "../assets/flight.jpg"
import hotel from "../assets/hotel.jpg"
import holiday from "../assets/holiday.jpg"
import corporate from "../assets/corporate.jpg"
import family from "../assets/family.jpg"
import customize from "../assets/customize.jpg"

const ServicesHome = () => {
  return (
    <div>
      {/* SERVICES HEADING */}
      <div className="services-section">
        <header>
          <div className="gold-line"></div>

          <span>OUR TRAVEL SERVICES</span>

          <h2>Complete Solutions for Every Journey</h2>

          <i></i>
        </header>
      </div>

      {/* SERVICES CARDS */}
      <div className="services-row">
        {/* FLIGHTS */}
        <div className="square-service">
          <img src={flight} alt="Flights" className="card-img" />

          <div className="card-overlay">
            <div className="card-content">
              <h5>Flights</h5>

              {/* 
              <p>International & Domestic Flights.</p>
              <button className="enquireNow">
                Enquire Now
              </button>
              */}
            </div>
          </div>
        </div>

        {/* HOLIDAYS */}
        <div className="square-service">
          <img src={holiday} alt="Holiday Packages" className="card-img" />

          <div className="card-overlay">
            <div className="card-content">
              <h5>Holidays</h5>

              {/*
              <p>Packages for every traveller.</p>
              <button className="enquireNow">
                Enquire Now
              </button>
              */}
            </div>
          </div>
        </div>

        {/* HOTELS */}
        <div className="square-service">
          <img src={hotel} alt="Hotel Reservations" className="card-img" />

          <div className="card-overlay">
            <div className="card-content">
              <h5>Hotels</h5>

              {/*
              <p>Comfortable stays worldwide.</p>
              <button className="enquireNow">
                Enquire Now
              </button>
              */}
            </div>
          </div>
        </div>

        {/* CORPORATE TRAVEL */}
        <div className="square-service">
          <img src={corporate} alt="Corporate Travel" className="card-img" />

          <div className="card-overlay">
            <div className="card-content">
              <h5>Corporate Travel</h5>

              {/*
              <p>End-to-End Corporate Travel Solutions.</p>
              <button className="enquireNow">
                Enquire Now
              </button>
              */}
            </div>
          </div>
        </div>

        {/* FAMILY & GROUP */}
        <div className="square-service">
          <img src={family} alt="Family & Group Travel" className="card-img" />

          <div className="card-overlay">
            <div className="card-content">
              <h5>Family & Group Travel</h5>

              {/*
              <p>Hassle-free journeys.</p>
              <button className="enquireNow">
                Enquire Now
              </button>
              */}
            </div>
          </div>
        </div>

        {/* CUSTOMIZED TOURS */}
        <div className="square-service">
          <img src={customize} alt="Customized Tours" className="card-img" />

          <div className="card-overlay">
            <div className="card-content">
              <h5>Customized Tours</h5>

              {/*
              <p>Tailor made itineraries just for you.</p>
              <button className="enquireNow">
                Enquire Now
              </button>
              */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesHome
