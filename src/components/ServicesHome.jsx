import flight from "../assets/flight.jpg"
import hotel from "../assets/hotel.jpg"
import holiday from "../assets/holiday.jpg"
import corporate from "../assets/corporate.jpg"
import family from "../assets/family.jpg"
import customize from "../assets/customize.jpg"
// import honeymoon from "../assets/honeymoon.jpg"
// import support from "../assets/support.jpg"
const ServicesHome = () => {
  return (
    <div class="services-section">
      <header>
        <div className="gold-line"></div>

        <span>OUR TRAVEL SERVICES</span>
        <h2>Complete Solutions for Every Journey</h2>
        <i></i>
        <div className="gold-line"></div>
      </header>
      <div class="services-row">
        <div class="square-service">
          <img src={flight} alt="Flights" class="card-img" />
          <div class="card-overlay">
            <div class="card-content">
              <h5>Flights</h5>
              {/* <p>International & Domestic Flights.</p> */}
              {/* <button className="enquireNow">Enquire Now</button> */}
            </div>
          </div>
        </div>

        <div class="square-service">
          <img src={holiday} alt="Holiday Packages" class="card-img" />
          <div class="card-overlay">
            <div class="card-content">
              <h5>Holidays</h5>
              {/* <p>Packages for every traveller.</p> */}
              {/* <button className="enquireNow">Enquire Now</button> */}
            </div>
          </div>
        </div>

        <div class="square-service">
          <img src={hotel} alt="Hotel Reservations" class="card-img" />
          <div class="card-overlay">
            <div class="card-content">
              <h5>Hotels</h5>
              {/* <p>Comfortable stays worldwide.</p> */}
              {/* <button className="enquireNow">Enquire Now</button> */}
            </div>
          </div>
        </div>
        <div class="square-service">
          <img src={corporate} alt="Corporate Travel" class="card-img" />
          <div class="card-overlay">
            <div class="card-content">
              <h5>Corporate Travel</h5>
              {/* <p>End-to-End Corporate Travel Solutions.</p> */}
              {/* <button className="enquireNow">Enquire Now</button> */}
            </div>
          </div>
        </div>
        <div class="square-service">
          <img src={family} alt="Family & Group Travel" class="card-img" />
          <div class="card-overlay">
            <div class="card-content">
              <h5>Family & Group Travel</h5>
              {/* <p>Hassle-free journeys.</p> */}
              {/* <button className="enquireNow">Enquire Now</button> */}
            </div>
          </div>
        </div>
        <div class="square-service">
          <img src={customize} alt="Customized Tours" class="card-img" />
          <div class="card-overlay">
            <div class="card-content">
              <h5>Customized Tours</h5>
              {/* <p>Tailor made itineraries just for you.</p> */}
              {/* <button className="enquireNow">Enquire Now</button> */}
            </div>
          </div>
        </div>
        {/* <div class="square-service">
          <img src={honeymoon} alt="Honeymoon & Special Holidays" class="card-img" />
          <div class="card-overlay">
            <div class="card-content">
              <h5>Honeymoon & Special Holidays</h5>
              // <p>Create unforgettable experiences for life's most special occasions.</p>
              // <button className="enquireNow">Enquire Now</button>
            </div>
          </div> */}
        {/* </div>
        <div class="square-service">
          <img src={support} alt="Travel Assistance" class="card-img" />
          <div class="card-overlay">
            <div class="card-content">
              <h5>Travel Assistance</h5>
              // <p>Expert guidance to help you plan your journey with confidence.</p>
              // <button className="enquireNow">Enquire Now</button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default ServicesHome
