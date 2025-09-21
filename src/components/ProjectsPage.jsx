// src/components/ProjectsPage.jsx
import React from 'react';
import '../styles/pageStyles.css';
import filmProjects from './filmprojects.json';

export default function ProjectsPage() {
  return (
    <div className="page-wrapper projects-page"
         style={{ backgroundImage: 'url(/images/CCA_BTS.jpg)' }}>
      <div className="background-blur-overlay"></div>
      <div className="page-content projects-page px-4 md:px-8 w-full md:w-[90%] lg:w-[80%] max-w-[1920px] mt-[95px] md:mt-[130px]"> {/* Added margin-top */}
        <h2 className="text-xl md:text-2xl font-bold text-white mb-6">Our Film Projects</h2>
        <div className="project-image-container flex flex-col gap-6 md:gap-8 lg:gap-10 w-full">
          {filmProjects.map((project) => (
            <a key={project.id} 
               href={`/${project.slug}`} 
               className="w-full block relative">
              <div className="relative w-full">
                {/* Aspect ratio container */}
                <div className="w-full relative basis-2/3 pb-[56.25%]">
                  <img 
                    src={project.images[0]} 
                    alt={project.title} 
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 scale-[0.8]"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 flex justify-center items-center opacity-0 transition-all duration-300 hover:opacity-100 hover:backdrop-blur-sm hover:bg-black/30">
                    <h3 className="text-white text-xl md:text-3xl lg:text-4xl font-bold text-center p-4">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}