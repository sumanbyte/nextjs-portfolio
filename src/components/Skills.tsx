const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Git",
  "GitHub",
  "Figma",
];

export default function Skills() {
  return (
    <div id="skills">
      <p className="text-3xl">Skills</p>
      <div className="flex flex-wrap gap-x-10 gap-y-4 pt-10">
        {skills.map((skill) => (
          <div
            key={skill}
            className="text-base bg-black text-white px-4 py-2 rounded-2xl"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
