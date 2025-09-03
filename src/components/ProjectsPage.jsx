// src/components/ProjectsPage.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Grid } from 'swiper/modules';

// Import Swiper styles for the nested carousel
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/pageStyles.css'; // For specific page styling
import filmProjects from './filmprojects.json'; // Import the JSON file

export default function ProjectsPage() {
  
  return (
   <div className="page-wrapper projects-page"
    style={{ backgroundImage: 'url(/images/CCA_BTS.jpg)' }}>
  <div className="background-blur-overlay"></div>
  <div className="page-content projects-page">
      <h2 class="text-2xl font-bold text-black">Our Film Projects</h2>
      <div className="project-image-container gap-[60px]"> {/* New container */}
          {filmProjects.map((project) => (
             <a key={project.id} href={`/${project.slug}`} className="relative overflow-hidden group block">
             <div key={project.id} className="relative overflow-hidden group">
      <img src={project.images[0]} alt={project.title} 
            className="w-[800px] h-[300px] block object-cover aspect-video" />
      <div className="absolute inset-0 flex justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:backdrop-blur-sm group-hover:bg-black/30">
        <h3 className="text-white text-2xl font-bold text-center p-2">{project.title}</h3>
      </div>
    </div>
    </a>
          ))}
      </div>
  </div>
</div> );
}