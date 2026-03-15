import React from 'react'
import { FaHeart, FaLightbulb, FaStar, FaUsers, FaGraduationCap, FaCheckCircle } from 'react-icons/fa'
import './About.css'

const team = [
  { name: 'Dr. Anita Kulkarni',    role: 'Principal & Founder',       photo: 'https://i.pravatar.cc/200?img=47', subject: 'Ph.D in Education, 30+ years experience' },
  { name: 'Prof. Rajesh Sharma',   role: 'Head of Sciences',          photo: 'https://i.pravatar.cc/200?img=12', subject: 'M.Sc Physics, IIT Bombay alumnus' },
  { name: 'Ms. Sneha Desai',       role: 'Head of Languages',         photo: 'https://i.pravatar.cc/200?img=32', subject: 'M.A. English Literature, 18 years experience' },
  { name: 'Mr. Vivek Patil',       role: 'Sports Director',           photo: 'https://i.pravatar.cc/200?img=15', subject: 'B.P.Ed, State-level cricket coach' },
  { name: 'Ms. Kavita Joshi',      role: 'Head of Arts & Music',      photo: 'https://i.pravatar.cc/200?img=23', subject: 'Diploma in Fine Arts, Hindustani vocal artist' },
  { name: 'Mr. Arjun Mehta',       role: 'Technology Coordinator',    photo: 'https://i.pravatar.cc/200?img=11', subject: 'M.Tech Computer Science, EdTech specialist' },
]

const milestones = [
  { year: '1985', event: 'Vidya Mandir founded by Dr. Anita Kulkarni with 40 students' },
  { year: '1995', event: 'First batch achieves 100% board exam pass rate' },
  { year: '2002', event: 'Campus expansion — new science labs and sports complex' },
  { year: '2010', event: 'Recognised as Best Educational Institute in Pune by State Govt.' },
  { year: '2016', event: 'Digital classrooms and Smart Learning initiative launched' },
  { year: '2020', event: 'Seamless transition to hybrid learning during global pandemic' },
  { year: '2024', event: 'Ranked #1 in Maharashtra for student satisfaction and results' },
]

export default function About() {
  return (
    <main className="page-wrapper">
      <div className="page-hero">
        <div className="page-hero-content">
          <h1>About Vidya Mandir</h1>
          <p>A legacy of learning, excellence, and values since 1985.</p>
          <div className="breadcrumb">Home <span>/</span> About</div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="about-section">
        <div className="container about-intro-wrap">
          <div className="about-left" data-aos="fade-right">
            <span className="section-label">Our Story</span>
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Building Futures, One Student at a Time
            </h2>
            <p>
              Vidya Mandir was born from a simple belief: every child deserves access to
              world-class education in a nurturing environment. Founded in 1985 by Dr. Anita
              Kulkarni in a single-room classroom with 40 students, we have grown into one of
              Maharashtra's most respected educational institutions, serving over 3,500 students
              across all grade levels.
            </p>
            <p>
              Our philosophy is rooted in the ancient Indian tradition of "Gurukul" — where
              teachers and students co-create knowledge — combined with the rigour of modern
              pedagogy and the tools of the 21st century.
            </p>
            <ul className="about-checks">
              {[
                'CBSE & Maharashtra State Board affiliated',
                'ISO 9001:2015 certified institution',
                'Ranked #1 in Pune for 5 consecutive years',
                '500+ alumni in IITs, NITs, and AIIMS',
              ].map((p) => (
                <li key={p}><FaCheckCircle />{p}</li>
              ))}
            </ul>
          </div>
          <div className="about-right" data-aos="fade-left">
            <div className="about-img-stack">
              <img src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700&q=80" alt="Institute" className="about-img-big" />
              <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&q=80" alt="Classroom" className="about-img-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="mvv-section">
        <div className="container">
          <div className="section-heading" data-aos="fade-up">
            <span className="section-label">What Drives Us</span>
            <h2 className="section-title">Mission, Vision & Values</h2>
          </div>
          <div className="mvv-grid">
            {[
              {
                icon: <FaHeart />, title: 'Our Mission',
                text: 'To provide every student with an education that is academically rigorous, personally enriching, and ethically grounded — preparing them not just for exams, but for life.',
              },
              {
                icon: <FaLightbulb />, title: 'Our Vision',
                text: 'To be India\'s most student-centric educational institution — where curiosity is celebrated, potential is limitless, and every learner feels seen, supported, and inspired.',
              },
              {
                icon: <FaStar />, title: 'Our Values',
                text: 'Integrity in all we do. Empathy in how we teach. Excellence in what we achieve. Inclusivity in who we serve. These values guide every decision at Vidya Mandir.',
              },
            ].map((m, i) => (
              <div key={m.title} className="mvv-card" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="mvv-icon">{m.icon}</div>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="methodology-section">
        <div className="container">
          <div className="methodology-grid">
            <div className="method-text" data-aos="fade-right">
              <span className="section-label">How We Teach</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>
                A Methodology Built Around Each Child
              </h2>
              {[
                { title: 'Concept-First Learning', desc: 'We build deep conceptual understanding before rote memorisation, ensuring students can apply knowledge in new contexts.' },
                { title: 'Personalised Attention',  desc: 'Small batch sizes (max 25 per class) allow teachers to identify each student\'s learning style and pace.' },
                { title: 'Technology Integration',  desc: 'Smart boards, digital labs, and AI-powered practice platforms complement traditional teaching.' },
                { title: 'Regular Assessment',       desc: 'Frequent formative assessments help us identify gaps early and course-correct before they compound.' },
              ].map((m, i) => (
                <div key={m.title} className="method-point" data-aos="fade-up" data-aos-delay={i * 80}>
                  <div className="method-num">{String(i + 1).padStart(2, '0')}</div>
                  <div>
                    <h4>{m.title}</h4>
                    <p>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="method-image" data-aos="fade-left">
              <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=700&q=80" alt="Teaching methodology" />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-heading" data-aos="fade-up">
            <span className="section-label">Our Journey</span>
            <h2 className="section-title">Key Milestones</h2>
          </div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className={`timeline-item${i % 2 === 0 ? ' left' : ' right'}`}
                data-aos={i % 2 === 0 ? 'fade-right' : 'fade-left'}
              >
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <span className="timeline-year">{m.year}</span>
                  <p>{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team-section">
        <div className="container">
          <div className="section-heading" data-aos="fade-up">
            <span className="section-label">The People Behind It</span>
            <h2 className="section-title">Meet Our Leadership Team</h2>
            <p className="section-subtitle">Passionate educators dedicated to bringing out the best in every student.</p>
          </div>
          <div className="team-grid">
            {team.map((m, i) => (
              <div key={m.name} className="team-card" data-aos="fade-up" data-aos-delay={i * 80}>
                <img src={m.photo} alt={m.name} className="team-photo" />
                <h3>{m.name}</h3>
                <span className="team-role">{m.role}</span>
                <p className="team-subject">{m.subject}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
