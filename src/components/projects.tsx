import ProjectCard from "@/components/project-card"

const projectData = [
  {
    title: "Constituent",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    roles: ["Technical Lead", "Fullstack Engineer", "DevOps"]
  },
  // Add more projects as needed
]


const Projects = () => {
  return (
    <section id="projects" className="px-8 min-h-screen flex flex-col justify-start bg-tahini">
      {/* Headline */}
      <h1 className="my-20 text-stone-900 tracking-tighter font-extralight text-center text-9xl font-playfair-display">Projects</h1>

      {/* Description */}
      <ul className="flex flex-col list-none p-0">
        {projectData.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            description={project.description}
            roles={project.roles}
          />
        ))}
      </ul>
    </section>
  )
}

export default Projects