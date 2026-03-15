import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaChevronDown, FaGraduationCap } from 'react-icons/fa'
import './Navbar.css'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Courses', path: '/courses' },
  { label: 'Activities', path: '/activities' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

const categories = [
  'All Categories',
  'Science & Math',
  'Languages',
  'Arts & Craft',
  'Sports',
  'Technology',
  'Music',
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const [selectedCat, setSelectedCat] = useState('All Categories')
  const location = useLocation()
  const dropRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setDropOpen(false)
  }, [location])

  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDropOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <div className="logo-icon"><FaGraduationCap /></div>
          <div className="logo-text">
            <span className="logo-main">Vidya Mandir</span>
            <span className="logo-sub">Institute of Excellence</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar-links">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}

          {/* Category Dropdown */}
          <div className="cat-dropdown" ref={dropRef}>
            <button
              className="cat-trigger"
              onClick={() => setDropOpen(!dropOpen)}
            >
              {selectedCat} <FaChevronDown className={dropOpen ? 'rotated' : ''} />
            </button>
            {dropOpen && (
              <ul className="cat-menu">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      className={selectedCat === cat ? 'active' : ''}
                      onClick={() => { setSelectedCat(cat); setDropOpen(false) }}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </nav>

        {/* Auth Buttons */}
        <div className="navbar-auth">
          <Link to="/login" className="btn-login">Login</Link>
          <Link to="/register" className="btn-register">Register</Link>
        </div>

        {/* Hamburger */}
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => `mobile-link${isActive ? ' active' : ''}`}
          >
            {link.label}
          </NavLink>
        ))}
        <select
          className="mobile-cat-select"
          value={selectedCat}
          onChange={(e) => setSelectedCat(e.target.value)}
        >
          {categories.map((c) => <option key={c}>{c}</option>)}
        </select>
        <div className="mobile-auth">
          <Link to="/login" className="btn-login">Login</Link>
          <Link to="/register" className="btn-register">Register</Link>
        </div>
      </div>
    </header>
  )
}
