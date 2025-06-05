import React, { useState } from "react";

export default function CurrentNews() {
  const newTime = new Date();
  const [firstSliceValue, setFirstSliceValue] = useState(null);
  const [secondSliceValue, setSecondSliceValue] = useState(null);

  const currenNewsValues = [
    {
      id: 1,
      src: "/images/our-project/1.jpg",
      title: "",
      time: newTime.getFullYear() + "-" + newTime.getMonth(),
    },
    {
      id: 2,
      src: "/images/our-project/2.jpg",
      title: "",
      time: newTime.getFullYear() + "-" + newTime.getMonth(),
    },
    {
      id: 3,
      src: "/images/our-project/3.jpg",
      title: "",
      time: newTime.getFullYear() + "-" + newTime.getMonth(),
    },
    {
      id: 4,
      src: "/images/our-project/4.jpg",
      title: "",
      time: newTime.getFullYear() + "-" + newTime.getMonth(),
    },
  ];

  return (
    <div className="container px-5  my-10  lg:px-36">
      <div
        data-aos="fade-right"
        className=" uppercase flex flex-col gap-y-3  md:flex-row gap-x-4 my-10 justify-center md:justify-start text-5xl font-Oswald tracking-widest"
      >
        <h4>current</h4>
        <h4 className="text-secondary">news</h4>
      </div>

      <div className="hidden  md:flex justify-center gap-x-10">
        {currenNewsValues
          .slice(
            firstSliceValue ? firstSliceValue : 0,
            secondSliceValue ? secondSliceValue : 2
          )
          .map((items, index) => {
            return (
              <div
                data-aos="zoom-in"
                key={index}
                className="relative current-news-container"
              >
                <div className="current-news-image">
                  <img src={items.src} alt="" />
                </div>
                <div className=" absolute -bottom-5 current-news-card  left-1/2 -translate-x-1/2 px-10 py-5 bg-card-color   capitalize ">
                  <div className="font-Didact-Gothic text-text-color text-sm tracking-widest text-nowrap">
                    <span>architecton</span>
                    <span>2024 - 12</span>
                  </div>
                  <div>
                    <span className="text-secondary font-Oswald text-xl tracking-widest text-nowrap">
                      Moder architecton structure{" "}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {/* Mobile Current News */}
      <div className="  md:hidden justify-center ">
        {currenNewsValues
          .slice(
            firstSliceValue ? firstSliceValue : 0,
            secondSliceValue ? secondSliceValue : 1
          )
          .map((items, index) => {
            return (
              <div data-aos="zoom-in" key={index} className="relative">
                <div>
                  <img className="" src={items.src} alt="" />
                </div>
                <div className=" absolute -bottom-5  left-1/2 -translate-x-1/2 px-10 py-5 bg-card-color   capitalize ">
                  <div className="font-Didact-Gothic text-text-color text-sm tracking-widest text-nowrap">
                    <span>architecton</span>
                    <span>2024 - 12</span>
                  </div>
                  <div>
                    <span className="text-secondary font-Oswald text-xl tracking-widest text-nowrap">
                      Moder architecton structure{" "}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {/* Desktop Pagination Section */}
      <div className=" hidden md:flex gap-x-5 justify-center mt-10">
        {Array(2)
          .fill(0)
          .map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  switch (index) {
                    case 0:
                      setFirstSliceValue(0);
                      setSecondSliceValue(2);
                      console.log(firstSliceValue, secondSliceValue);

                      break;

                    case 1:
                      setFirstSliceValue(2);
                      setSecondSliceValue(4);
                      console.log(firstSliceValue, secondSliceValue);
                      break;

                    default:
                      console.log("Defual Value");
                  }
                }}
                className="w-4 h-4 cursor-pointer  border-2 border-secondary hover:bg-secondary transition-all duration-150 rounded-full flex items-center justify-center  "
              >
                <div className="w-2 h-2 rounded-full bg-primary "></div>
              </div>
            );
          })}
      </div>
      {/*Mobile Pagination Section */}
      <div className=" flex md:hidden gap-x-5 justify-center mt-10">
        {Array(4)
          .fill(0)
          .map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  switch (index) {
                    case 0:
                      setFirstSliceValue(0);
                      setSecondSliceValue(1);
                      console.log(firstSliceValue, secondSliceValue);

                      break;

                    case 1:
                      setFirstSliceValue(1);
                      setSecondSliceValue(2);
                      console.log(firstSliceValue, secondSliceValue);
                      break;
                    case 2:
                      setFirstSliceValue(2);
                      setSecondSliceValue(3);
                      console.log(firstSliceValue, secondSliceValue);
                      break;
                    case 3:
                      setFirstSliceValue(3);
                      setSecondSliceValue(4);
                      console.log(firstSliceValue, secondSliceValue);
                      break;

                    default:
                      console.log("Defual Value");
                  }
                }}
                className="w-4 h-4 cursor-pointer  border-2 border-secondary rounded-full flex items-center justify-center  "
              >
                <div className="w-2 h-2 rounded-full bg-primary"></div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
