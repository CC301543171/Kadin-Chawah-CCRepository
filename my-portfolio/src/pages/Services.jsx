/** 
 * File: Services.jsx
 * Student: Kadin Chawah
 * StudentID: 301543171
 * Date: 2025-09-09
 * Purpose: A page showing the list of services offered
 */

import React from 'react'

export default function Services(){
  const services = [
    { title: 'Web Development', desc: 'React/Vite SPAs, responsive design, accessibility' },
    { title: 'Full-stack Development', desc: 'Node.js APIs, databases, authentication' },
    { title: 'Consulting & Mentorship', desc: 'Code reviews, architecture advice, interview prep' },
  ]

  return (
    <section className="page services">
      <h2>Services</h2>
      <div className="services-grid">
        {services.map((s, i) => (
          <div className="service-card" key={i}>
            <div className="service-icon" aria-hidden>🔧</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}