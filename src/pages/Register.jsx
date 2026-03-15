import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGraduationCap, FaPhone } from 'react-icons/fa'
import './Auth.css'

export default function Register() {
  const [form, setForm]       = useState({ name: '', email: '', phone: '', password: '', confirm: '' })
  const [showPass, setShowPass]    = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [errors, setErrors]   = useState({})

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const validate = () => {
    const e = {}
    if (!form.name.trim())             e.name    = 'Full name is required.'
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email.'
    if (form.password.length < 6)      e.password = 'Password must be at least 6 characters.'
    if (form.password !== form.confirm) e.confirm = 'Passwords do not match.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) alert('Registration successful! (UI demo only)')
  }

  return (
    <main className="auth-page">
      <div className="auth-split">
        {/* Left Panel */}
        <div className="auth-panel-left">
          <div className="auth-panel-content">
            <div className="auth-logo">
              <div className="auth-logo-icon"><FaGraduationCap /></div>
              <span>Vidya Mandir</span>
            </div>
            <h1>Join Our Community</h1>
            <p>Register today and become part of a 3,500+ strong family of learners, achievers, and future leaders.</p>
            <ul className="auth-perks">
              {[
                'Access to 60+ curated courses',
                'Personalised learning dashboard',
                'Live doubt-clearing sessions',
                'Track your progress & scores',
              ].map((p) => <li key={p}>✦ {p}</li>)}
            </ul>
            <div className="auth-panel-illustration">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80"
                alt="Students at campus"
              />
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="auth-panel-right">
          <div className="auth-form-box">
            <h2>Create Account</h2>
            <p className="auth-sub">Fill in the details below to get started</p>

            <form onSubmit={handleSubmit} className="auth-form">
              {/* Name */}
              <div className="auth-form-group">
                <label htmlFor="name">Full Name</label>
                <div className="input-wrap">
                  <FaUser className="input-icon" />
                  <input id="name" name="name" type="text" placeholder="Eg. Priya Sharma"
                    value={form.name} onChange={handleChange} />
                </div>
                {errors.name && <span className="field-error">{errors.name}</span>}
              </div>

              {/* Email */}
              <div className="auth-form-group">
                <label htmlFor="email">Email Address</label>
                <div className="input-wrap">
                  <FaEnvelope className="input-icon" />
                  <input id="email" name="email" type="email" placeholder="you@example.com"
                    value={form.email} onChange={handleChange} />
                </div>
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>

              {/* Phone */}
              <div className="auth-form-group">
                <label htmlFor="phone">Phone Number <span className="optional">(optional)</span></label>
                <div className="input-wrap">
                  <FaPhone className="input-icon" />
                  <input id="phone" name="phone" type="tel" placeholder="+91 98765 43210"
                    value={form.phone} onChange={handleChange} />
                </div>
              </div>

              {/* Password */}
              <div className="auth-form-group">
                <label htmlFor="password">Password</label>
                <div className="input-wrap">
                  <FaLock className="input-icon" />
                  <input id="password" name="password"
                    type={showPass ? 'text' : 'password'}
                    placeholder="Min. 6 characters"
                    value={form.password} onChange={handleChange} />
                  <button type="button" className="eye-btn" onClick={() => setShowPass(!showPass)}>
                    {showPass ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.password && <span className="field-error">{errors.password}</span>}
              </div>

              {/* Confirm Password */}
              <div className="auth-form-group">
                <label htmlFor="confirm">Confirm Password</label>
                <div className="input-wrap">
                  <FaLock className="input-icon" />
                  <input id="confirm" name="confirm"
                    type={showConfirm ? 'text' : 'password'}
                    placeholder="Re-enter your password"
                    value={form.confirm} onChange={handleChange} />
                  <button type="button" className="eye-btn" onClick={() => setShowConfirm(!showConfirm)}>
                    {showConfirm ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                {errors.confirm && <span className="field-error">{errors.confirm}</span>}
              </div>

              <label className="remember-me">
                <input type="checkbox" required />
                <span>I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></span>
              </label>

              <button type="submit" className="auth-submit-btn">Create Account</button>
            </form>

            <p className="auth-switch">
              Already have an account? <Link to="/login">Sign in here</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
