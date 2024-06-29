import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;
const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <>
      <div className="container px-5 sm:px-10 mx-auto flex justify-between items-center py-5 pt-8">
        <div className="flex gap-8 items-center">
          <h1 className="capitalize text-[32px] text-[var(--bg-gray-03)] font-extrabold ">
            shortly
          </h1>
          {/* desktop navbar */}
          <ul className="hidden sm:flex flex-row gap-4 pt-2">
            <li className="capitalize text-[var(--bg-gray-02)] text-[16px] font-medium cursor-pointer hover:text-[var(--bg-gray-04)] transition-all ease-linear duration-100 hover:font-extrabold">
              features
            </li>
            <li className="capitalize text-[var(--bg-gray-02)] text-[16px] font-medium cursor-pointer hover:text-[var(--bg-gray-04)] transition-all ease-linear duration-100 hover:font-extrabold">
              pricing
            </li>
            <li className="capitalize text-[var(--bg-gray-02)] text-[16px] font-medium cursor-pointer hover:text-[var(--bg-gray-04)] transition-all ease-linear duration-100 hover:font-extrabold">
              resources
            </li>
          </ul>
          {/* end desktop navbar */}
        </div>
        {/* login - singUp desktop  */}
        <div className="hidden sm:flex gap-8 items-center">
          <span className="capitalize text-[var(--bg-gray-02)] text-[16px] font-medium cursor-pointer hover:text-[var(--bg-gray-04)] transition-all ease-linear duration-100">
            login
          </span>
          <button className="uppercase bg-[var(--bg-cyan)] rounded-2xl px-5 text-[14px] py-2 text-white font-medium hover:bg-[var(--bg-cyan-hover)] transition-all ease-linear duration-100">
            sign Up
          </button>
        </div>
        {/* end login - singUp desktop  */}
        {/* mobile navbar */}
        <div className="mobile sm:hidden">
          <div className="relative group">
            <div
              className="pr-2 text-center text-[35px] text-[var(--bg-gray-02)] font-light cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              onMouseEnter={() => setMenuOpen(true)}
              onMouseLeave={() => setMenuOpen(false)}
            >
              <FontAwesomeIcon icon={faBars} />
            </div>
            {/* Conditional rendering based on the menuOpen state */}
            {menuOpen && (
              <div className="absolute right-[-5px] mt-2 w-[290px] text-white font-medium shadow-lg rounded-lg py-2 z-[2] bg-[var(--bg-dark-violet)] px-2 gap-2">
                {/* Replace this with your actual navigation items */}
                <a href="#" className="block px-4 py-2 capitalize text-center">
                  Features
                </a>
                <a href="#" className="block px-4 py-2 capitalize text-center">
                  Pricing
                </a>
                <a href="#" className="block px-4 py-4 capitalize text-center">
                  Resources
                </a>
                <hr />
                <div className="flex gap-3 flex-col p-3 py-5 justify-center items-center"> 
                  {" "}
                  <a href="">Login</a>
                  <button className="capitalize font-extrabold text-[18px] rounded-full w-full py-2 text-white bg-[var(--bg-cyan)]">
                    sign up
                  </button>
                 </div>
              </div>
            )}
          </div>
        </div>
        {/*end mobile navbar */}
      </div>
    </>
  );
};

export default Navbar;
// <div className="pr-2 text-center text-[35px] text-[var(--bg-gray-02)] font-light">
//   <FontAwesomeIcon icon={faBars} />
// </div>;
