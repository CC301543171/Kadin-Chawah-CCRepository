/** 
 * File: Contact.jsx
 * Student: Kadin Chawah
 * StudentID: 301543171
 * Date: 2025-09-10
 * Purpose: Contact info + interactive form that captures input and redirects to Home
 */

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact(){
  const navigate = useNavigate()

  // contextual variable names for readability
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    // capture the entered data (example: store in localStorage or display in console)
    const submission = { firstName, lastName, phone, email, message, date: new Date().toISOString() }
    // temporarily store so you can show it's captured; in production you'd send to backend
    const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]')
    messages.push(submission)
    localStorage.setItem('contactMessages', JSON.stringify(messages))

    // redirect back to Home as required
    navigate('/')
  }

  return (
    <section className="page contact">
      <h2>Contact Me</h2>
      <div className="contact-grid">
        <div className="contact-info">
          <h3>Get in touch</h3>
          <p>Email: <a href="mailto:kchawah@gmail.com">kchawah@gmail.com</a></p>
          <p>Phone: (226) 932-7454</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="row">
            <label>First Name
              <input required value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
            </label>
            <label>Last Name
              <input required value={lastName} onChange={(e)=>setLastName(e.target.value)} />
            </label>
          </div>
          <label>Contact Number
            <input value={phone} onChange={(e)=>setPhone(e.target.value)} />
          </label>
          <label>Email Address
            <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} />
          </label>
          <label>Message
            <textarea required value={message} onChange={(e)=>setMessage(e.target.value)} />
          </label>
          <div className="form-actions">
            <button type="submit" className="btn">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  )
}