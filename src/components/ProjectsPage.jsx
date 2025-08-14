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
      <div className="project-image-container"> {/* New container */}
          {projects.map((project) => (
              <img key={project.id} src={project.image} alt={project.title} className="project-image" />
          ))}
      </div>
  </div>
</div> );
}