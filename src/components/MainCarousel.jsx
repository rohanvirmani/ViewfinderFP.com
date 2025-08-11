// src/components/MainCarousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/modules'; // Add Autoplay if desired

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; // For fade effect

// Import your page components (these will be simple React components)
import WelcomePage from './WelcomePage';
import ProjectsPage from './ProjectsPage'; // This will contain the nested Swiper
import AboutUsPage from './AboutUsPage';
import ContactUsPage from './ContactUsPage';

// You might need some global CSS for full screen or ensure it's loaded in Astro layout
import '../styles/global.css'; // Example: for HTML/body height 100%

export default function MainCarousel() {
  return (
    <><head><link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap"
        rel="stylesheet"
      /></head>
      <Swiper
        modules={[Navigation, Pagination, EffectFade]} // Add Autoplay if you want auto-slide
        spaceBetween={0}
        slidesPerView={1}
        navigation // Enable navigation arrows
        pagination={{ clickable: true }} // Enable clickable dots
        effect="fade" // Apply fade effect
        speed={800} // Transition speed in ms




        // autoplay={{
        //   delay: 5000, // Autoplay delay in ms
        //   disableOnInteraction: false, // Keep autoplaying after user interaction
        // }}
        loop={true} // Infinite loop
        className="main-swiper-container" // Custom class for styling
        style={{ height: '100vh', width: '100vw' }} // Direct style for full viewport
      >
        <SwiperSlide>
          <WelcomePage />
        </SwiperSlide>
        <SwiperSlide>
          <AboutUsPage />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectsPage />
        </SwiperSlide>
        <SwiperSlide>
          <ContactUsPage />
        </SwiperSlide>
      </Swiper></>
  );
}