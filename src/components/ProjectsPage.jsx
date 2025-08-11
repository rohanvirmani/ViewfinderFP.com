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
    { id: 1, title: 'Ballerina', year: 2023, image: '/images/project1.jpg', description: 'A gripping drama about urban solitude.' },
    { id: 2, title: 'Friendship', year: 2022, image: '/images/project2.jpg', description: 'Award-winning psychological thriller.' },
    { id: 3, title: 'The Green Mile', year: 2021, image: '/images/project3.jpg', description: 'Documentary exploring sustainable living.' },
    { id: 4, title: 'The Green Mile', year: 2021, image: '/images/project3.jpg', description: 'Documentary exploring sustainable living.' },


    // Add more projects
  ];

  return (
    <div className="page-wrapper projects-page">
      <div className="page-content">
        <h2>Our Film Projects</h2>
        <Swiper
          modules={[Pagination, Navigation, Grid]}
          grid={{
          rows: 1,
          fill: 'row',
          }}
          slidesPerView={4} // Show 2 images per row
          spaceBetween={30}
          navigation // Enable navigation for sub-carousel
          pagination={{ clickable: true }} // Enable pagination for sub-carousel
          
          className="projects-swiper"
          

          style={{ width: '80%', height: '70%', maxWidth: '1200px' }} // Adjust size
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="project-card">
                <img src={project.image} alt={project.title} className="project-image" />
                <h3>{project.title}</h3>
                {/* <p>{project.description}</p> */}
                {/* Add a link to a dedicated project page if applicable */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}