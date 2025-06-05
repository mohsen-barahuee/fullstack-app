import React from "react";
import { Link } from "react-router-dom";

export default function DropDown({ title, items }) {
  return (
    <div className="Drop-Down ">
      <p className=" relative  hover:text-secondary flex items-center gap-x-2">
        {title}
        <svg className="w-4 h-5">
          <use href="#arrow-down"></use>
        </svg>
      </p>
      <ul className="  absolute  flex flex-col gap-y-5   bg-card-color font-Didact-Gothic text-sm py-4 pl-5 pr-28 capitalize transition-all  ">
        {items.map((items,index) => {
          return (
            <li key={index} className="hover:text-secondary">
              <Link to={items.href}>{items.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
