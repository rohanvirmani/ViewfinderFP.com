// src/components/AboutUsPage.jsx
import React from 'react';
import '../styles/pageStyles.css';

export default function AboutUsPage() {
  return (
    <div className="page-wrapper about-us-page"
         style={{ backgroundImage: 'url(/images/Dilani-7.jpg)' }}>
      <div className="background-blur-overlay"></div>
      <div className="page-content about-us-page">
        <h1>About Us</h1>
        <p>Viewfinder Film Productions (VFP) Inc. is a Toronto-based marketing and production company dedicated to the international promotion of creators—particularly those of South Asian descent—wherever they are in the world. Founded in 2016 by producer and consultant Dilani Rabindran (formerly operating as Viewfinder Film Consulting), VFP has creatively consulted on and represented over 45 films, securing 120+ official festival selections, multiple Indian National Awards, and global streaming placements on platforms such as Netflix and Amazon Prime. </p>

        <p>Since expanding into production, VFP has produced four internationally acclaimed short films: Theetu (2020), Chinna Chinna Aasai / Small Wishes (2022), Dinner Party (2024), and Little Wings (2022). Collectively, these films have screened at top festivals worldwide, winning numerous “Best Short” awards and earning recognition from prestigious bodies including the 71st Indian National Film Awards (Little Wings – Best Cinematography, Non-Feature) and the Critics Choice Awards (five nominations in 2023). Little Wings also became the only Tamil film selected for the Indian Panorama at the 53rd International Film Festival of India, while Small Wishes achieved viral success with over 150K YouTube views. </p>

        <p>VFP offers end-to-end consulting for the film and television industries—helping writers, directors, and producers navigate international festivals, strengthen scripts for global markets, and attract financing. Beyond consulting and production, VFP has curated sold-out live events in Toronto and Montreal showcasing South Asian talent. The company is now developing new film and TV projects for international platforms, continuing its mission to tell globally resonant stories from uniquely diverse perspectives.</p>
      </div>
    </div>
  );
}

//move text to left side of the page
//transparent background for the text grey or something