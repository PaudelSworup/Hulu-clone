import React from "react";
import request from "../utils/request";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  return (
    <nav className="relative">
      <div className="flex p-5 px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide ">
        {Object.entries(request).map(([key, { url, title }]) => {
          return (
            <h2
              onClick={() => router.push(`/?genre=${key}`)}
              className="last:pr-24 cursor-pointer transation duration-100 transform hover:scale-125  hover:text-white active:text-red-500"
              key={key}
            >
              {title}
            </h2>
          );
        })}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-20 w-1/12" />
    </nav>
  );
};

export default Nav;
