import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGraduationCap } from 'react-icons/fa'
import './Auth.css'

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [showPass, setShowPass] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => { e.preventDefault(); alert('Login functionality coming soon!') }

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
            <h1>Welcome Back!</h1>
            <p>Log in to access your courses, track your progress, and stay connected with your teachers.</p>
            <div className="auth-panel-illustration">
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80"
                alt="Students learning"
              />
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="auth-panel-right">
          <div className="auth-form-box">
            <h2>Sign In</h2>
            <p className="auth-sub">Enter your credentials to continue</p>

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="auth-form-group">
                <label htmlFor="email">Email Address</label>
                <div className="input-wrap">
                  <FaEnvelope className="input-icon" />
                  <input
                    id="email" name="email" type="email"
                    placeholder="you@example.com"
                    required value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="auth-form-group">
                <div className="label-row">
                  <label htmlFor="password">Password</label>
                  <a href="#" className="forgot-link">Forgot password?</a>
                </div>
                <div className="input-wrap">
                  <FaLock className="input-icon" />
                  <input
                    id="password" name="password"
                    type={showPass ? 'text' : 'password'}
                    placeholder="Enter your password"
                    required value={form.password}
                    onChange={handleChange}
                  />
                  <button
                    type="button"
                    className="eye-btn"
                    onClick={() => setShowPass(!showPass)}
                  >
                    {showPass ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me on this device</span>
              </label>

              <button type="submit" className="auth-submit-btn">Sign In</button>
            </form>

            <p className="auth-switch">
              Don't have an account? <Link to="/register">Register here</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
