import React, { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa'
import './Banner.css'

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=80',
    label: 'Welcome to Vidya Mandir',
    title: 'Shaping Tomorrow\'s Leaders Today',
    subtitle: 'A premier institution committed to holistic education, academic excellence, and character development since 1985.',
    cta1: { label: 'Explore Courses', to: '/courses' },
    cta2: { label: 'Watch Video', to: '#video' },
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80',
    label: 'World-Class Faculty',
    title: 'Learn From The Best Educators',
    subtitle: 'Our experienced teachers bring passion and expertise to every classroom, nurturing curiosity and critical thinking.',
    cta1: { label: 'Meet Our Team', to: '/about' },
    cta2: { label: 'Our Courses', to: '/courses' },
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1600&q=80',
    label: 'Holistic Development',
    title: 'Beyond Academics — A Complete Education',
    subtitle: 'From cultural festivals to science olympiads, we offer a vibrant ecosystem that helps every student flourish.',
    cta1: { label: 'View Activities', to: '/activities' },
    cta2: { label: 'Register Now', to: '/register' },
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=80',
    label: 'State-of-the-Art Facilities',
    title: 'Modern Infrastructure for Modern Learners',
    subtitle: 'Smart classrooms, digital labs, sports facilities, and creative spaces designed to inspire innovation and growth.',
    cta1: { label: 'About Us', to: '/about' },
    cta2: { label: 'Contact Us', to: '/contact' },
  },
]

export default function Banner() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const go = useCallback((idx) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrent(idx)
      setIsTransitioning(false)
    }, 300)
  }, [isTransitioning])

  const next = useCallback(() => go((current + 1) % slides.length), [current, go])
  const prev = useCallback(() => go((current - 1 + slides.length) % slides.length), [current, go])

  useEffect(() => {
    const timer = setInterval(next, 5500)
    return () => clearInterval(timer)
  }, [next])

  const slide = slides[current]

  return (
    <section className="banner">
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`banner-slide${i === current ? ' active' : ''}`}
          style={{ backgroundImage: `url(${s.image})` }}
        />
      ))}

      {/* Overlay */}
      <div className="banner-overlay" />

      {/* Content */}
      <div className={`banner-content${isTransitioning ? ' fade-out' : ' fade-in'}`}>
        <div className="container">
          <span className="banner-label">{slide.label}</span>
          <h1 className="banner-title">{slide.title}</h1>
          <p className="banner-subtitle">{slide.subtitle}</p>
          <div className="banner-ctas">
            <Link to={slide.cta1.to} className="btn-primary">
              {slide.cta1.label}
            </Link>
            <Link to={slide.cta2.to} className="btn-secondary">
              <FaPlay style={{ fontSize: '0.75rem' }} /> {slide.cta2.label}
            </Link>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button className="banner-arrow banner-prev" onClick={prev}>
        <FaChevronLeft />
      </button>
      <button className="banner-arrow banner-next" onClick={next}>
        <FaChevronRight />
      </button>

      {/* Dots */}
      <div className="banner-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot${i === current ? ' active' : ''}`}
            onClick={() => go(i)}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="banner-progress">
        <div key={current} className="banner-progress-bar" />
      </div>
    </section>
  )
}
