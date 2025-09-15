/** 
 * File: App.jsx
 * Student: Kadin Chawah
 * StudentID: 301543171
 * Date: 2025-09-13
 * Purpose: Main app routing and layout
 */

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Contact from './pages/Contact'

export default function App(){
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
      <footer className="site-footer">
        © {new Date().getFullYear()} Kadin Chawah — Portfolio
      </footer>
    </div>
  )
}