import { ProjectInfo } from "../User";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className=" 2xl-mx:px-20 2xl-mx:mx-auto 2xl-mx:ml-5 2xl-mx:place-self-auto md-mx: md-mx:px-14 md-mx:mr-5 sm-mx:pl-4 sm-mx:pr-3 sm-mx:mx-14  lg-mx:pl-10 bs-mx:pl-7 lg-mx:pr-16 ml-16 lg-mx:ml-12 bs-mx:ml-8  my-6 font-mono" id="Projects">
      <h1 className="text-4xl sm-mx:text-2xl flex justify-center text-white font-bold my-5">
        <span className="text-primaryColor ">02.&nbsp;</span>Projects
      </h1>
      <div className="flex flex-wrap justify-center w-full gap-8 sm-mx:gap-4 xl-mx:gap-5 ">
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
