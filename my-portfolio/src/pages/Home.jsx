/** 
 * File: Home.jsx
 * Student: Kadin Chawah
 * StudentID: 301543171
 * Date: 2025-09-11
 * Purpose: Home page with welcome message and CTA
 */

import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <section className="page home">
      <div className="hero">
        <h1>Welcome, visitor. My name is Kadin</h1>
        <p className="mission">I build reliable, accessible web apps that solve real problems. My mission is to  deliver clean code & delightful UX.</p>
        <div className="cta-row">
          <Link to="/about" className="btn">About Me</Link>
          <Link to="/projects" className="btn secondary">See Projects</Link>
        </div>
      </div>
    </section>
  )
}