"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("/");
  const [openHamburger, setOpenHamburger] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only show when scrolling up
      if (currentScrollY < lastScrollY) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`
       fixed top-0 left-0 w-full z-50   bg-black text-white 
        transition-transform duration-300 ease-in-out
        ${visible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <nav className="flex justify-between container  py-4 md:py-4">
        <div className=" flex w-full items-center justify-between">
          <Link
            href={"/"}
            className=" font-bold text-3xl relative overflow-hidden group "
            onClick={() => setActiveLink("/")}
          >
            <span className="inline-block w-fit transition-transform duration-300 text-2xl md:text-3xl group-hover:scale-105">
              SUMAN
            </span>
          </Link>
          <div
            className="md:hidden block z-50"
            onClick={() => setOpenHamburger(!openHamburger)}
          >
            {openHamburger ? (
              <RxCross1 className="text-2xl md:text-3xl" />
            ) : (
              <GiHamburgerMenu className="text-2xl md:text-3xl" />
            )}
          </div>
        </div>

        <ul
          className={`flex flex-col md:flex-row justify-center w-full md:w-auto items-center py-8 md:py-4 absolute left-0 md:static top-[49px] md:top-0 bg-black  gap-8 md:gap-10 text-xl transition-all duration-500  ${
            openHamburger
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }`}
        >
          {[
            { name: "Home", path: "/" },
            { name: "Skills", path: "#skills" },
            { name: "Projects", path: "#projects" },
            { name: "Contact", path: "#contact" },
          ].map((link) => (
            <li
              key={link.name}
              onClick={() => {
                setOpenHamburger(false);
              }}
            >
              <Link
                href={link.path}
                className={`font-bold text-lg md:text-xl relative overflow-hidden group transition-colors duration-300 hover:text-gray-300 ${
                  activeLink === link.path ? "text-gray-300" : ""
                }`}
                onClick={() => setActiveLink(link.path)}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300 ${
                    activeLink === link.path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
