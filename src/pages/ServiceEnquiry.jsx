import { useParams, Link } from "react-router-dom"
import { serviceForms } from "../data/serviceForms"
import EnquiryForm from "../components/EnquiryForm"

const ServiceEnquiry = () => {
  const { id } = useParams()
  const service = serviceForms.find((s) => s.id === id)

  if (!service) {
    return (
      <div className="enquiry-page">
        <div className="enquiry-header">
          <Link to="/" className="back-link">← Back to Home</Link>
          <h1>Service Not Found</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="enquiry-page">
      <div className="enquiry-header">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1>{service.title}</h1>
        <p>{service.subtitle}</p>
      </div>
      <EnquiryForm service={service} />
    </div>
  )
}

export default ServiceEnquiry
