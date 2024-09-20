import { Avatar, useMatches } from '@mantine/core';

const SkillBadge = (skills: []) => {
      const logo = useMatches({
            xs:'xs',
            sm:'sm',
            md:'md',
      })

      return skills.map((skill: any, index: number) => {
            return (
                  <div key={index} className='flex items-center gap-1 px-2 xs-mx:px-1 py-1 xs-mx:py-0.5 rounded-full border border-primaryColor'>
                        <Avatar className='!rounded-full' variant="transparent" radius={logo} src={`icons/${skill}.png`} />
                        <div className='text-textColor hover:text-primaryColor hover:font-bold font-medium text-xl lg-mx:text-lg sm-mx:text-sm sm-mx:font-semibold'>{skill}</div>
                  </div>)
      })
}
const SkillCard = (props: any) => {
      return (
            <div data-aos="fade-down" data-aos-duration="500" className='w-[45%] xs-mx:w-[90%]  shadow-[0_0_10px_0_#64FFDA50] hover:scale-105 cursor-pointer border-2 border-primaryColor p-2 rounded-lg font-mono'>
                  <div className='text-3xl lg-mx:text-2xl text-center text-white font-extrabold my-2'>{props.title}</div>
                  <div className='flex justify-center flex-wrap gap-5 lg-mx:gap-3 m-4 bs-mx:gap-2 bs-mx:m-2'>{SkillBadge(props.skills)}</div>
            </div>
      )
}

export default SkillCard
