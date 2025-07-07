import React, { useState } from "react";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["Work", "Studio", "Contact"];

  return (
    <div className="  bg-[#EFEAE3] z-20 p-6 w-full relative">
      <div className="flex justify-between items-center w-full">
        
        {isMenuOpen ? (
          <div className="w-20" /> 
        ) : (
          <img src={logo} alt="Logo" className="h-20 w-auto sm:block" />
        )}

        <ul className="hidden sm:flex gap-4">
          {navItems.map((item) => (
            <button
              key={item}
              className="relative w-20 h-12 border border-gray-400 rounded-3xl overflow-hidden group"
            >
              <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
              <span className="relative z-10 text-zinc-800 text-sm font-bold group-hover:text-white transition-colors duration-300">
                {item}
              </span>
            </button>
          ))}
        </ul>

        
        <button
  className="z-20 sm:hidden"
  onClick={() => setIsMenuOpen(!isMenuOpen)}
>
  <div className="flex mt-4 w-32 h-10 justify-center items-center border border-gray-400 rounded-3xl overflow-hidden group">
    <span className="relative z-10 text-zinc-800 text-base font-bold group-hover:text-white transition-colors duration-300">
      = Menu
    </span>
  </div>
</button>

      </div>

     
      <div
        className={`fixed top-20 left-0 overflow-hidden transition-all duration-500 ease-in-out w-full ${
          isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        } sm:hidden`}
      >
        <ul className="bg-[#EFEAE3]   rounded-b-2xl shadow-lg flex flex-col gap-2 p-4 items-end">
          {navItems.map((item) => (
            <li
              key={item}
              className="list-none text-6xl font-black px-4 py-2"
            >
              <h1>{item}</h1>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
