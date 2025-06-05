import React from "react";

export default function ProcessSection() {
  return (
    <>
      <div className=" container  lg:mb-20">
        <div className="w-full  relative">
          <div className="w-full hidden md:block h-full bg-gradient-to-t from-primary from-50% z-10 absolute bottom-0"></div>
          <div className=" relative md:hidden w-full ">
            <div className=" absolute top-0 w-full h-[300px]  bg-gradient-to-t from-primary from-50% -z-10"></div>
            <img
              className="  absolute top-0  -z-20  w-full opacity-30"
              src="/images/our-project/2.jpg"
              alt=""
            />
          </div>
          <img
            className=" hidden md:block  w-full opacity-30"
            src="/images/our-project/2.jpg"
            alt=""
          />
          <div className=" px-4 pt-20 md:pt-0 md:absolute   md:bottom-20  z-20">
            <div className="uppercase   flex  gap-x-4 my-10 justify-start md:justify-start text-4xl lg:text-5xl font-Oswald tracking-widest">
              <h3>pricing</h3>
              <h3 className="text-secondary">plan</h3>
            </div>
            <div className="flex flex-col gap-y-5  md:flex-row gap-x-10">
              <div data-aos="fade-up-right" className="flex flex-col gap-y-10">
                <div className=" hidden lg:flex translate-x-24 items-center gap-x-4">
                  <div className="border border-dotted p-4 rounded-full">
                    <img
                      className="w-8 h-8"
                      src="/images/icons/icon-1.png"
                      alt=""
                    />
                  </div>
                  <img
                    className="w-52 -scale-y-125"
                    src="/images/arrow.png"
                    alt=""
                  />
                </div>
                <div className="bg-card-color rounded-xl md:max-w-[300px] px-5 py-2 lg:py-10">
                  <h6 className="uppercase text-nowrap text-xl lg:text-2xl font-Oswald tracking-widest border-b py-3">
                    client needs
                  </h6>
                  <p className="text-xs lg:text-sm pt-5 text-text-color ">
                    Nulla ane sapienu tincie miss oviverra odio sen nena motis
                    omaurise nediam the misthe ovivense endum the drana osemnuti
                    isendum." Let me know if you want it cleaned up, translated,
                    or styled with Tailwind or something else
                  </p>
                  <p className=" text-2xl lg:text-3xl text-right lg:pt-5 font-Oswald text-text-color tracking-widest">
                    01
                  </p>
                </div>
              </div>
              <div data-aos="fade-up" className="flex flex-col lg:translate-y-10 gap-y-10">
                <div className="hidden lg:flex translate-x-24 items-center gap-x-4">
                  <div className="border border-dotted p-4 rounded-full">
                    <img
                      className="w-8 h-8"
                      src="/images/icons/icon-2.png"
                      alt=""
                    />
                  </div>
                  <img className="w-52  " src="/images/arrow.png" alt="" />
                </div>
                <div className="bg-card-color rounded-xl md:max-w-[300px]  px-5 py-2 lg:py-10">
                  <h6 className="uppercase text-xl lg:text-2xl font-Oswald tracking-widest border-b py-3">
                    direction
                  </h6>
                  <p className=" text-xs lg:text-sm pt-2 lg:pt-5 text-text-color">
                    Nulla ane sapienu tincie miss oviverra odio sen nena motis
                    omaurise nediam the misthe ovivense endum the drana osemnuti
                    isendum." Let me know if you want it cleaned up, translated,
                    or styled with Tailwind or something else
                  </p>
                  <p className=" text-2xl lg:text-3xl text-right lg:pt-5 font-Oswald text-text-color tracking-widest">
                    02
                  </p>
                </div>
              </div>
              <div  data-aos="fade-down" className="flex flex-col gap-y-10">
                <div className="hidden lg:flex lg:translate-x-24 items-center gap-x-4">
                  <div className="border border-dotted p-4 rounded-full">
                    <img
                      className="w-8 h-8"
                      src="/images/icons/icon-1.png"
                      alt=""
                    />
                  </div>
                  <img
                    className="w-52 -scale-y-125"
                    src="/images/arrow.png"
                    alt=""
                  />
                </div>
                <div className="bg-card-color rounded-xl md:max-w-[300px] px-5 py-2 lg:py-10">
                  <h6 className="uppercase text-xl lg:text-2xl font-Oswald tracking-widest border-b py-3">
                    design
                  </h6>
                  <p className=" text-xs lg:text-sm pt-3 lg:pt-5 text-text-color">
                    Nulla ane sapienu tincie miss oviverra odio sen nena motis
                    omaurise nediam the misthe ovivense endum the drana osemnuti
                    isendum." Let me know if you want it cleaned up, translated,
                    or styled with Tailwind or something else
                  </p>
                  <p className=" text-2xl lg:text-3xl text-right lg:pt-5 font-Oswald text-text-color tracking-widest">
                    03
                  </p>
                </div>
              </div>
              <div data-aos="fade-up-left" className="flex flex-col lg:translate-y-10 gap-y-10">
                <div className="hidden lg:flex translate-x-24 items-center gap-x-4">
                  <div className="border border-dotted p-4 rounded-full">
                    <img
                      className="w-8 h-8 "
                      src="/images/icons/icon-2.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="bg-card-color rounded-xl md:max-w-[300px] px-5 lg:py-10">
                  <h6 className="uppercase text-xl lg:text-2xl font-Oswald tracking-widest border-b py-3">
                    value
                  </h6>
                  <p className=" text-xs lg:text-sm pt-4 lg:pt-5 text-text-color">
                    Nulla ane sapienu tincie miss oviverra odio sen nena motis
                    omaurise nediam the misthe ovivense endum the drana osemnuti
                    isendum." Let me know if you want it cleaned up, translated,
                    or styled with Tailwind or something else
                  </p>
                  <p className=" text-2xl lg:text-3xl text-right pt-3 lg:pt-5 font-Oswald text-text-color tracking-widest">
                    04
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
