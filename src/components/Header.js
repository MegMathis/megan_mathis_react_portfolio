import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const handleClick = () => setMenu(!menu);

  const styles = {};

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-900 text-gray-300">
      <a href="/">
        <div className="text-4xl font-extrabold font-style: italic">
          Megan Mathis
        </div>
      </a>
      {/* nav menu */}

      <ul className="hidden md:flex">
        <li>
          <a
            href="/"
            style={
              window.location.pathname === "/"
                ? { borderBottom: "2px solid #E2E8F0" }
                : {}
            }
          >
            About Me
          </a>
        </li>

        <li>
          <a
            href="/portfolio"
            style={
              window.location.pathname === "/portfolio"
                ? { borderBottom: "2px solid #E2E8F0" }
                : {}
            }
          >
            Portfolio
          </a>
        </li>

        <li>
          <a
            href="/resume"
            style={
              window.location.pathname === "/resume"
                ? { borderBottom: "2px solid #E2E8F0" }
                : {}
            }
          >
            Resume
          </a>
        </li>

        <li>
          <a
            href="/contact"
            style={
              window.location.pathname === "/contact"
                ? { borderBottom: "2px solid #E2E8F0" }
                : {}
            }
          >
            Contact
          </a>
        </li>
      </ul>

      {/* 4 horizonal line thing - fabars and an x faTimes */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!menu ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          !menu
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <a href="/">About Me</a>
        </li>
        <li className="py-6 text-4xl">
          <a href="/resume">Resume</a>
        </li>
        <li className="py-6 text-4xl">
          <a href="/portfolio">Portfolio</a>
        </li>
        <li className="py-6 text-4xl">
          <a href="/contact">Contact Me</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
