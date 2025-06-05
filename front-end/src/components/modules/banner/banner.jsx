import React from "react";

export default function Banner() {
  return (
    <div className="  absolute top-0  w-full -z-10">
      <div className="w-full hidden md:block h-full bg-gradient-to-t from-primary from-50% z-10 absolute bottom-0"></div>
      <div className=" relative md:hidden w-full ">
        <div className=" absolute top-0 w-full h-[300px]  bg-gradient-to-t from-primary from-50% -z-10"></div>
        <img
          className="   absolute top-0 h-[300px]  -z-20  w-full opacity-30"
          src="/images/our-project/2.jpg"
          alt=""
        />
      </div>
      <img
        className=" hidden md:block pl-40   w-full opacity-30"
        src="/images/our-project/2.jpg"
        alt=""
      />
    </div>
  );
}
