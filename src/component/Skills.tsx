import React from 'react'
import {  SKillInfo } from '../User'
import SkillCard from './SkillCard'

const Skills = () => {
      return (
            <div className="px-32 lxl-mx:px-20 ml-16 lxl-mx:ml-12 my-10 md-mx:my-5 md-mx:m-auto md-mx:pl-16 md-mx:pr-14  font-mono" id="Skills">
                  <h1 className="text-4xl sm-mx:text-3xl flex justify-center text-white font-bold my-5">
                        <span className="text-primaryColor">03.&nbsp;</span>Skills
                  </h1>
                  <div className='flex flex-wrap xs-mx:flex-col xs-mx:items-center xs-mx:justify-center justify-center gap-10 md-mx:gap-5'>
                        {
                              SKillInfo.map((skill: any, index: number) => <SkillCard key={index} title={skill.title} skills={skill.skills} />)
                        }
                  </div>
            </div>
      )
}

export default Skills
