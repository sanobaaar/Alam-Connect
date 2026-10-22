import { Link } from "react-router-dom"
import {
  Plane,
  Building2,
  Hotel,
  Palmtree,
  MapPin,
  FileCheck,
  CarFront,
  ShieldCheck,
  Users,
  CalendarDays,
  ArrowRight,
  Globe2,
  BriefcaseBusiness,
} from "lucide-react"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

const services = [
  {
    icon: Plane,
    title: "Airline Ticketing",
    text: "Domestic and international flight bookings with flexible travel options and professional support.",
  },
  {
    icon: Hotel,
    title: "Hotel Reservations",
    text: "Accommodation solutions tailored to your destination, preferences, and budget.",
  },
  {
    icon: Palmtree,
    title: "Holiday Packages",
    text: "Personalised leisure holidays, family vacations, adventure trips, and special getaways.",
  },
  {
    icon: MapPin,
    title: "Destination Management",
    text: "Local travel arrangements and destination services to help make every journey seamless.",
  },
  {
    icon: FileCheck,
    title: "Visa Assistance",
    text: "Guidance and assistance with visa application requirements and travel documentation.",
  },
  {
    icon: CarFront,
    title: "Transfers & Car Rental",
    text: "Convenient airport transfers, ground transportation, and car rental arrangements.",
  },
  {
    icon: ShieldCheck,
    title: "Travel Insurance",
    text: "Travel protection options to help you prepare for unexpected situations during your trip.",
  },
  {
    icon: Users,
    title: "Group Travel",
    text: "Coordinated travel arrangements for families, organisations, groups, and special occasions.",
  },
  {
    icon: CalendarDays,
    title: "MICE & Corporate Events",
    text: "Travel coordination for meetings, incentives, conferences, exhibitions, and corporate events.",
  },
]

const strengths = [
  {
    icon: BriefcaseBusiness,
    title: "Corporate Travel Expertise",
    text: "Business travel solutions designed around efficiency, flexibility, cost control, and dependable support.",
  },
  {
    icon: Globe2,
    title: "Comprehensive Travel Solutions",
    text: "A broad range of domestic and international travel services, coordinated through one travel partner.",
  },
  {
    icon: Users,
    title: "Personalised Service",
    text: "Travel arrangements shaped around each client's requirements, preferences, and priorities.",
  },
]

export default function About() {
  return (
    <>
      {" "}
      <div className="hero-wrapper">
        <NavBar />
      </div>
      <main className="about-page">
        {/* Hero */}
        <section className="about-hero">
          <div className="about-hero-overlay" />

          <div className="about-hero-content">
            <span className="about-eyebrow">GET TO KNOW US</span>

            <h1>
              About <span>Alam Connect</span>
            </h1>

            <p>Connecting people, businesses, and destinations through professional travel solutions.</p>

            <a href="/contact" className="contact-hero-button">
              SEND AN EMAIL <span>↗</span>
            </a>
          </div>
        </section>

        {/* Company Introduction */}
        <section className="about-intro section-padding">
          <div className="about-intro-grid">
            <div className="about-intro-heading">
              <span className="about-eyebrow">WHO WE ARE</span>

              <h2>
                Experience that moves you.
                <span> Service that connects you.</span>
              </h2>
            </div>

            <div className="about-intro-copy">
              <p>
                ALAM CONNECT is a new-generation travel company built on more than four decades of experience in the
                travel industry. Founded with a passion for exploration and a vision to connect people with the world,
                we combine fresh ideas, modern travel solutions, and deep industry expertise to deliver seamless and
                personalised journeys.
              </p>

              <p>
                Alam Connect Travel is a professional, full-service travel and tourism company serving businesses,
                organisations, families, groups, and individual travellers. We bring together a comprehensive range of
                travel services with reliable support and attention to detail.
              </p>

              <p>
                Whether the journey is for business, leisure, family, adventure, pilgrimage, or a special occasion, our
                team works to make travel planning simpler and the overall experience smoother.
              </p>
            </div>
          </div>

          <div className="about-experience-strip">
            <div className="about-experience-number">
              <strong>40+</strong>
              <span>Years of Industry Experience</span>
            </div>

            <div className="about-experience-divider" />

            <p>
              A modern approach to travel, supported by decades of industry knowledge and a commitment to dependable
              service.
            </p>
          </div>
        </section>

        {/* Corporate Travel */}
        <section className="about-corporate section-padding">
          <div className="about-corporate-grid">
            <div className="about-corporate-image">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85"
                alt="Modern professional office meeting space"
              />
              <div className="about-image-caption">
                <Building2 size={22} />
                <span>Corporate Travel Management</span>
              </div>
            </div>

            <div className="about-corporate-content">
              <span className="about-eyebrow">BUSINESS TRAVEL</span>

              <h2>
                Corporate travel,
                <span> managed with confidence.</span>
              </h2>

              <p>
                We understand the unique demands of modern business travel, where efficiency, flexibility, cost control,
                timely support, and attention to detail matter.
              </p>

              <p>
                From executive travel and business trips to group movements, meetings, incentives, conferences, and
                corporate events, we provide end-to-end travel management shaped around each client's needs.
              </p>

              <ul className="about-check-list">
                <li>
                  <span className="about-check">✓</span>
                  Business and executive travel
                </li>
                <li>
                  <span className="about-check">✓</span>
                  Corporate and group bookings
                </li>
                <li>
                  <span className="about-check">✓</span>
                  Meetings, incentives, and conferences
                </li>
                <li>
                  <span className="about-check">✓</span>
                  Coordinated travel arrangements
                </li>
              </ul>

              <Link to="/corporate" className="about-text-link">
                Discover Corporate Travel
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="about-services section-padding">
          <div className="about-section-heading">
            <span className="about-eyebrow">WHAT WE DO</span>

            <h2>Travel solutions, all in one place.</h2>

            <p>
              From the first booking to the final destination, we coordinate the essential details of your journey with
              professional care.
            </p>
          </div>

          <div className="about-services-grid">
            {services.map(({ icon: Icon, title, text }) => (
              <article className="about-service-card" key={title}>
                <div className="about-service-icon">
                  <Icon size={24} strokeWidth={1.7} />
                </div>

                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Why Alam Connect */}
        <section className="about-strengths section-padding">
          <div className="about-section-heading">
            <span className="about-eyebrow">THE ALAM CONNECT APPROACH</span>

            <h2>More than booking a journey.</h2>

            <p>
              We aim to be a dependable travel partner, taking care of the details so our clients can focus on what
              matters most.
            </p>
          </div>

          <div className="about-strengths-grid">
            {strengths.map(({ icon: Icon, title, text }) => (
              <article className="about-strength-card" key={title}>
                <Icon size={28} strokeWidth={1.6} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Closing CTA */}

        <Footer />
      </main>
    </>
  )
}
