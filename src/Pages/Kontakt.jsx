import React from 'react'
import './Kontakt.css'

function Kontakt() {
  return (
    <>
      <h1>Kontaktieren sie mich</h1>       
      <div class="contact-form">
          <form name="contact" netlify>
            <p class="form-group">
              <label>Name <input type="text" name="name" /></label>
            </p>
            <p class="form-group">
              <label>Email <input type="email" name="email" /></label>
            </p>
            <p class="form-group">
              <label>Message: <textarea type="message" name="message" /></label>
            </p>
            <p >
              <button type="submit">Send</button>
            </p>
          </form>
      </div>
    </>

  )
}

export default Kontakt