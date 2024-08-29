import React from 'react'
import "./GetInTouch.css"

const GetInTouch = () => {
  return (
    <div class="contact-form-container" id='contact'>
  <h2>Get in touch</h2>
  <form>
    <div class="form-group">
      <input type="text" name="first-name" placeholder="Name" required />
      <input type="text" name="last-name" placeholder="Last name" required />
    </div>
    <div class="form-group">
      <input type="email" name="email" placeholder="Email" required />
      <input type="tel" name="phone-number" placeholder="Phone number" required />
    </div>
    <div class="form-group">
      <textarea name="message" placeholder="Message" required></textarea>
    </div>
    <button type="submit" class="submit-button">Submit now</button>
  </form>
</div>
  )
}

export default GetInTouch
