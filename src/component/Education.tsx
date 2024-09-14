import { Timeline } from '@mantine/core';
import { IconBook2 } from '@tabler/icons-react';
import { EducationInfo } from '../User';

const TimelineItem = (items: any) => {
      return items.map((item: any, index: number) =>
            <Timeline.Item className='!pt-14' key={index} bullet={ <IconBook2 size={30} />} >
                  <div className='!shadow-[0_0_10px_0_#64FFDA50] !border-t-2 !border-b-2 !border-primaryColor p-4 rounded-2xl  '>
                        <div className='hover:scale-105 flex flex-col justify-start items-start px-4 cursor-default'>
                              <div className=' text-2xl font-bold font-mono text-primaryColor flex justify-start items-center gap-4'>
                                    <img className='w-8' src={`/icons/${item.board}.png`} alt="board" />
                                    <span>{item.title}</span>
                              </div>

                              <div className='px-12 text-2xl font-mono font-semibold text-gray-500 flex flex-col justify-start '>
                                    {item.subject && <span> Stream: <span className='text-gray-300'>{item.subject}</span></span>}
                                    <span>Year: <span className='text-gray-300'>{item.yop}</span></span>
                                    <span>Grade: <span className='text-gray-300'>{item.grade}</span></span>
                              </div>
                        </div>
                  </div>
            </Timeline.Item>
      )
}

const Education = () => {
      return (
            <div className="px-32 ml-16 mb-16 pb-12  font-mono" id="Education">
                  <h1 className="text-4xl flex justify-center text-white font-bold pt-10 my-10">
                        <span className="text-primaryColor">04.&nbsp;</span>Education
                  </h1>

                  <Timeline className='w-[60%] ml-[20%] ' radius='md' active={2} bulletSize={40} lineWidth={6}>
                        {TimelineItem(EducationInfo)}
                        <Timeline.Item bullet={<IconBook2 size={30} />} ></Timeline.Item>
                  </Timeline>
            </div>
      )
}

export default Education
