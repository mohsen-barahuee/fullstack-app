import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

export default function Header() {
  const swiperRef = useRef(null);

  const headerImages = [
    { id: 1, src: "/images/home/1.jpg" },
    { id: 2, src: "/images/home/2.jpg" },
    { id: 3, src: "/images/home/3.jpg" },
    { id: 4, src: "/images/home/4.jpg" },
  ]

  return (
    <>
      <header className=" w-full  child:font-Oswald   ">
        {/* Header Slider Section */}
        <div className="w-full relative   ">
          {/* Slider */}
          <Swiper
            loop={true}
            modules={[Navigation]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={1}
            className="mySwiper "
          >
            {headerImages.map((items, index) => {
              return (
                <SwiperSlide key={index}>
                  <div>
                    <img
                      className="w-full h-[550px]  lg:h-[690px] opacity-50 lg:opacity-75 lg:pl-40 "
                      src={items.src}
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          {/* header Texts */}
          <section className=" absolute top-1/3 right-5 lg:right-20 text-right  font-Oswald z-10  ">
            <div className=" container uppercase text-4xl md:text-5xl lg:text-6xl tracking-widest  leading-snug">
              <h2> innovate design in</h2>
              <h2>torento</h2>
            </div>
            <div className="container flex flex-col text-xs sm:text-base gap-y-3 child:text-wrap justify-start font-Didact-Gothic tracking-wider">
              <span className="text-wrap">
                Archiecuter viverra tellus nec massa dictum the enisome
              </span>
              <span>Curabiture viverra the posuere aukue velit</span>
            </div>
            <div className=" mt-3 container  ">
              <button className="text-right hover:bg-white hover:text-black transition-all ease-out duration-300 px-6 py-3 border uppercase">
                <Link to={'/price'}>buy now</Link>
              </button>
            </div>
          </section>
          <div className=" hidden lg:flex absolute bottom-10 left-20 lg:gap-x-20  z-30  items-end container    ">
            <div className="hidden w-5   lg:flex flex-col  items-center lg:gap-y-2.5 ">
              <div className="w-[1px] h-11 bg-white"></div>
              <div>
                <svg className="w-5 h-6 text-white">
                  <use href="#pinterest"></use>
                </svg>
              </div>
              <div>
                <svg className="w-5 h-6 text-white  ">
                  <use href="#instageram"></use>
                </svg>
              </div>
              <div>
                <svg className="w-5 h-6 text-white">
                  <use href="#twitter"></use>
                </svg>
              </div>
              <div>
                <svg className="w-5 h-6 text-white">
                  <use href="#face-book"></use>
                </svg>
              </div>
            </div>

            <div className="  h-10  flex gap-x-4">
              <button
                className="border rounded-full p-2 hover:text-secondary hover:border-secondary"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <svg className="w-5 h-5 ">
                  <use href="#arrow-left"></use>
                </svg>
              </button>
              <button
                className="border rounded-full p-2 hover:text-secondary hover:border-secondary"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <svg className="w-5 h-5 ">
                  <use href="#arrow-right"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
