import ProjectCard from "@/components/project-card";
import { CONSTITUENT_IMAGES } from "@/assets/constituent";

const projectData = [
  {
    title: "Constituent",
    description:
      "Know your reps. Make your voice heard. Existing civic tools are often clunky and fragmented, making it hard for people to find clear information, contact their representatives, or keep up with issues that matter to them. Constituent is a digital platform that helps people look up their representatives, contact them directly, and take action on the issues they care about.",
    roles: ["Technical Lead", "Fullstack Engineer", "DevOps Engineer"],
    links: [],
    images: CONSTITUENT_IMAGES,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="px-8 min-h-screen flex flex-col justify-start bg-tahini"
    >
      {/* Headline */}
      <h1 className="my-8 text-stone-900 -tracking-widest font-extralight text-center text-8xl font-lora-italic lg:my-20">
        Projects
      </h1>

      {/* Description */}
      <ul className="flex flex-col list-none p-0 mb-16">
        {projectData.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            description={project.description}
            roles={project.roles}
            images={project.images}
          />
        ))}
      </ul>
    </section>
  );
};

export default Projects;
