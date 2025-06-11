// src/components/AboutUsPage.jsx
import React from 'react';
import '../styles/pageStyles.css';

export default function AboutUsPage() {
  return (
    <div className="page-wrapper about-us-page"
         style={{ backgroundImage: 'url(/images/about-bg.jpg)' }}>
      <div className="background-blur-overlay"></div>
      <div className="page-content">
        <h2>About Us</h2>
        <p>We are a passionate team dedicated to bringing compelling narratives to life on screen.</p>
        <p>Our work spans across various genres, from gripping dramas to insightful documentaries.</p>
      </div>
    </div>
  );
}