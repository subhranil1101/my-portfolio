import React from 'react'
import {  SKillInfo } from '../User'
import SkillCard from './SkillCard'

const Skills = () => {
      return (
            <div className="px-32 ml-16 my-10 font-mono" id="Skills">
                  <h1 className="text-4xl flex justify-center text-white font-bold my-5">
                        <span className="text-primaryColor">03.&nbsp;</span>Skills
                  </h1>
                  <div className='flex flex-wrap justify-center gap-10'>
                        {
                              SKillInfo.map((skill: any, index: number) => <SkillCard key={index} title={skill.title} skills={skill.skills} />)
                        }
                  </div>
            </div>
      )
}

export default Skills
