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
        <div className="space-y-4 block md:hidden text-sm font-bebas">
          <p className="leading-relaxed">
            Viewfinder Film Productions (VFP) Inc. is a Toronto-based marketing and production company 
            championing diverse creators, especially those of South Asian descent, on the world stage. 
            Founded in 2016 by producer and consultant <b>Dilani Rabindran</b>, VFP has represented 
            over 45 films and secured 120+ official festival selections.
          </p>

          <p className="leading-relaxed">
            As a producer, VFP's four short films— Untouchability, Small Wishes, Dinner Party, 
            and Little Wings—have earned international acclaim, winning numerous awards, 
            five Critics Choice Award nominations, and a 71st Indian National Award.
          </p>

          <p className="leading-relaxed">
            VFP is now developing more compelling, globally resonant films.
          </p>
        </div>

        {/* Desktop version */}
        <div className="space-y-4 md:space-y-6 hidden md:block md:text-base lg:text-lg">
          <p className="leading-relaxed">
            Viewfinder Film Productions (VFP) Inc. is a Toronto-based marketing and production company
            dedicated to the international promotion of creators—particularly those of South Asian 
            descent—wherever they are in the world. Founded in 2016 by producer and consultant 
            <b> Dilani Rabindran</b>, VFP (formerly operating as Viewfinder Film Consulting) has creatively 
            consulted on and represented over 45 films, securing 120+ official festival selections 
            for films from around the world.
          </p>

          <p className="leading-relaxed">
            Since expanding into production, VFP has produced <b>four internationally acclaimed short films: </b> 
            Untouchability (Theetu), Small Wishes, Dinner Party, and Little 
            Wings. Collectively, these films have screened at top festivals worldwide, winning 
            numerous "Best Short" awards and earning recognition from prestigious bodies including the 
            71st Indian National Film Awards (Little Wings – Best Cinematography, Non-Feature) and 5 nominations 
            from the Indian Critics Choice Awards. Little Wings also became the only Tamil 
            film selected for the Indian Panorama at the 53rd International Film Festival of India, 
            while Small Wishes has achieved viral success with over 150K YouTube views.
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