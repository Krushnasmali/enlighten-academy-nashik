import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Activities from './pages/Activities'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'

export default function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 80 })
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/courses"    element={<Courses />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/about"      element={<About />} />
        <Route path="/contact"    element={<Contact />} />
        <Route path="/login"      element={<Login />} />
        <Route path="/register"   element={<Register />} />
      </Routes>
      <Footer />
    </>
  )
}
