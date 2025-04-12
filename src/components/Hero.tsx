"use client";

import Image from "next/image";
import { prefix } from "../../prefix";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="md:min-h-screen flex justify-center items-center mt-10 md:mt-0">
      <div className="flex flex-col-reverse md:flex-row items-center md:place-items-start md:justify-between py-10">
        <div className="w-full md:w-1/2 space-y-4">
          <div className="text-2xl md:text-3xl space-y-2">
            <p>Hello 👋</p>
            <p>I am Suman Parajuli - curious</p>
            <p>full stack developer based in Biratnagar, Nepal</p>
          </div>
          <p>
            I am a full stack developer with a passion for building scalable and
            efficient web applications. I have a strong background in Javascript
            for building intuitive and responsive user interfaces, and I am
            proficient in React, Next.js, and TypeScript. I am also experienced
            in working with databases, APIs, and backend technologies.
          </p>
          <div className="flex gap-4">
            <button className="bg-black hover:bg-gray-800 cursor-pointer text-white rounded-3xl px-4 py-2">
              Download CV
            </button>
            <Link
              href={"#contact"}
              className="bg-black hover:bg-gray-800 cursor-pointer text-white rounded-3xl px-4 py-2"
            >
              Get In Touch
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:justify-self-end">
          <Image
            src={`${prefix}/assets/img/myphoto.jpeg`}
            alt="Suman Parajuli Picture"
            height={400}
            width={400}
            className="rounded-full justify-self-center size-64 md:size-[400px] md:justify-self-end"
          />
        </div>
      </div>
    </section>
  );
}
