import React, { useState } from "react";

import { Link } from "react-router-dom";

export default function Navbar({ path, scroll, token }) {
  const [sideBar, setSideBar] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  const logOutHandler = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/user`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      alert("Log Out successfully");
      window.location.reload();
    }
  };

  return (
    <div
      className={`${
        path.pathname === "/" || "process" ? "fixed  top-0" : ""
      } bg-primary px-5 md:px-0   transition-all child:font-Oswald   w-full ${
        scroll > 150 ? "md:bg-primary fixed  top-0  " : "md:bg-inherit "
      }  flex flex-row-reverse items-center justify-between px-10 z-50`}
    >
      {/* Desktop nav */}
      <nav className=" hidden md:flex items-center lg:my-0   ">
        <ul
          className=" flex items-center   md:pr-10 lg:pr-20 gap-x-4 text-xl  child:uppercase 
       child:transition-all child:linear  child:duration-200 child:delay-75 child:cursor-pointer "
        >
          <li
            className={
              path.pathname === "/"
                ? "text-secondary"
                : "text-white hover:text-secondary"
            }
          >
            <Link to={"/"}>home</Link>
          </li>
          <li
            className={
              path.pathname === "/about"
                ? "text-secondary"
                : "text-white hover:text-secondary"
            }
          >
            <Link to={"/about"}>about</Link>
          </li>
          <li className="hover:text-secondary">services</li>
          <li className="hover:text-secondary">projects</li>
          <li className="relative drop-down transition-all delay-75 duration-75">
            pages
            <ul className="bg-card-color transition-all pr-40 pl-5 text-nowrap delay-75 child-hover:text-secondary   absolute  text-base w-full flex flex-col gap-y-5 font-Didact-Gothic capitalize text-center  py-4 ">
              <li>
                <Link to={"/price"}>pricing</Link>
              </li>
              <li>
                <Link to={"/process"}>process</Link>
              </li>
              <li>
                <Link to={"/*"}>404</Link>
              </li>
            </ul>
          </li>
          <li
            className={
              path.pathname === "/blogs"
                ? "text-secondary"
                : "text-white hover:text-secondary"
            }
          >
            <Link to={"/blogs"}>blog</Link>
          </li>
          <li className="hover:text-secondary">contact</li>
          <li className=" relative px-5 login-drop-down transition-all delay-75 duration-75">
            <Link
              className="bg-secondary hover:bg-card-color block text-nowrap  rounded-lg px-5  py-2 "
              to={token ? "/account" : "/register"}
            >
              {token ? (
                <svg className="w-10 h-10">
                  <use href="#user-icon"></use>
                </svg>
              ) : (
                "login | sing up"
              )}
            </Link>
            {token && (
              <ul className="bg-card-color transition-all delay-75 child-hover:text-secondary   absolute  text-base w-full flex flex-col gap-y-5 font-Didact-Gothic capitalize text-center  py-4 ">
                <li>
                  <Link to={"/account"}>my account</Link>
                </li>
                <li onClick={logOutHandler}>log out</li>
              </ul>
            )}
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <div className="md:hidden">
        {sideBar && (
          <div className="fixed top-0 right-0 opacity-75 w-full h-screen bg-black"></div>
        )}
        <nav
          className={`fixed  transition-all duration-100 ${
            sideBar ? "right-0" : "-right-[1000px]"
          } top-0 w-3/4 h-screen bg-primary`}
        >
          <div className=" px-2 py-2 flex items-center justify-between bg-card-color">
            <svg
              onClick={() => setSideBar(false)}
              className="w-8 h-8 text-white/60"
            >
              <use href="#x-mark"></use>
            </svg>
            <div className="flex flex-col  uppercase">
              <h4 className="text-secondary  text-xl ">bauen</h4>
              <span className="text-xs2 text-center block">
                innovate design
              </span>
            </div>
            <div>
              <img src="/images/logo.png" className="w-16" alt="" />
            </div>
          </div>
          <div className="p-3 pt-5">
            {token ? (
              <button className="bg-secondary w-full py-2 font-Didact-Gothic uppercase " >
                <Link to={'/account'}>my account</Link>
              </button>
            ) : (
              <button className="bg-secondary w-full py-2 font-Didact-Gothic uppercase ">
                Login | sign up
              </button>
            )}
          </div>
          <ul className=" w-full flex flex-col  items-end  font-Didact-Gothic child:border-b child:border-b-text-color text-text-color  child:py-2  px-4 child:w-full text-sm text-right tracking-widest uppercase  ">
            <li className="hover:text-secondary">
              <Link to={"/"}>home</Link>
            </li>
            <li className="hover:text-secondary">
              <Link to={"/about"}>about</Link>
            </li>
            <li className="hover:text-secondary">serivces</li>
            <li className="hover:text-secondary">projects</li>
            <li className="hover:text-secondary">
              <span onClick={() => setShowDropDown(!showDropDown)}>pages</span>
              <ul
                className={`flex flex-col  ${
                  showDropDown
                    ? "h-auto  py-5 pr-4"
                    : "h-0 py-0 overflow-hidden -z-20"
                }  transition-all gap-y-4`}
              >
                <li>
                  <Link to={"/price"}>pricing</Link>
                </li>
                <li>
                  <Link to={"/process"}>process</Link>
                </li>
                <li>
                  <Link to={"/*"}>404</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to={"/blogs"}>Blogs</Link>
            </li>
            <li>caontact</li>
          </ul>
        </nav>

        {/* Mobile Nav Button  */}
        <div
          onClick={() => setSideBar(true)}
          className="child:w-5  lg:hidden  child:h-[1px] h-auto child:bg-secondary child:mt-2 flex-col "
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      {/* Logo NavBar */}
      <div>
        <Link to={"/"}>
          <div
            className={`flex flex-col items-start transition-all lg:px-10 ${
              scroll > 150 ? "lg:py-1" : "lg:py-10"
            }   lg:bg-primary   `}
          >
            <img
              className="w-20 md:w-24 lg:w-20  "
              src="/images/logo.png"
              alt="logo"
            />
            <div
              className={`hidden ${
                scroll > 150 ? "hidden" : "lg:inline-block"
              } uppercase`}
            >
              <h4 className="text-secondary  text-5xl ">bauen</h4>
              <span className="text-xs text-center block">innovate design</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
