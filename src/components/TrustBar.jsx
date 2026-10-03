import {  BadgeCheck, Headphones,  ShieldCheck } from "lucide-react"


const trustItems = [
  
  {
    icon: BadgeCheck,
    title: "IATA",
    subtitle: "Accredited",
  },
  {
    icon: Headphones,
    title: "24/7",
    subtitle: "Real-Time Support",
  },
 
  {
    icon: ShieldCheck,
    title: "Reliable",
    subtitle: "& Trusted",
  },
]

function TrustBar() {
  return (
    <section className="trust-bar">
      <div className="trust-bar-inner">
        {trustItems.map((item, index) => {
          const Icon = item.icon

          return (
            <div
              className={`trust-item ${index !== trustItems.length - 1 ? "trust-item-border" : ""}`}
              key={item.title}
            >
              <div className="trust-icon">
                <Icon size={42} strokeWidth={1.7} />
              </div>

              <div className="trust-text">
                <h3>{item.title}</h3>

                <p>{item.subtitle}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default TrustBar
