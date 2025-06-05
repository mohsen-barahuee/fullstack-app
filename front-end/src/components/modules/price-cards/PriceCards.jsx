import React from "react";

export default function PriceCards() {
  return (
    <>
      <div className=" px-5  lg:px-24 mb-40">
        <div className=" mt-28 md:mt-64">
          <div className="uppercase  flex gap-x-4 my-10 justify-start md:justify-start text-4xl md:text-5xl font-Oswald tracking-widest">
            <h3>pricing</h3>
            <h3 className="text-secondary">plan</h3>
          </div>
          <div>
            <div  className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-y-5 gap-x-10">
              <div data-aos="flip-down" className="flex flex-col items-start gap-y-6 bg-card-color py-10 pl-8">
                <div className="flex flex-col gap-y-4">
                  <span className="font-Oswald uppercase text-secondary tracking-widest ">
                    basic plan
                  </span>
                  <span className="font-Oswald text-4xl">$30.00</span>
                </div>

                <div className="flex flex-col gap-y-1 text-sm text-text-color">
                  <span className="flex items-center gap-x-4">
                    <svg className="w-4 h-4">
                      <use href="#check-icon"></use>
                    </svg>
                    information architecture
                  </span>
                  <span className="flex items-center gap-x-4">
                    <svg className="w-4 h-4">
                      <use href="#check-icon"></use>
                    </svg>
                    life time support
                  </span>
                  <span className="flex items-center gap-x-4">
                    <svg className="w-4 h-4">
                      <use href="#check-icon"></use>
                    </svg>
                    A - Z design
                  </span>
                  <span className="flex items-center gap-x-4">
                    <svg className="w-4 h-4">
                      <use href="#x-mark"></use>
                    </svg>
                    information architecture
                  </span>
                </div>
                <a
                  className="uppercase bg-secondary px-8 py-2 text-sm font-Oswald tracking-widest"
                  href="/"
                >
                  discover
                </a>
              </div>
              <div data-aos="flip-down" className="flex flex-col items-start gap-y-6 bg-card-color py-10 pl-8">
                <div className="flex flex-col gap-y-4">
                  <span className="font-Oswald uppercase text-secondary tracking-widest ">
                    basic plan
                  </span>
                  <span className="font-Oswald text-4xl">$30.00</span>
                </div>

                <div className="flex flex-col gap-y-1 text-sm text-text-color">
                  <span className="flex items-center gap-x-4">
                    <svg className="w-4 h-4">
                      <use href="#check-icon"></use>
                    </svg>
                    information architecture
                  </span>
                  <span className="flex items-center gap-x-4">
                    <svg className="w-4 h-4">
                      <use href="#check-icon"></use>
                    </svg>
                    life time support
                  </span>
                  <span className="flex items-center gap-x-4">
                    <svg className="w-4 h-4">
                      <use href="#check-icon"></use>
                    </svg>
                    A - Z design
                  </span>
                  <span className="flex items-center gap-x-4">
                    <svg className="w-4 h-4">
                      <use href="#x-mark"></use>
                    </svg>
                    information architecture
                  </span>
                </div>
                <a
                  className="uppercase bg-secondary px-8 py-2 text-sm font-Oswald tracking-widest"
                  href="/"
                >
                  discover
                </a>
              </div>
              <div data-aos="flip-down" className="flex flex-col items-start gap-y-6 bg-card-color py-10 pl-8">
                <div className="flex flex-col gap-y-4">
                  <span className="font-Oswald uppercase text-secondary tracking-widest ">
                    basic plan
                  </span>
                  <span className="font-Oswald text-4xl">$30.00</span>
                </div>

                <div className="flex flex-col gap-y-1 text-sm text-text-color">
                  <span className="flex items-center gap-x-4">
                    <svg className="w-4 h-4">
                      <use href="#check-icon"></use>
                    </svg>
                    information architecture
                  </span>
                  <span className="flex items-center gap-x-4">
                    <svg className="w-4 h-4">
                      <use href="#check-icon"></use>
                    </svg>
                    life time support
                  </span>
                  <span className="flex items-center gap-x-4">
                    <svg className="w-4 h-4">
                      <use href="#check-icon"></use>
                    </svg>
                    A - Z design
                  </span>
                  <span className="flex items-center gap-x-4">
                    <svg className="w-4 h-4">
                      <use href="#x-mark"></use>
                    </svg>
                    information architecture
                  </span>
                </div>
                <a
                  className="uppercase bg-secondary px-8 py-2 text-sm font-Oswald tracking-widest"
                  href="/"
                >
                  discover
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
