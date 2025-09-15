/** 
 * File: ProjectCard.jsx
 * Student: Kadin Chawah
 * StudentID: 301543171
 * Date: 2025-09-10
 * Purpose: Reusable project card showing image, title, description, role & outcome
 */

import React from 'react'

export default function ProjectCard({ img, title, role, description, link }) {
  return (
    <article className="project-card">
      <img src={img} alt={`${title} screenshot`} className="project-img"/>
      <div className="project-body">
        <h3>{title}</h3>
        <p className="project-role"><strong>Role:</strong> {role}</p>
        <p>{description}</p>
        {link && <a href={link} target="_blank" rel="noreferrer" className="project-link">View Project</a>}
      </div>
    </article>
  )
}