// src/components/AboutUsPage.jsx
import React from 'react';
import '../styles/pageStyles.css';

export default function AboutUsPage() {
  return (
    <div className="page-wrapper about-us-page"
         style={{ backgroundImage: 'url(/images/Dilani-7.jpg)' }}>
      <div className="background-blur-overlay"></div>
      <div className="page-content about-us-page px-4 md:px-8 w-full md:w-[60%] lg:w-[40%] mx-auto md:mr-[20%] lg:mr-[30%]">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-center md:text-left">
          About Us
        </h1>
        
        {/* Mobile version */}
        <div className="space-y-4 block md:hidden text-sm">
          <p className="leading-relaxed">
            Viewfinder Film Productions (VFP) Inc. is a Toronto-based marketing and production company 
            championing diverse creators, especially those of South Asian descent, on the world stage. 
            Founded in 2016 by producer and consultant <b>Dilani Rabindran</b>, VFP has represented 
            over 45 films and secured 120+ official festival selections.
          </p>

          <p className="leading-relaxed">
            As a producer, VFP's four short films—Theetu (Untouchability), Small Wishes, Dinner Party, 
            and Little Wings—have earned international acclaim, winning numerous "Best Short" prizes, 
            five Critics Choice Award nominations, and the 71st Indian National Award for Best 
            Cinematography (Non-Feature, for Little Wings).
          </p>

          <p className="leading-relaxed">
            VFP is now working to develop more compelling, globally resonant films.
          </p>
        </div>

        {/* Desktop version */}
        <div className="space-y-4 md:space-y-6 hidden md:block md:text-base lg:text-lg">
          <p className="leading-relaxed">
            Viewfinder Film Productions (VFP) Inc. is a Toronto-based marketing and production company
            dedicated to the international promotion of creators—particularly those of South Asian 
            descent—wherever they are in the world. Founded in 2016 by producer and consultant 
            <b> Dilani Rabindran</b> (formerly operating as Viewfinder Film Consulting), VFP has creatively 
            consulted on and represented over 45 films, securing 120+ official festival selections 
            for films from around the world.
          </p>

          <p className="leading-relaxed">
            Since expanding into production, VFP has produced four internationally acclaimed short films: 
            Theetu (2020), Chinna Chinna Aasai / Small Wishes (2022), Dinner Party (2024), and Little 
            Wings (2022). Collectively, these films have screened at top festivals worldwide, winning 
            numerous "Best Short" awards and earning recognition from prestigious bodies including the 
            71st Indian National Film Awards (Little Wings – Best Cinematography, Non-Feature) and the 
            Critics Choice Awards (five nominations in 2023). Little Wings also became the only Tamil 
            film selected for the Indian Panorama at the 53rd International Film Festival of India, 
            while Small Wishes achieved viral success with over 150K YouTube views.
          </p>

          <p className="leading-relaxed">
            VFP offers end-to-end consulting for the film and television industries—helping writers, 
            directors, and producers navigate international festivals, strengthen scripts for global 
            markets, and attract financing. Beyond consulting and production, VFP has curated sold-out 
            live events in Toronto and Montreal showcasing South Asian talent. The company is now 
            developing new film and TV projects for international platforms, continuing its mission to 
            tell globally resonant stories from uniquely diverse perspectives.
          </p>
        </div>
      </div>
    </div>
  );
}