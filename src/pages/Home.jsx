import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import CourseCard from '../components/CourseCard'
import {
  FaBook, FaUsers, FaTrophy, FaChalkboardTeacher,
  FaArrowRight, FaCheckCircle, FaPlay, FaStar
} from 'react-icons/fa'
import './Home.css'

const courses = [
  {
    id: 1,
    name: 'Science & Mathematics',
    category: 'Core Academics',
    badge: 'Popular',
    description: 'Deep dive into Physics, Chemistry, Biology and Advanced Mathematics with expert guidance.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&q=80',
    price: 8500,
    originalPrice: 12000,
    duration: '12 months',
    students: '340 students',
    rating: '4.8',
    highlights: ['NCERT + Board Exam focus', 'Weekly assessments', 'Doubt clearing sessions', 'Mock test series'],
  },
  {
    id: 2,
    name: 'English Communication',
    category: 'Languages',
    badge: 'New',
    description: 'Build fluency, grammar, reading comprehension, and writing skills for academic and daily life.',
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&q=80',
    price: 6000,
    originalPrice: 8500,
    duration: '6 months',
    students: '220 students',
    rating: '4.7',
    highlights: ['Speaking & listening skills', 'Grammar mastery', 'Creative writing', 'Literature analysis'],
  },
  {
    id: 3,
    name: 'Competitive Exam Prep',
    category: 'Entrance Exams',
    badge: 'Top Rated',
    description: 'Comprehensive coaching for JEE, NEET, MHT-CET and other state & national entrance examinations.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80',
    price: 15000,
    originalPrice: 22000,
    duration: '18 months',
    students: '180 students',
    rating: '4.9',
    highlights: ['JEE/NEET aligned syllabus', 'Previous year papers', 'Personal mentorship', '100+ test series'],
  },
  {
    id: 4,
    name: 'Drawing & Fine Arts',
    category: 'Creative Arts',
    badge: 'Creative',
    description: 'Explore pencil sketching, watercolours, oil painting and digital art in structured sessions.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80',
    price: 4500,
    originalPrice: null,
    duration: '4 months',
    students: '95 students',
    rating: '4.6',
    highlights: ['Pencil & charcoal sketching', 'Watercolour techniques', 'Portfolio development', 'Annual art exhibition'],
  },
]

const stats = [
  { icon: <FaUsers />,              value: '3,500+', label: 'Students Enrolled'  },
  { icon: <FaChalkboardTeacher />,  value: '80+',    label: 'Expert Educators'   },
  { icon: <FaBook />,               value: '60+',    label: 'Courses Offered'    },
  { icon: <FaTrophy />,             value: '150+',   label: 'Awards & Honours'   },
]

const activities = [
  { title: 'Annual Science Fair',     image: 'https://images.unsplash.com/photo-1567168544230-f88b01f76ff3?w=500&q=80', desc: 'Innovative student projects showcased to experts' },
  { title: 'Cultural Fest',           image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=500&q=80', desc: 'Dance, music, drama and literary competitions' },
  { title: 'Sports Meet',             image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&q=80', desc: 'Inter-house championships across multiple sports' },
  { title: 'National Olympiad Wins',  image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&q=80', desc: 'Students excelling at national-level competitions' },
]

const testimonials = [
  { name: 'Priya Sharma', grade: 'Class XII Topper', photo: 'https://i.pravatar.cc/80?img=47', text: 'Vidya Mandir gave me the foundation I needed to score 98% in boards and secure admission to IIT Bombay.', stars: 5 },
  { name: 'Arjun Mehta',  grade: 'JEE Advanced Qualifier', photo: 'https://i.pravatar.cc/80?img=12', text: 'The teachers here are absolutely dedicated. Their personalised attention made all the difference for my JEE preparation.', stars: 5 },
  { name: 'Sneha Patil',  grade: 'Class X Student', photo: 'https://i.pravatar.cc/80?img=32', text: 'The co-curricular activities alongside academics shaped me into a well-rounded student. I love coming to school here!', stars: 5 },
]

export default function Home() {
  return (
    <main className="home-page">
      <Banner />

      {/* Stats Strip */}
      <section className="stats-strip">
        <div className="container stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="stat-item" data-aos="fade-up" data-aos-delay={i * 80}>
              <div className="stat-icon">{s.icon}</div>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Courses Preview */}
      <section className="section courses-preview">
        <div className="container">
          <div className="section-heading" data-aos="fade-up">
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">Explore Our Courses</h2>
            <p className="section-subtitle">Carefully crafted programmes for every stage of a student's educational journey.</p>
          </div>
          <div className="courses-grid">
            {courses.map((c, i) => (
              <div key={c.id} data-aos="fade-up" data-aos-delay={i * 80}>
                <CourseCard course={c} expandable />
              </div>
            ))}
          </div>
          <div className="view-all-wrap" data-aos="fade-up">
            <Link to="/courses" className="btn-outline">
              View All Courses <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* About Intro */}
      <section className="section about-intro">
        <div className="container about-intro-grid">
          <div className="about-intro-images" data-aos="fade-right">
            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700&q=80"
              alt="Institute building"
              className="about-img-main"
            />
            <img
              src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&q=80"
              alt="Students learning"
              className="about-img-float"
            />
            <div className="about-badge">
              <strong>38+</strong>
              <span>Years of Excellence</span>
            </div>
          </div>

          <div className="about-intro-text" data-aos="fade-left">
            <span className="section-label">About Us</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              A Legacy of Learning & Achievement
            </h2>
            <p className="about-para">
              Founded in 1985, Vidya Mandir has been a beacon of quality education in Pune.
              We believe every child has unique potential, and our role is to discover and nurture it
              through expert teaching, modern facilities, and a caring environment.
            </p>
            <ul className="about-points">
              {[
                'CBSE & State Board affiliated classes',
                'Ranked #1 institute in Pune for 5 consecutive years',
                'Over 500 students in top engineering & medical colleges',
                'Smart classrooms with interactive digital boards',
              ].map((p) => (
                <li key={p}><FaCheckCircle />{p}</li>
              ))}
            </ul>
            <Link to="/about" className="btn-primary">
              Learn More About Us <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section video-section" id="video">
        <div className="container">
          <div className="section-heading" data-aos="fade-up">
            <span className="section-label">See It Live</span>
            <h2 className="section-title">Inside Vidya Mandir</h2>
            <p className="section-subtitle">Get a glimpse of our classrooms, events, and the vibrant student life at our institute.</p>
          </div>
          <div className="videos-grid">
            {[
              { id: 'dQw4w9WgXcQ', title: 'Campus Tour & Facilities' },
              { id: '3JZ_D3ELwOQ', title: 'Teaching Methodology' },
              { id: 'L_jWHffIx5E', title: 'Student Success Stories' },
            ].map((v, i) => (
              <div key={v.id} className="video-card" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="video-embed-wrap">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <p className="video-label"><FaPlay /> {v.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Preview */}
      <section className="section activities-preview">
        <div className="container">
          <div className="section-heading" data-aos="fade-up">
            <span className="section-label">Life at Vidya Mandir</span>
            <h2 className="section-title">Activities & Events</h2>
            <p className="section-subtitle">We celebrate learning in every form — academic, cultural, and athletic.</p>
          </div>
          <div className="activities-grid">
            {activities.map((a, i) => (
              <div key={a.title} className="activity-card" data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="activity-img-wrap">
                  <img src={a.image} alt={a.title} loading="lazy" />
                  <div className="activity-overlay">
                    <h3>{a.title}</h3>
                    <p>{a.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all-wrap" data-aos="fade-up">
            <Link to="/activities" className="btn-outline">
              See All Activities <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-heading" data-aos="fade-up">
            <span className="section-label">Student Stories</span>
            <h2 className="section-title">What Our Students Say</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={t.name} className="testimonial-card" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="testimonial-stars">
                  {Array(t.stars).fill(0).map((_, j) => <FaStar key={j} />)}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <img src={t.photo} alt={t.name} />
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.grade}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="container cta-inner" data-aos="fade-up">
          <div className="cta-text">
            <h2>Ready to Begin Your Journey?</h2>
            <p>Join thousands of students who have transformed their futures at Vidya Mandir.</p>
          </div>
          <div className="cta-buttons">
            <Link to="/register" className="btn-primary">Enroll Now</Link>
            <Link to="/contact"  className="btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
