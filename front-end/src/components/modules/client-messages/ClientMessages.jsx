import React from "react";

export default function ClientMessages() {
  const ClientMessageIcons = [
    { id: 1, src: "/images/icons/icon-1.png" },
    { id: 2, src: "/images/icons/icon-2.png" },
    { id: 3, src: "/images/icons/icon-3.png" },
    { id: 4, src: "/images/icons/icon-4.png" },
    { id: 5, src: "/images/icons/icon-5.png" },
  ];

  return (
    <div>
      <div className="w-full relative">
        <img
          src="/images/our-project/2.jpg"
          className="w-full object-cover h-[450px] opacity-50"
          alt=""
        />
        <div className=" absolute top-0 items-center py-10  lg:top-10 flex  flex-col lg:flex-row lg:left-1/2 lg:-translate-x-1/2   lg:items-start gap-y-5   lg:justify-between w-full lg:px-52   ">
          <div>
            <div className="flex flex-col   gap-y-3  ">
              <div className="cursor-pointer">
                <svg className="w-20 h-20 rounded-full p-4  bg-secondary/50 transition-all duration-200 hover:bg-secondary ">
                  <use href="#play-icon"></use>
                </svg>
              </div>
              <span className="uppercase font-Oswald text-xl tracking-widest">
                View promo video
              </span>
            </div>
          </div>
          <div  data-aos="flip-left" className="bg-primary w-72 py-10 md:pb-16 px-5 ">
            <div className="flex flex-col gap-y-3">
              <span className="uppercase font-Oswald text-xl tracking-widest  text-left">
                What Client's say ?
              </span>
              <div className="w-full h-[1px] bg-text-color"></div>
              <p className="text-xs text-text-color">
                Planner inilla duiman at elit finibus viverra nec a lacus themo
                the drudea seneoice misuscipit non sagie the fermen. Viverra
                tristique jusio the ivite dianne onen nivami acsestion augue
                artine
              </p>
              <div className="flex gap-x-3  ">
                <img
                  src="/images/profile/1.jpg"
                  className="w-12 rounded-full"
                  alt=""
                />
                <div className="flex flex-col text-sm">
                  <span className=" capitalize text-secondary font-Didact-Gothic tracking-wide">
                    Json brown
                  </span>
                  <span className="capitalize text-white/70 font-Didact-Gothic tracking-wide">
                    Crown Plaza owner
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:absolute  lg:bottom-0 w-full overflow-x-scroll md:overflow-x-hidden bg-card-color py-10 ">
          <div className="flex justify-center lg:justify-start md:pl-32 gap-x-20">
            {ClientMessageIcons.map((items, index) => {
              return (
               
                  <img
                    key={index}
                    className="  w-10"
                    src={items.src}
                    alt=""
                  />
               
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
