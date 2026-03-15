import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaGraduationCap, FaPhone, FaEnvelope, FaMapMarkerAlt,
  FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin
} from 'react-icons/fa'
import './Footer.css'

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Courses', path: '/courses' },
  { label: 'Activities', path: '/activities' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

const programs = [
  'Primary Education (Gr. 1–5)',
  'Middle School (Gr. 6–8)',
  'Secondary (Gr. 9–10)',
  'Higher Secondary (Gr. 11–12)',
  'Competitive Exam Prep',
  'Hobby & Skill Classes',
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          {/* Brand */}
          <div className="footer-col footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon"><FaGraduationCap /></div>
              <div>
                <div className="footer-logo-main">Vidya Mandir</div>
                <div className="footer-logo-sub">Institute of Excellence</div>
              </div>
            </div>
            <p className="footer-about-text">
              Nurturing young minds since 1985 with a commitment to holistic education,
              academic rigour, and values that last a lifetime.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="YouTube"><FaYoutube /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="footer-col">
            <h4 className="footer-heading">Programs</h4>
            <ul className="footer-links">
              {programs.map((p) => (
                <li key={p}><Link to="/courses">{p}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <FaMapMarkerAlt />
                <span>123, Shivaji Nagar, Pune, Maharashtra — 411005</span>
              </li>
              <li>
                <FaPhone />
                <a href="tel:+912012345678">+91 20 1234 5678</a>
              </li>
              <li>
                <FaEnvelope />
                <a href="mailto:info@vidyamandir.edu.in">info@vidyamandir.edu.in</a>
              </li>
            </ul>

            {/* Map */}
            <div className="footer-map">
              <iframe
                title="Institute Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856342!2d73.85674!3d18.52043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07f4b39cf6d%3A0x6b9c4c1a0a2c3f19!2sShivaji%20Nagar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} Vidya Mandir Institute of Excellence. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
