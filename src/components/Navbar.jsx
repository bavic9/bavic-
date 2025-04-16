import React, { useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} border-b-2 border-text w-full flex items-center py-5 fixed top-0 z-20 bg-deepBlue`}
    >
      <div className="w-full flex items-center justify-between text-text max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <h1 className=" text-3xl font-bold">
            Adebayo
          </h1>
        </Link>
        <ul className="list-none hidden lg:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link?.id}
              className={
                active === link?.title ? 'p-4 w-38 text-center text-lg font-semibold hover:text-white text-white'
                  : ' p-4 w-38 text-center hover:text-white text-lg font-semibold'
              }
              onClick={() => setActive(link?.title)}
            >
              <a href={`/${link?.id}`}>{link?.title}</a>
            </li>
          ))}
        </ul>

        <div className="lg:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[24px] h-[24px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6  absolute top-16 left-0 w-full h-screen bg-deepBlue z-10`}
          >
            <ul className="list-none items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link?.id}
                  className={`${active === link?.title ? "text-white" : "text-secondary"
                    } text-base font-medium cursor-pointer py-6`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link?.title);
                  }}
                >
                  <a href={`/${link?.id}`}>{link?.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


