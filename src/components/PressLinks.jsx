// src/components/AboutUsPage.jsx
import React from 'react';
import '../styles/pageStyles.css';

export default function PressLinksPage() {
  return (
    <div className="page-wrapper"
         style={{ backgroundImage: 'url(/images/Dilani-7.jpg)' }}>
      <div className="background-blur-overlay"></div>
      <div className="page-content px-4 md:px-8 w-full md:w-[60%] lg:w-[40%] mx-auto md:mr-[20%] lg:mr-[30%]">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-center md:text-left">
          Press Links
        </h1>

        <div className="space-y-4 md:space-y-6  md:text-base lg:text-lg">
        
          <ul class="list-disc pl-8 space-y-2 text-base md:text-lg text-left"> 
         <li>
          <a href="https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2151537">
          'Little Wings' wins 71st National Award for Best Cinematography, Non-Feature Films" 
          </a>
          </li>

          <li><a href ="https://timesofindia.indiatimes.com/entertainment/tamil/movies/news/unbelievable-but-validating-cinematographer-meenakshi-on-her-national-award-win/articleshow/123317735.cms">'Little Wings' Cinematographer Meenakshi on her National Award win - Times of India</a> </li>

          <li><a href ="https://northeastfilmjournal.com/film-review-little-wings-2022-the-cruel-and-amiable-quirks-of-fate">
          'Little Wings': "The cruel and amiable quirks of fate" 
          </a>
          </li>

          <li><a href='https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=1878391'>‘Little Wings'’ is a distinctive take on how patriarchy subdues women</a></li>

          <li><a href ='https://filmthreat.com/reviews/little-wings/'>'Little Wings' Review by Film Threat Movie Guide </a></li>

          <li><a href='https://www.youtube.com/watch?v=n_RvwZaY9y4'>'Little Wings' wins Best Film at Shades Film Festival</a></li>

          <li><a href='https://open.spotify.com/episode/6jCfWsmY5NQVNDaYnMkkA2?si=T_QONr9fRLuGk52qTNpjWQ'>The Honey Lemon Podcast - feat Dilani Rabindran</a></li>
          </ul>
      </div>
      </div>
    </div>
  );
}