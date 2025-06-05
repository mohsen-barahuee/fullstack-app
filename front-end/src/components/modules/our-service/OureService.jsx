import React from "react";
import "aos/dist/aos.css";

export default function OureService() {


  return (
    <div className="container px-5  my-20  lg:px-44">
      <div
        data-aos="fade-right"
        className=" uppercase flex gap-x-4 my-10 justify-center md:justify-start text-5xl font-Oswald tracking-widest"
      >
        <h4>our</h4>
        <h4 className="text-secondary">services</h4>
      </div>
      <div
        data-aos="fade-down"
        className="flex px-4 md:px-0 flex-wrap lg:flex-nowrap gap-x-20 justify-center items-center"
      >
        <div data-aos="flip-up" className="flex flex-col gap-y-5">
          <img src="/images/icons/icon-1.png" className="w-20" alt="" />
          <span className="font-Oswald">ARCHITECTURE</span>
          <div className="flex flex-col gap-y-4 lg:gap-y-0 ">
            <p className="font-Didact-Gothic text-left   leading-relaxed text-sm   text-text-color ">
              Architecture bibendum eros eget lacus the vulputate sit amet
              vehicula nibhen uilcera in the vitae miss.
            </p>
            <span className="text-right font-Oswald text-2xl tracking-widest text-text-color">
              01
            </span>
          </div>
        </div>
        <div data-aos="flip-up" className="flex flex-col gap-y-5">
          <img src="/images/icons/icon-2.png" className="w-20" alt="" />
          <span className="font-Oswald">INTERIOR DESIGN</span>
          <div className="flex flex-col gap-y-4 lg:gap-y-0 ">
            <p className="font-Didact-Gothic text-left   leading-relaxed text-sm   text-text-color ">
              Architecture bibendum eros eget lacus the vulputate sit amet
              vehicula nibhen uilcera in the vitae miss.
            </p>
            <span className="text-right font-Oswald text-2xl tracking-widest text-text-color">
              02
            </span>
          </div>
        </div>
        <div data-aos="flip-up" className="flex flex-col gap-y-5">
          <img src="/images/icons/icon-3.png" className="w-20" alt="" />
          <span className="font-Oswald">URBAN DESIGN </span>
          <div className="flex flex-col gap-y-4 lg:gap-y-0 ">
            <p className="font-Didact-Gothic text-left   leading-relaxed text-sm   text-text-color ">
              Architecture bibendum eros eget lacus the vulputate sit amet
              vehicula nibhen uilcera in the vitae miss.
            </p>
            <span className="text-right font-Oswald text-2xl tracking-widest text-text-color">
              03
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
