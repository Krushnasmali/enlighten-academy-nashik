import React, { useState } from 'react'
import './Activities.css'

const activities = [
  {
    id: 1, title: 'Annual Science Exhibition', category: 'Academic',
    date: 'November 2024',
    description: 'Students present innovative science projects to expert judges. A celebration of curiosity, research, and experimentation.',
    image: 'https://images.unsplash.com/photo-1567168544230-f88b01f76ff3?w=600&q=80',
  },
  {
    id: 2, title: 'Cultural Fest — Utsav', category: 'Cultural',
    date: 'January 2025',
    description: 'A dazzling three-day festival featuring dance, drama, music, rangoli, and literary events across all grades.',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80',
  },
  {
    id: 3, title: 'Annual Sports Meet', category: 'Sports',
    date: 'February 2025',
    description: 'Inter-house championships in athletics, cricket, football, badminton, and chess with prizes for top performers.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80',
  },
  {
    id: 4, title: 'Independence Day Celebration', category: 'Patriotic',
    date: 'August 2024',
    description: 'Flag hoisting ceremony, patriotic songs, skits and speeches to honour India\'s freedom and its unsung heroes.',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&q=80',
  },
  {
    id: 5, title: 'Robotics & AI Workshop', category: 'Technology',
    date: 'October 2024',
    description: 'A two-day hands-on workshop where students build robots and explore artificial intelligence fundamentals.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80',
  },
  {
    id: 6, title: 'Diwali Mela', category: 'Festival',
    date: 'October 2024',
    description: 'A festive fair with food stalls, games, cultural performances, and lantern-making activities for all students.',
    image: 'https://images.unsplash.com/photo-1574125222374-82cef0fd3c72?w=600&q=80',
  },
  {
    id: 7, title: 'National Maths Olympiad', category: 'Academic',
    date: 'December 2024',
    description: '12 students qualified for the national round, with 3 winning gold medals — our best result in institute history.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80',
  },
  {
    id: 8, title: 'Yoga & Wellness Camp', category: 'Wellness',
    date: 'June 2024',
    description: 'A week-long yoga, meditation, and mindfulness camp to help students prepare for the new academic year with balance.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
  },
  {
    id: 9, title: 'Theatre & Drama Workshop', category: 'Cultural',
    date: 'March 2025',
    description: 'Professional theatre artists guided students through improvisation, stagecraft, and full-length play performances.',
    image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=600&q=80',
  },
  {
    id: 10, title: 'Environmental Awareness Drive', category: 'Community',
    date: 'September 2024',
    description: 'Tree plantation, neighbourhood clean-up, and waste segregation drives led by our student eco-council.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80',
  },
  {
    id: 11, title: 'Inter-School Debate', category: 'Academic',
    date: 'December 2024',
    description: 'Students from 20 schools competed in English & Hindi debates. Vidya Mandir won Best Team and Best Speaker awards.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80',
  },
  {
    id: 12, title: 'Music Concert — Swar Utsav', category: 'Performing Arts',
    date: 'March 2025',
    description: 'An evening of classical and contemporary music showcasing the vocal and instrumental talent of our students.',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&q=80',
  },
]

const cats = ['All', 'Academic', 'Cultural', 'Sports', 'Festival', 'Technology', 'Wellness', 'Community', 'Performing Arts', 'Patriotic']

export default function Activities() {
  const [activeCat, setActiveCat] = useState('All')

  const filtered = activeCat === 'All'
    ? activities
    : activities.filter((a) => a.category === activeCat)

  return (
    <main className="page-wrapper">
      <div className="page-hero">
        <div className="page-hero-content">
          <h1>Activities & Events</h1>
          <p>Where learning meets celebration — a year full of vibrant student experiences.</p>
          <div className="breadcrumb">Home <span>/</span> Activities</div>
        </div>
      </div>

      <section className="activities-page-section">
        <div className="container">
          {/* Filter Tabs */}
          <div className="act-filter-tabs" data-aos="fade-up">
            {cats.map((cat) => (
              <button
                key={cat}
                className={`act-tab${activeCat === cat ? ' active' : ''}`}
                onClick={() => setActiveCat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="act-page-grid">
            {filtered.map((a, i) => (
              <div
                key={a.id}
                className="act-page-card"
                data-aos="fade-up"
                data-aos-delay={i % 3 * 80}
              >
                <div className="act-page-img-wrap">
                  <img src={a.image} alt={a.title} loading="lazy" />
                  <span className="act-cat-badge">{a.category}</span>
                </div>
                <div className="act-page-body">
                  <p className="act-date">{a.date}</p>
                  <h3 className="act-title">{a.title}</h3>
                  <p className="act-desc">{a.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
