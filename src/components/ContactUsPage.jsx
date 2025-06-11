// src/components/ContactUsPage.jsx
import React from 'react';
import '../styles/pageStyles.css';

export default function ContactUsPage() {
  return (
    <div className="page-wrapper contact-page">
      <div className="page-content">
        <h2>Contact Us</h2>
        <p>Have a project in mind or just want to say hello?</p>
        <p>Email: <a href="mailto:info@yourfilmcompany.com">info@yourfilmcompany.com</a></p>
        <p>Phone: +1 (123) 456-7890</p>
        <p>Address: 123 Film Studio Rd, Toronto, ON M1A 2B3</p>
        {/* Add a contact form here if needed */}
      </div>
    </div>
  );
}