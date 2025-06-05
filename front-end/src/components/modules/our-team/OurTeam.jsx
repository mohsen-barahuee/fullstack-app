import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

export default function OurTeam() {
  return (
    <div data-aos="flip-left" className=" container my-20 px-5">
      <div className="uppercase flex gap-x-4 my-10 justify-start text-5xl font-Oswald tracking-widest">
        <h3>our</h3>
        <h3 className="text-secondary">team</h3>
      </div>
      <div className="hidden lg:block">
        <Swiper
          slidesPerView={3}
          spaceBetween={40}
          className="my-10"
          modules={[Pagination]}
        >
          <SwiperSlide>
            <div className="our-team-container relative">
              <img src="/images/team/1.jpg" alt="" />
              <div className="flex flex-col mt-4 text-center">
                <span className="text-xl uppercase font-Oswald tracking-widest">
                  person name
                </span>
                <span className="text-text-color font-Didact-Gothic capitalize tracking-wider">
                  person role
                </span>
              </div>
              <div className="our-team-bottom-slide absolute flex flex-col items-center gap-y-5 h-0 overflow-hidden bottom-0 w-full  bg-card-color">
                <span className="text-text-color font-Didact-Gothic capitalize text-xl">
                  persone ID
                </span>
                <div className="flex gap-x-4 child:text-secondary">
                  <svg className="w-5 h-5">
                    <use href="#instageram"></use>
                  </svg>
                  <svg className="w-5 h-5">
                    <use href="#face-book"></use>
                  </svg>
                  <svg className="w-5 h-5">
                    <use href="#twitter"></use>
                  </svg>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="our-team-container relative">
              <img src="/images/team/2.jpg" alt="" />
              <div className="flex flex-col mt-4 text-center">
                <span className="text-xl uppercase font-Oswald tracking-widest">
                  person name
                </span>
                <span className="text-text-color font-Didact-Gothic capitalize tracking-wider">
                  person role
                </span>
              </div>
              <div className="our-team-bottom-slide absolute flex flex-col items-center gap-y-5 h-0 overflow-hidden bottom-0 w-full  bg-card-color">
                <span className="text-text-color font-Didact-Gothic capitalize text-xl">
                  persone ID
                </span>
                <div className="flex gap-x-4 child:text-secondary">
                  <svg className="w-5 h-5">
                    <use href="#instageram"></use>
                  </svg>
                  <svg className="w-5 h-5">
                    <use href="#face-book"></use>
                  </svg>
                  <svg className="w-5 h-5">
                    <use href="#twitter"></use>
                  </svg>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="our-team-container relative">
              <img src="/images/team/3.jpg" alt="" />
              <div className="flex flex-col mt-4 text-center">
                <span className="text-xl uppercase font-Oswald tracking-widest">
                  person name
                </span>
                <span className="text-text-color font-Didact-Gothic capitalize tracking-wider">
                  person role
                </span>
              </div>
              <div className="our-team-bottom-slide absolute flex flex-col items-center gap-y-5 h-0 overflow-hidden bottom-0 w-full  bg-card-color">
                <span className="text-text-color font-Didact-Gothic capitalize text-xl">
                  persone ID
                </span>
                <div className="flex gap-x-4 child:text-secondary">
                  <svg className="w-5 h-5">
                    <use href="#instageram"></use>
                  </svg>
                  <svg className="w-5 h-5">
                    <use href="#face-book"></use>
                  </svg>
                  <svg className="w-5 h-5">
                    <use href="#twitter"></use>
                  </svg>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="our-team-container relative">
              <img src="/images/team/4.jpg" alt="" />
              <div className="flex flex-col mt-4 text-center">
                <span className="text-xl uppercase font-Oswald tracking-widest">
                  person name
                </span>
                <span className="text-text-color font-Didact-Gothic capitalize tracking-wider">
                  person role
                </span>
              </div>
              <div className="our-team-bottom-slide absolute flex flex-col items-center gap-y-5 h-0 overflow-hidden bottom-0 w-full  bg-card-color">
                <span className="text-text-color font-Didact-Gothic capitalize text-xl">
                  persone ID
                </span>
                <div className="flex gap-x-4 child:text-secondary">
                  <svg className="w-5 h-5">
                    <use href="#instageram"></use>
                  </svg>
                  <svg className="w-5 h-5">
                    <use href="#face-book"></use>
                  </svg>
                  <svg className="w-5 h-5">
                    <use href="#twitter"></use>
                  </svg>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hidden sm:block lg:hidden">
        <Swiper
          slidesPerView={2}
          spaceBetween={40}
          className="my-10"
          modules={[Pagination]}
        >
          <SwiperSlide>
            <img src="/images/team/1.jpg" alt="" />
            <div className="flex flex-col mt-4 text-center">
              <span className="text-xl uppercase font-Oswald tracking-widest">
                person name
              </span>
              <span className="text-text-color font-Didact-Gothic capitalize tracking-wider">
                person role
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/team/2.jpg" alt="" />
            <div className="flex flex-col mt-4 text-center">
              <span className="text-xl uppercase font-Oswald tracking-widest">
                person name
              </span>
              <span className="text-text-color font-Didact-Gothic capitalize tracking-wider">
                person role
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/team/3.jpg" alt="" />
            <div className="flex flex-col mt-4 text-center">
              <span className="text-xl uppercase font-Oswald tracking-widest">
                person name
              </span>
              <span className="text-text-color font-Didact-Gothic capitalize tracking-wider">
                person role
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/team/4.jpg" alt="" />
            <div className="flex flex-col mt-4 text-center">
              <span className="text-xl uppercase font-Oswald tracking-widest">
                person name
              </span>
              <span className="text-text-color font-Didact-Gothic capitalize tracking-wider">
                person role
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="sm:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={40}
          className="my-10"
          modules={[Pagination]}
        >
          <SwiperSlide>
            <img src="/images/team/1.jpg" alt="" />
            <div className="flex flex-col mt-4 text-center">
              <span className="text-xl uppercase font-Oswald tracking-widest">
                person name
              </span>
              <span className="text-text-color font-Didact-Gothic capitalize tracking-wider">
                person role
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/team/2.jpg" alt="" />
            <div className="flex flex-col mt-4 text-center">
              <span className="text-xl uppercase font-Oswald tracking-widest">
                person name
              </span>
              <span className="text-text-color font-Didact-Gothic capitalize tracking-wider">
                person role
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/team/3.jpg" alt="" />
            <div className="flex flex-col mt-4 text-center">
              <span className="text-xl uppercase font-Oswald tracking-widest">
                person name
              </span>
              <span className="text-text-color font-Didact-Gothic capitalize tracking-wider">
                person role
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/team/4.jpg" alt="" />
            <div className="flex flex-col mt-4 text-center">
              <span className="text-xl uppercase font-Oswald tracking-widest">
                person name
              </span>
              <span className="text-text-color font-Didact-Gothic capitalize tracking-wider">
                person role
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
