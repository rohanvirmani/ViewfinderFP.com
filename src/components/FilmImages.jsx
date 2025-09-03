

import films from './filmprojects.json';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SwiperCarousel({ images }) {
  if (!images || images.length === 0) {
    return null; // Don't render if no images are provided
  }

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={3}
      spaceBetween={24}
      navigation={true}
      className="mySwiper2"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
            <img src={image} alt={"Project image"} className="h-full w-full object-cover" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

