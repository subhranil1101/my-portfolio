import { ProjectInfo } from "../User";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="px-32 sm-mx:pl-4 sm-mx:pr-3 sm-mx:mx-0 lg:m-auto lg-mx:pl-10 lg-mx:pr-12 ml-16 lg-mx:ml-12  my-6 font-mono" id="Projects">
      <h1 className="text-4xl sm-mx:text-2xl flex justify-center text-white font-bold my-5">
        <span className="text-primaryColor ">02.&nbsp;</span>Projects
      </h1>
      <div className="flex flex-wrap justify-center gap-10 sm-mx:gap-4 xl-mx:gap-6">
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
