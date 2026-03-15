import React, { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane } from 'react-icons/fa'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <main className="page-wrapper">
      <div className="page-hero">
        <div className="page-hero-content">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Reach out for admissions, enquiries, or just to say hello.</p>
          <div className="breadcrumb">Home <span>/</span> Contact</div>
        </div>
      </div>

      <section className="contact-section">
        <div className="container contact-grid">
          {/* Info */}
          <div className="contact-info" data-aos="fade-right">
            <h2 className="contact-info-title">Get in Touch</h2>
            <p className="contact-info-sub">Our admissions team is available Monday–Saturday, 9 AM – 5 PM to answer all your questions.</p>

            <ul className="contact-details">
              <li>
                <div className="contact-icon"><FaMapMarkerAlt /></div>
                <div>
                  <strong>Address</strong>
                  <span>123, Shivaji Nagar, Near Balgandharva, Pune, Maharashtra — 411005</span>
                </div>
              </li>
              <li>
                <div className="contact-icon"><FaPhone /></div>
                <div>
                  <strong>Phone</strong>
                  <a href="tel:+912012345678">+91 20 1234 5678</a>
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </div>
              </li>
              <li>
                <div className="contact-icon"><FaEnvelope /></div>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:info@vidyamandir.edu.in">info@vidyamandir.edu.in</a>
                  <a href="mailto:admissions@vidyamandir.edu.in">admissions@vidyamandir.edu.in</a>
                </div>
              </li>
              <li>
                <div className="contact-icon"><FaClock /></div>
                <div>
                  <strong>Office Hours</strong>
                  <span>Mon – Sat: 9:00 AM – 5:00 PM</span>
                  <span>Sunday: Closed</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Form */}
          <div className="contact-form-wrap" data-aos="fade-left">
            {submitted && (
              <div className="success-toast">
                ✅ Thank you! Your message has been sent. We'll get back to you within 24 hours.
              </div>
            )}
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send Us a Message</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input id="name" name="name" type="text" placeholder="Eg. Priya Sharma" required value={form.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input id="email" name="email" type="email" placeholder="you@example.com" required value={form.email} onChange={handleChange} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select id="subject" name="subject" required value={form.subject} onChange={handleChange}>
                    <option value="">Select a topic</option>
                    <option>Admission Enquiry</option>
                    <option>Course Information</option>
                    <option>Fee Structure</option>
                    <option>Feedback or Complaint</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="form-group full-width">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" placeholder="Write your message here..." rows="5" required value={form.message} onChange={handleChange} />
              </div>
              <button type="submit" className="submit-btn">
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="map-section">
        <iframe
          title="Vidya Mandir Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856342!2d73.85674!3d18.52043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07f4b39cf6d%3A0x6b9c4c1a0a2c3f19!2sShivaji%20Nagar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </main>
  )
}
