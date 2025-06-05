import React from "react";

export default function Footer() {
  return (
    <>
      <div className=" container py-10 pl-10 lg:pl-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5  capitalize">
        <div className="flex flex-col items-start font-Didact-Gothic text-sm gap-y-1 ">
          <span className=" text-secondary">phone</span>
          <span className="text-text-color">+1 203-123-0606</span>
        </div>
        <div className="flex flex-col items-start font-Didact-Gothic text-sm gap-y-1 ">
          <span className=" text-secondary">email</span>
          <span className="text-text-color">arhitectutre@email.com</span>
        </div>
        <div className="flex flex-col items-start font-Didact-Gothic text-sm gap-y-1 ">
          <span className=" text-secondary">our address</span>
          <span className="text-text-color">
            24 king st,charleston,SC 249401 US
          </span>
        </div>
      </div>
      <div className=" container text-sm pb-10 pl-10 lg:pl-0 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 items-center  gap-y-5  capitalize text-text-color">
        <div>
          <span>2021 all bound reserved</span>
        </div>
        <div className="flex gap-x-3  child:border child:rounded-full child:px-2 child:py-1">
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
        <div>
          <span>terms and conditions</span>
        </div>
      </div>
    </>
  );
}
