import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className='px-32 ml-16 my-4 font-mono'>
      <h1 className='text-4xl flex justify-center text-white font-bold my-3'><span className='text-primaryColor'>02.&nbsp;</span>Projects</h1>
      <div className='flex flex-wrap justify-center gap-11'>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
            <ProjectCard/>
      </div>
    </div>
  )
}

export default Projects