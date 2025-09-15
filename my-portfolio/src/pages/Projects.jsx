/** 
 * File: Projects.jsx
 * Student: Kadin Chawah
 * StudentID: 301543171
 * Date: 2025-09-10
 * Purpose: A page showing at least 3 projects
 */

import React from 'react'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const projects = [
    {
      img: 'https://picsum.photos/400/250?random=1',
      title: 'Project One',
      role: 'Frontend Developer',
      description: 'Built a responsive SPA using React, focusing on accessibility and animations',
      link: '#'
    },
    {
      img: 'https://picsum.photos/400/250?random=2',
      title: 'Project Two',
      role: 'Full-stack Developer',
      description: 'Developed REST API + React client; integrated auth and deployment pipeline',
      link: '#'
    },
    {
      img: 'https://picsum.photos/400/250?random=3',
      title: 'Project Three',
      role: 'Mobile Prototype',
      description: 'Created a React Native prototype demonstrating real-time sync features',
      link: '#'
    },
  ]

  return (
    <section className="page projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
      </div>
    </section>
  )
}