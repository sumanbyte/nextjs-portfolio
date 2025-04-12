"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("/");
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
        fixed top-0 left-0 w-full z-50 bg-black text-white 
        transition-transform duration-300 ease-in-out
        ${visible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <nav className="flex justify-between container mx-auto py-6">
        <Link
          href={"/"}
          className="font-bold text-3xl relative overflow-hidden group"
          onClick={() => setActiveLink("/")}
        >
          <span className="inline-block transition-transform duration-300 group-hover:scale-105">
            SUMAN
          </span>
        </Link>
        <ul className="flex gap-10 text-xl">
          {[
            { name: "Home", path: "/" },
            { name: "Skills", path: "#skills" },
            { name: "Projects", path: "#projects" },
            { name: "Contact", path: "#contact" },
          ].map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className={`font-bold relative overflow-hidden group transition-colors duration-300 hover:text-gray-300 ${
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
