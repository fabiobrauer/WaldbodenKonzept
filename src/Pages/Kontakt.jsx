import React from 'react'
import './Kontakt.css'

function Kontakt() {
  return (
    <>
      <h1>Kontaktieren Sie mich</h1>       
      <div className="contact-form">
          <form name="contact" data-netlify="true">
            <p className="form-group">
              <label>Name <input type="text" name="name" /></label>
            </p>
            <p className="form-group">
              <label>Email <input type="email" name="email" /></label>
            </p>
            <p className="form-group">
              <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
      </div>
    </>
  )
}

export default Kontakt
