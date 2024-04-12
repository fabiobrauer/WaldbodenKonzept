import React from 'react'
import './Kontakt.css'

function Kontakt() {
  return (
  <div>
        <section>
        <div className='container'>
            <div className='row'>  
                <div className="col">
                    <img src="PHOTO-2022-06-08-17-59-56.JPG" alt="agroforst" width={"500px"}/>
                </div>
                <div className="col">
                  <h1>Schreiben sie mich gerne an</h1>
                </div>
            </div>      
        </div>
    </section>
    <form name="contact" method="POST" data-netlify="true" nf_debug="true">
      <input type="hidden" name="form-name" value="contact" />
      <p>
          <label>Your Name: <input type="text" name="name" /></label>
      </p>
      <p>
          <label>Your Email: <input type="email" name="email" /></label>
      </p>
      <p>
          <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
          <button type="submit">Send</button>
      </p>
    </form>
    </div>
  )
}

export default Kontakt
