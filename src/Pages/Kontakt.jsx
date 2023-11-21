import React from 'react'
import './Kontakt.css'

function Kontakt() {
  return (
    <>        
      <div class="contact-form">
          <h1>Contact Us</h1>
          <form name="contact" method="post" data-netlify="true">
              <div class="form-group">
                  <label for="name">Name:</label>
                  <input type="text" id="name" name="name" required></input>
              </div>
              <div class="form-group">
                  <label for="email">Email:</label>
                  <input type="email" id="email" name="email" required></input>
              </div>
              <div class="form-group">
                  <label for="message">Message:</label>
                  <textarea id="message" name="message" required></textarea>
              </div>
              <button type="submit">Send Message</button>
          </form>
      </div>
    </>

  )
}

export default Kontakt