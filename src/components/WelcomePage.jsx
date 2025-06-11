// src/components/WelcomePage.jsx
import React from 'react';
import '../styles/pageStyles.css'; // For specific page styling

export default function WelcomePage() {
  return (
    <div className="page-wrapper welcome-page"
         style={{ backgroundImage: 'url(/images/welcome-bg.jpg)' }}> {/* Use /images for public folder */}
      <div className="background-blur-overlay"></div> {/* For the blur effect */}
      <div className="page-content">
        <h1>Welcome to Our Production Company</h1>
        <p>Crafting cinematic stories that inspire and captivate.</p>
        {/* Potentially a "View Projects" button */}
      </div>
    </div>
  );
}