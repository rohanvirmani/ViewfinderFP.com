import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SwiperCarousel({ images }) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      spaceBetween={16}
      navigation={true}
      pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24,
        }
      }}
      className="mySwiper2"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
            <img 
              src={image} 
              alt={"Project image"} 
              className="h-full w-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}