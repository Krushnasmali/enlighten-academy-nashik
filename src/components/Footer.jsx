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
                <span>Shramik Nagar, Near Manahdev Mandir, Satpur, Nashik - 422012</span>
              </li>
              <li>
                <FaPhone />
                <a href="tel:+911234567892">+91 1234567893</a>
              </li>
              <li>
                <FaEnvelope />
                <a href="mailto:enlightenacademy@gmail.com">enlightenacademy@gmail.com</a>
              </li>
            </ul>

            {/* Map */}
            <div className="footer-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2718.957202899209!2d73.7081371685776!3d19.996658299859345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddec56f523a153%3A0x7ffa92ecac612e68!2sENLIGHTEN%20ACADEMY!5e0!3m2!1sen!2sin!4v1773637163092!5m2!1sen!2sin"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </div>
      {/* 
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2718.957202899209!2d73.7081371685776!3d19.996658299859345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddec56f523a153%3A0x7ffa92ecac612e68!2sENLIGHTEN%20ACADEMY!5e0!3m2!1sen!2sin!4v1773637163092!5m2!1sen!2sin" 
allowfullscreen 
loading="lazy" 
referrerpolicy="no-referrer-when-downgrade">
</iframe>

 */}
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
