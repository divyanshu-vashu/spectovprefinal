import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
	const user = localStorage.getItem("token");
  //const username = localStorage.getItem("name");
  //alert(username)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }; 

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } fixed top-0 z-20 flex w-full items-center py-5 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="h-9 w-9 object-contain" />
          <p className="flex cursor-pointer text-[18px] font-bold text-black">
            SpectoV &nbsp;
            <span className="hidden sm:block"> | </span>
          </p>
        </Link>

        <ul className="hidden list-none flex-row gap-10 sm:flex">
          <li
            className={`${
              active === "Product" ? "text-red-500" : "text-black"
            } cursor-pointer text-[18px] font-medium hover:text-red-500`}
            onClick={() => setActive("Product")}
            
          >
            <Link to={user?"/page":"/careers"} className="block px-3 py-1 text-inherit" >
              Careers
            </Link>
          </li>
          <li
            className={`${
              active === "Product" ? "text-red-500" : "text-black"
            } cursor-pointer text-[18px] font-medium hover:text-red-500`}
            onClick={() => setActive("Product")}
          >
            <Link to="/products" className="block px-3 py-1 text-inherit">
              Product
            </Link>

          </li>
          <li
            className={`${
              active === "Product" ? "text-red-500" : "text-black"
            } cursor-pointer text-[18px] font-medium hover:text-red-500`}
            onClick={() => setActive("Product")}
            style={{display:"none"}}

          >
            <Link to="/login" className="block px-3 py-1 text-inherit" >
              login
            </Link>

          </li>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-red-500" : "text-black"
              } cursor-pointer text-[18px] font-medium hover:text-red-500`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`} className="block px-3 py-1">
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-1 items-center justify-end sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="h-[28px] w-[28px] cursor-pointer object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl bg-white p-6 shadow-lg`}
          >
            <ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">
            
            <li
                className={`font-poppins cursor-pointer text-[16px] font-medium ${
                  active === "Careers" ? "text-white" : "text-secondary"
                }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive("Careers");
                }}
              >
                <Link to={user?"/page":"/careers"} className="block px-3 py-1">
                  Careers
                </Link>

              </li>

              <li
                className={`font-poppins cursor-pointer text-[16px] font-medium ${
                  active === "Product" ? "text-white" : "text-secondary"
                }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive("Product");
                }}
              >
                <Link to="/products" className="block px-3 py-1">
                  Product
                </Link>

              </li>
              <li                className={`font-poppins cursor-pointer text-[16px] font-medium ${
                  active === "Product" ? "text-white" : "text-secondary"
                }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive("Product");
                }}
            style={{display:"none"}}

          >
            <Link to="/login" className="block px-3 py-1 text-inherit" >
              login
            </Link>

          </li>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins cursor-pointer text-[16px] font-medium ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`} className="block px-3 py-1">
                    {nav.title}
                  </a>
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
