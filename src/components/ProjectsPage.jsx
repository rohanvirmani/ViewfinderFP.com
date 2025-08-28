// src/components/ProjectsPage.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Grid } from 'swiper/modules';

// Import Swiper styles for the nested carousel
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../styles/pageStyles.css'; // For specific page styling

export default function ProjectsPage() {
  const projects = [
    { id: 1, title: 'Small Wishes', year: 2023, image: '/images/Small-wishes-poster.png', description: 'A gripping drama about urban solitude.' },
    { id: 2, title: 'Little Wings', year: 2022, image: '/images/project2.jpg', description: 'Award-winning psychological thriller.' },
    {id: 3, title: 'Little Wings', year: 2022, image: '/images/project2.jpg', description: 'Award-winning psychological thriller.' },
    {id: 3, title: 'Little Wings', year: 2022, image: '/images/project2.jpg', description: 'Award-winning psychological thriller.' },
    {id: 3, title: 'Little Wings', year: 2022, image: '/images/project2.jpg', description: 'Award-winning psychological thriller.' },
     
 


    // Add more projects
  ];

  return (
   <div className="page-wrapper projects-page"
    style={{ backgroundImage: 'url(/images/CCA_BTS.jpg)' }}>
  <div className="background-blur-overlay"></div>
  <div className="page-content projects-page">
      <h2>Our Film Projects</h2>
      <div className="project-image-container gap-[60px]"> {/* New container */}
          {projects.map((project) => (
             <div key={project.id} className="relative overflow-hidden group">
      <img src={project.image} alt={project.title} 
            className="w-[800px] h-[300px] block object-cover aspect-video" />
      <div className="absolute inset-0 flex justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:backdrop-blur-sm group-hover:bg-black/30">
        <h3 className="text-white text-2xl font-bold text-center p-2">{project.title}</h3>
      </div>
    </div>
          ))}
      </div>
  </div>
</div> );
}