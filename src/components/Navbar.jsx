import React, { useState } from "react";
import logo from "../assets/images/logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["Work", "Studio", "Contact"];

  return (
    <div className="relative bg-[#EFEAE3] z-20 p-6 w-full">
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        {!isMenuOpen && (
          <img src={logo} alt="Logo" className="h-16 sm:h-20 w-auto" />
        )}

        {/* Desktop Nav */}
        <ul className="hidden sm:flex gap-6">
          {navItems.map((item) => (
            <li key={item}>
              <button
                className="cursor-pointer relative w-24 h-12 border border-gray-400 rounded-3xl overflow-hidden group"
              >
                <span className="absolute inset-0 bg-black translate-y-[110%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
                <span className="relative z-10 text-zinc-800 text-sm font-bold group-hover:text-white transition-colors duration-300">
                  {item}
                </span>
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="z-20 sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <div className="flex mt-2 w-32 h-10 justify-center items-center border border-gray-400 rounded-3xl overflow-hidden group">
            <span className="relative z-10 text-zinc-800 text-base font-bold group-hover:text-white transition-colors duration-300">
              {isMenuOpen ? "× Close" : "☰ Menu"}
            </span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed top-20 left-0 w-full overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        } sm:hidden`}
      >
        <ul className="bg-[#EFEAE3] rounded-b-2xl shadow-lg flex flex-col gap-4 p-6 items-end">
          {navItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer list-none text-5xl sm:text-6xl font-black px-2 py-1 hover:text-[#FE330A] transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
