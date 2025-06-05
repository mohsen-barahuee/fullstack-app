import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Aos from "aos";
import "aos/dist/aos.css";

export default function OurProjects() {
  useEffect(() => {
    Aos.init();
  }, []);
  const ourProjects = [
    { id: 1, src: "/images/our-project/1.jpg" },
    { id: 2, src: "/images/our-project/2.jpg" },
    { id: 3, src: "/images/our-project/3.jpg" },
    { id: 4, src: "/images/our-project/4.jpg" },
  ];

  return (
    <div className=" container my-20 px-5 lg:px-44">
      <div className=" uppercase flex gap-x-4 my-10 justify-center md:justify-start text-5xl font-Oswald tracking-widest">
        <h4>our</h4>
        <h4 className="text-secondary">project</h4>
      </div>
      <div data-aos="fade-right" className="hidden md:block">
        <Swiper
          slidesPerView={2}
          spaceBetween={40}
          className="my-10 transition-all"
          modules={[Pagination]}
        >
          {ourProjects.map((items, index) => {
            return (
              <SwiperSlide
                key={index}
                
              >
                <img src={items.src} alt="" className=" hover:opacity-40 opacity-100 transition-all duration-200" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div data-aos="fade-right" className="md:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={40}
          className="my-10"
          modules={[Pagination]}
        >
          {ourProjects.map((items, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={items.src} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
