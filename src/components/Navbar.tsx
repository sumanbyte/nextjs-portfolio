"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("/");

  return (
    <header className="bg-black">
      <nav className="flex justify-between container text-white py-10">
        <Link
          href={"/"}
          className="font-bold text-3xl relative overflow-hidden group"
          onClick={() => setActiveLink("/")}
        >
          <span className="inline-block transition-transform duration-300 group-hover:transform group-hover:scale-105">
            SUMAN
          </span>
        </Link>
        <ul className="flex justify-between gap-10 text-xl">
          {[
            { name: "Home", path: "/" },
            { name: "Skills", path: "/skills" },
            { name: "Projects", path: "/projects" },
            { name: "Contact", path: "/contact" },
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
