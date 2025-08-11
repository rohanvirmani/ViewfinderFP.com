// src/components/WelcomePage.jsx
import React from 'react';
import '../styles/pageStyles.css'; // For specific page styling

export default function WelcomePage() {
  return (
    <div className="page-wrapper welcome-page">
       <video className="background-video" autoPlay loop muted>
        <source src="/videos/VFP Home Page - Loop High quality.mp4" type="video/mp4" />
      </video>
      <div className="background-blur-overlay"></div> {/* For the blur effect */}
      <div className="page-content welcome-page">
        <h1>Viewfinder Film Productions</h1>
        <p>Viewfinder Film Productions (VFP) Inc. is a marketing & production company dedicated to promoting the work of South Asian creators around the world.</p>
        {/* Potentially a "View Projects" button */}
      </div>
    </div>
  );
}