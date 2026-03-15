import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaClock, FaUsers, FaStar, FaArrowRight, FaRupeeSign } from 'react-icons/fa'
import './CourseCard.css'

export default function CourseCard({ course, expandable = false }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`course-card${expandable && hovered ? ' expanded' : ''}`}
      onMouseEnter={() => expandable && setHovered(true)}
      onMouseLeave={() => expandable && setHovered(false)}
    >
      <div className="course-card-img-wrap">
        <img src={course.image} alt={course.name} loading="lazy" />
        <span className="course-badge">{course.badge}</span>
      </div>

      <div className="course-card-body">
        <p className="course-category">{course.category}</p>
        <h3 className="course-name">{course.name}</h3>
        <p className="course-desc">{course.description}</p>

        <div className="course-meta">
          <span><FaClock /> {course.duration}</span>
          <span><FaUsers /> {course.students}</span>
          <span><FaStar className="star-icon" /> {course.rating}</span>
        </div>

        <div className="course-footer">
          <div className="course-price">
            <FaRupeeSign />
            <span className="price-amount">{course.price.toLocaleString('en-IN')}</span>
            {course.originalPrice && (
              <span className="price-original">₹{course.originalPrice.toLocaleString('en-IN')}</span>
            )}
          </div>
          <Link to="/courses" className="enroll-btn">
            Enroll <FaArrowRight />
          </Link>
        </div>

        {expandable && (
          <div className={`course-expanded-details${hovered ? ' show' : ''}`}>
            <h4>What You'll Learn</h4>
            <ul>
              {(course.highlights || []).map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
