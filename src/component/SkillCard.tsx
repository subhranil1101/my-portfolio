import { Avatar } from '@mantine/core';

const SkillBadge = (skills: []) => {
      return skills.map((skill: any, index: number) => {
            return (
                  <div key={index} className='flex items-center gap-1 px-2 py-1 rounded-full border border-primaryColor'>
                        <Avatar className='!rounded-full' variant="transparent" radius="xs" src={`/icons/${skill}.png`} />
                        <div className='text-textColor hover:text-primaryColor hover:font-bold font-medium text-xl'>{skill}</div>
                  </div>)
      })
}
const SkillCard = (props: any) => {
      return (
            <div className='w-[45%]  shadow-[0_0_10px_0_#64FFDA50] hover:scale-105 cursor-pointer border-2 border-primaryColor p-2 rounded-lg font-mono'>
                  <div className='text-3xl text-center text-white font-extrabold my-2'>{props.title}</div>
                  <div className='flex justify-center flex-wrap gap-5 m-4'>{SkillBadge(props.skills)}</div>
            </div>
      )
}

export default SkillCard
