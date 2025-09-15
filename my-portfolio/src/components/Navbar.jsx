/** 
 * File: Navbar.jsx
 * Student: Kadin Chawah
 * StudentID: 301543171
 * Date: 2025-09-12
 * Purpose: Navigation bar with custom logo
 */

import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

export default function Navbar(){
  return (
    <nav className="nav">
      <div className="logo">
        {/* the logo will but put here. initials will be replaced as needed*/}
        <svg width="48" height="48" viewBox="0 0 100 100" aria-labelledby="logoTitle" role="img">
          <title id="logoTitle">Logo - K.C</title>
          <polygon points="20,20 80,20 80,80 20,80" fill="#4f46e5" />
          <text x="50" y="62" fontSize="36" fontWeight="700" textAnchor="middle" fill="#fff" fontFamily="Arial">KC</text>
        </svg>
        <span className="brand-text">Kadin Chawah</span>
      </div>

      <div className="nav-links">
        <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink>
        <NavLink to="/projects" className={({isActive}) => isActive ? 'active' : ''}>Projects</NavLink>
        <NavLink to="/services" className={({isActive}) => isActive ? 'active' : ''}>Services</NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>Contact</NavLink>
      </div>
    </nav>
  )
}