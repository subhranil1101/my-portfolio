import { ProjectInfo } from "../User";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="px-32 ml-16 my-4 font-mono">
      <h1 className="text-4xl flex justify-center text-white font-bold my-3">
        <span className="text-primaryColor">02.&nbsp;</span>Projects
      </h1>
      <div className="flex flex-wrap justify-center gap-11">
        {ProjectInfo.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            desc={project.desc}
            image={project.image}
            live={project.live}
            link={project.link}
            technologies={project.technologies}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
