import React, { useState } from 'react'
import CourseCard from '../components/CourseCard'
import { FaSearch } from 'react-icons/fa'
import './Courses.css'

const allCourses = [
  {
    id: 1, name: 'Science & Mathematics', category: 'Core Academics', badge: 'Popular',
    description: 'Deep dive into Physics, Chemistry, Biology and Advanced Mathematics with expert guidance and board-exam focus.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80',
    price: 8500, originalPrice: 12000, duration: '12 months', students: '340 students', rating: '4.8',
    highlights: ['NCERT + Board Exam focus', 'Weekly assessments', 'Doubt clearing sessions', 'Mock test series'],
  },
  {
    id: 2, name: 'English Communication', category: 'Languages', badge: 'New',
    description: 'Build fluency, grammar, reading comprehension, and writing skills for academic and everyday life.',
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&q=80',
    price: 6000, originalPrice: 8500, duration: '6 months', students: '220 students', rating: '4.7',
    highlights: ['Speaking & listening skills', 'Grammar mastery', 'Creative writing', 'Literature analysis'],
  },
  {
    id: 3, name: 'Competitive Exam Prep', category: 'Entrance Exams', badge: 'Top Rated',
    description: 'Comprehensive coaching for JEE, NEET, MHT-CET and other state & national entrance exams.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80',
    price: 15000, originalPrice: 22000, duration: '18 months', students: '180 students', rating: '4.9',
    highlights: ['JEE/NEET aligned syllabus', 'Previous year papers', 'Personal mentorship', '100+ test series'],
  },
  {
    id: 4, name: 'Drawing & Fine Arts', category: 'Creative Arts', badge: 'Creative',
    description: 'Explore pencil sketching, watercolours, oil painting and digital art in structured sessions.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80',
    price: 4500, originalPrice: null, duration: '4 months', students: '95 students', rating: '4.6',
    highlights: ['Pencil & charcoal sketching', 'Watercolour techniques', 'Portfolio development', 'Annual art exhibition'],
  },
  {
    id: 5, name: 'Computer Science & Coding', category: 'Technology', badge: 'In Demand',
    description: 'From block coding to Python, web development, and data structures — a complete tech curriculum.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80',
    price: 9500, originalPrice: 13000, duration: '10 months', students: '260 students', rating: '4.8',
    highlights: ['Python programming', 'Web development basics', 'Data structures', 'Mini projects & hackathons'],
  },
  {
    id: 6, name: 'Music & Instruments', category: 'Performing Arts', badge: 'Fun',
    description: 'Vocal training, keyboard, tabla, and guitar lessons from experienced performing artists.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80',
    price: 5500, originalPrice: null, duration: '6 months', students: '75 students', rating: '4.7',
    highlights: ['Vocal training', 'Keyboard & guitar', 'Music theory', 'Annual performance concert'],
  },
  {
    id: 7, name: 'Sports & Physical Education', category: 'Sports', badge: 'Active',
    description: 'Cricket, badminton, football, athletics and yoga — a comprehensive sports development programme.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80',
    price: 3500, originalPrice: null, duration: '3 months', students: '150 students', rating: '4.5',
    highlights: ['Multiple sports coaching', 'Fitness & conditioning', 'Yoga & meditation', 'Inter-school tournaments'],
  },
  {
    id: 8, name: 'Social Studies & History', category: 'Humanities', badge: 'Classic',
    description: 'Engage with history, geography, civics and economics through interactive, story-led lessons.',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80',
    price: 5000, originalPrice: 7000, duration: '8 months', students: '120 students', rating: '4.6',
    highlights: ['Map work & geography', 'History timelines', 'Civics & current affairs', 'Project-based learning'],
  },
]

const categories = ['All', 'Core Academics', 'Languages', 'Entrance Exams', 'Creative Arts', 'Technology', 'Performing Arts', 'Sports', 'Humanities']

export default function Courses() {
  const [search, setSearch] = useState('')
  const [activeCat, setActiveCat] = useState('All')

  const filtered = allCourses.filter((c) => {
    const matchCat  = activeCat === 'All' || c.category === activeCat
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
                        c.category.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <main className="page-wrapper">
      <div className="page-hero">
        <div className="page-hero-content">
          <h1>Our Courses</h1>
          <p>Discover a diverse range of programmes designed to inspire and challenge every learner.</p>
          <div className="breadcrumb">Home <span>/</span> Courses</div>
        </div>
      </div>

      <section className="courses-page-section">
        <div className="container">
          {/* Filters */}
          <div className="courses-filters" data-aos="fade-up">
            <div className="search-wrap">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search courses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-input"
              />
            </div>
            <div className="cat-pills">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`cat-pill${activeCat === cat ? ' active' : ''}`}
                  onClick={() => setActiveCat(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <p className="results-count" data-aos="fade-up">
            Showing <strong>{filtered.length}</strong> course{filtered.length !== 1 ? 's' : ''}
          </p>

          <div className="courses-page-grid">
            {filtered.length > 0
              ? filtered.map((c, i) => (
                  <div key={c.id} data-aos="fade-up" data-aos-delay={i * 60}>
                    <CourseCard course={c} expandable />
                  </div>
                ))
              : (
                  <div className="no-results">
                    <p>No courses match your search. Try a different keyword or category.</p>
                  </div>
                )
            }
          </div>
        </div>
      </section>
    </main>
  )
}
