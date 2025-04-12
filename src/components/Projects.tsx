import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { ImNewTab } from "react-icons/im";
import { projectsData } from "./data/projects-data";

export default function Projects() {
  return (
    <div className="py-10">
      <p className="text-3xl pb-10">Projects</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-4">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="shadow-2xl rounded-lg flex flex-col h-full"
          >
            <div className="overflow-clip relative rounded-tl-lg rounded-tr-lg ">
              <div className="relative group">
                <Image
                  src={project.imageUrl}
                  alt="Next Ecommerce Picture"
                  height={400}
                  width={400}
                  className="w-full group-hover:scale-105  transition-all ease-linear duration-300"
                />
                <div className="absolute top-0 hover:bg-black/30 w-full h-full transition-all duration-300 ease-linear"></div>
              </div>
            </div>
            <div className="px-4 py-2 flex flex-col h-full">
              <div className="flex-1">
                <p className="text-lg font-medium">{project.name}</p>
                <p className="text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 my-2">
                  {project.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="text-xs bg-black text-white px-4 rounded-2xl py-1"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between mt-auto">
                <Link
                  target="_blank"
                  href={project.githubUrl}
                  className="flex gap-2 items-center"
                >
                  <FaGithub className="text-xl" />
                  <span>Github</span>
                </Link>
                <Link
                  target="_blank"
                  href={project.liveUrl}
                  className="flex gap-2 items-center"
                >
                  <ImNewTab className="text-xl" />
                  <span className="mb-1">Live</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
