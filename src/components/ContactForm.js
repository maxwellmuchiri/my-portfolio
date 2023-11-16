
// src/components/ContactForm.js

import React from 'react';
import '../App.css';

const ContactForm = () => {
  return (
    <div className="ContactForm">
      <h2>Contact Me</h2>
      {/* Add your contact form component here */}
      <form>
        <label>Name:</label>
        <input type="text" />
        <label>Email:</label>
        <input type="email" />
        <label>Message:</label>
        <textarea></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
