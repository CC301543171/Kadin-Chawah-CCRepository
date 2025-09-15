/** 
 * File: About.jsx
 * Student: Kadin Chawah
 * StudentID: 301543171
 * Date: 2025-09-10
 * Purpose: About Me page - name, headshot, short biography and resume link
 */

import React from 'react'
import headshot from '../assets/headshot.jpg'

export default function About(){
  return (
    <section className="page about">
      <h2>About Me</h2>
      <div className="about-grid">
        <img src={headshot} alt="Headshot of Kadin" className="headshot" />
        <div className="about-text">
          <h3>Kadin Chawah</h3>
          <p>I am a Computer Programmer specializing in building dynamic, user-friendly applications with JavaScript, C#, Python, React, Node.js, and SQL. With experience in both front-end and back-end development, I enjoy solving complex problems, optimizing performance, and creating efficient solutions. I bring strong teamwork, adaptability, and a commitment to clean, maintainable code—skills I’m excited to apply in professional software development roles.</p>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn">Download Resume (PDF)</a>
        </div>
      </div>
    </section>
  )
}