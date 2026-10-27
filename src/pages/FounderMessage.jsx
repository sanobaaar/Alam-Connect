import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

import founderImg from "../assets/aboutfounder.png"

const FounderMessage = () => {
  return (
    <>
      <div className="hero-wrapper">
        <NavBar />
      </div>
      <main className="founder-page">
        {/* HERO */}
        <section className="founder-hero">
          <div className="founder-hero-content">
            <span className="founder-eyebrow">A MESSAGE FROM OUR FOUNDER</span>

            <h1>
              From Paper to <span>Paperless.</span>
            </h1>

            <p className="founder-hero-subtitle">Four decades of experience. One vision for the future.</p>

            <p className="founder-hero-description">
              Every journey has a beginning. Ours began with printed air tariff manuals and continues today with a new
              generation of travel solutions.
            </p>
          </div>

          <div className="founder-hero-image">
            <img src={founderImg} alt="Airplane travelling above the clouds" />
            <span className="founder-image-caption">ALAM CONNECT — OUR JOURNEY</span>
          </div>
        </section>

        {/* CHAPTER 1 */}
        <section className="founder-section founder-section-teal">
          <div className="founder-section-inner">
            <span className="founder-chapter">01 / THE BEGINNING</span>

            <h2>A Career Shaped by Change</h2>

            <p>
              My journey in travel began more than four decades ago, when the industry operated in a very different
              world. There were no smartphones, online booking platforms or instant fare searches.
            </p>

            <p>
              I began my career working with Air Tariff Manuals (ATPs) — extensive printed volumes containing the fares,
              rules and regulations that shaped air travel. Finding the right fare and constructing an itinerary
              demanded knowledge, patience and experience. It was a skill developed over time.
            </p>

            <p>
              I witnessed handwritten airline tickets evolve into printed tickets, electronic ticketing, computerised
              reservations and global distribution systems. The internet transformed how people searched for and
              purchased travel, eventually bringing us into an increasingly paperless world.
            </p>

            <p>
              Looking back, I feel privileged not simply to have worked in this industry, but to have witnessed its
              evolution across generations.
            </p>
          </div>
        </section>

        {/* CHAPTER 2 */}
        <section className="founder-section founder-section-light">
          <div className="founder-section-inner founder-narrow">
            <span className="founder-chapter">02 / WHAT ENDURES</span>

            <h2>Technology Evolves. Trust Endures.</h2>

            <p>
              The expectations of travellers and businesses have changed. Service has become faster, and convenience has
              taken on a new meaning. Yet one thing remains constant: people still need someone they can trust.
            </p>

            <p>
              A computer can find a fare. A system can make a reservation. An application can issue a ticket. But when a
              flight is cancelled, plans change unexpectedly or a business traveller needs urgent assistance, experience
              makes a difference.
            </p>

            <p>
              Over the years, I have learned that travel is about far more than destinations and reservations. It is
              about relationships, responsibility, careful listening and finding solutions when they matter most.
            </p>

            <blockquote className="founder-quote">
              “People are our priority.
              <br />
              Trust is our promise.”
            </blockquote>
          </div>
        </section>

        {/* CHAPTER 3 */}
        <section className="founder-section founder-section-teal">
          <div className="founder-split">
            <div className="founder-split-content">
              <span className="founder-chapter">03 / A NEW CHAPTER</span>

              <h2>The Birth of Alam Connect</h2>

              <p>
                Alam Connect was born from this journey — not to recreate the travel agency of the past, nor simply to
                become another digital travel company, but to bring together the best of both worlds.
              </p>

              <p>
                We combine the wisdom and personal touch gained through decades of industry experience with the
                technology, efficiency and possibilities of modern travel.
              </p>

              <p>
                Our roots are particularly strong in corporate travel, where reliability, responsiveness and attention
                to detail can have a direct impact on business. Our vision, however, extends much further.
              </p>

              <p>
                We aspire to be a complete travel solutions provider for businesses, families, individuals, groups and
                organisations — delivering professional, personalised service with care.
              </p>
            </div>

            <div className="founder-split-image">
              <img src={founderImg} alt="Aircraft ready for a new journey" loading="lazy" />
            </div>
          </div>
        </section>

        {/* CHAPTER 4 */}
        <section className="founder-section founder-section-light">
          <div className="founder-section-inner founder-narrow">
            <span className="founder-chapter">04 / OUR NAME & PURPOSE</span>

            <h2>A Name That Connects the World</h2>

            <p className="founder-name-statement">Alam means the world.</p>

            <p>
              To us, travel is about connection. It connects people with people, businesses with opportunities, families
              with loved ones, and cultures with new experiences.
            </p>

            <p>
              That is what we want Alam Connect to represent: a connection built on trust, strengthened by experience
              and made possible by innovation.
            </p>
          </div>
        </section>

        {/* CHAPTER 5 */}
        <section className="founder-section founder-section-teal">
          <div className="founder-section-inner">
            <span className="founder-chapter">05 / THE ROAD AHEAD</span>

            <h2>Looking Ahead</h2>

            <p>
              Having witnessed the industry's transition from manual processes to digital travel, I know that even
              greater change lies ahead. Artificial intelligence, automation, digital identities and new forms of
              mobility will continue to reshape how we travel.
            </p>

            <p>
              We welcome that change. The future belongs to those who embrace innovation while remaining true to their
              values.
            </p>

            <div className="founder-values">
              <div className="founder-value">
                <span className="founder-value-number">01</span>
                <h3>Experience</h3>
                <p>Our foundation.</p>
              </div>

              <div className="founder-value">
                <span className="founder-value-number">02</span>
                <h3>Technology</h3>
                <p>Our enabler.</p>
              </div>

              <div className="founder-value">
                <span className="founder-value-number">03</span>
                <h3>People</h3>
                <p>Our priority.</p>
              </div>

              <div className="founder-value">
                <span className="founder-value-number">04</span>
                <h3>Trust</h3>
                <p>Our promise.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CLOSING */}
        <section className="founder-closing">
          <div className="founder-closing-content">
            <span className="founder-eyebrow">THE JOURNEY CONTINUES</span>

            <h2>
              A New Name.
              <br />
              A New Vision.
              <br />
              <span>A New Generation of Travel.</span>
            </h2>

            <p>
              The journey that began with multi-volume Air Tariff Manuals has brought us to a new chapter. Alam Connect
              represents everything I have learned over more than four decades — and everything we hope to build for the
              future.
            </p>

            <div className="founder-closing-divider" />

            <p className="founder-tagline">
              Connecting the World.
              <br />
              Shaping the Future of Travel.
            </p>

            <p className="founder-signoff">The journey continues — and the best is yet to come.</p>

            <span className="founder-signature">Founder, Shadab Alam</span>
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
}

export default FounderMessage
