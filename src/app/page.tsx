import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suman Parajuli - Full Stack Developer",
  description:
    "I am a full stack developer with a passion for building scalable and efficient web applications. I have a strong background in Javascript for building intuitive and responsive user interfaces, and I am proficient in React, Next.js, and TypeScript. I am also experienced in working with databases, APIs, and backend technologies.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
