import { useState } from "react"

const EnquiryForm = ({ service }) => {
  const [formData, setFormData] = useState({})
  const [status, setStatus] = useState("idle")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus("success")
    setFormData({})
  }

  const renderField = (field) => {
    switch (field.type) {
      case "select":
        return (
          <select
            id={field.name}
            name={field.name}
            value={formData[field.name] || ""}
            onChange={handleChange}
            required={field.required}
          >
            <option value="" disabled>Select…</option>
            {field.options.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        )
      case "textarea":
        return (
          <textarea
            id={field.name}
            name={field.name}
            value={formData[field.name] || ""}
            onChange={handleChange}
            required={field.required}
            rows={4}
          />
        )
      default:
        return (
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            value={formData[field.name] || ""}
            onChange={handleChange}
            required={field.required}
          />
        )
    }
  }

  if (status === "success") {
    return (
      <div className="form-success">
        <h3>✓ Enquiry Submitted!</h3>
        <p>Thank you for your enquiry about {service.title}. We'll get back to you shortly.</p>
        <button onClick={() => setStatus("idle")} className="submit-btn">Submit Another Enquiry</button>
      </div>
    )
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      {service.fields.map((field) => (
        <div
          className={`form-group${field.type === "textarea" ? " form-group-full" : ""}`}
          key={field.name}
        >
          <label htmlFor={field.name}>
            {field.label}
            {field.required && <span className="required">*</span>}
          </label>
          {renderField(field)}
        </div>
      ))}
      <button type="submit" className="submit-btn">
        Submit Enquiry
      </button>
    </form>
  )
}

export default EnquiryForm
