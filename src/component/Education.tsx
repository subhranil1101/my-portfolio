import { Timeline, useMatches } from '@mantine/core';
import { IconBook2 } from '@tabler/icons-react';
import { EducationInfo } from '../User';

const TimelineItem = (items: any) => {
      const dot = useMatches({
            xs:10,
            sm:15,
            xl:30
      })
      
      return items.map((item: any, index: number) =>
            <Timeline.Item data-aos="fade-down" data-aos-duration="500" className='!pt-14 xs-mx:!pt-14 sm-mx:!px-0' key={index} bullet={ <IconBook2 size={dot} />} >
                  <div className='!shadow-[0_0_10px_0_#64FFDA50] !border-t-2 !border-b-2 !border-primaryColor p-4 sm-mx:p-1  rounded-2xl  '>
                        <div className='hover:scale-105 flex flex-col justify-start items-start px-4 sm-mx:px-2 xs-mx:px-1 sm-mx:m-auto cursor-default'>
                              <div className=' text-2xl sm-mx:text-lg xs-mx:text-sm sm-mx:gap-2 xs-mx:gap-1 sm-mx:text-balance font-bold font-mono text-primaryColor flex justify-start items-center gap-4'>
                                    <img className='w-8 sm-mx:w-6 ' src={`/icons/${item.board}.png`} alt="board" />
                                    <span>{item.title}</span>
                              </div>

                              <div className='px-12 sm-mx:px-8 xs-mx:pl-8 xs-mx:pr-0 text-2xl sm-mx:text-lg xs-mx:text-sm font-mono font-semibold text-gray-500 flex flex-col justify-start '>
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
      const dot = useMatches({
            xs:10,
            sm:15,
            xl:30
      })
      return (
            <div  className="px-32 xl-mx:px-28 lg-mx:px-0 md-mx:px-0 lg-mx:ml-10 md-mx:ml-0 xl-mx:ml-14 ml-16 mb-16 pb-12  font-mono sm-mx:px-16" id="Education">
                  <h1 className="text-4xl sm-mx:text-2xl flex justify-center text-white font-bold pt-10 my-10 sm-mx:pt-5 sm-mx:my-8 ">
                        <span className="text-primaryColor">04.&nbsp;</span>Education
                  </h1>

                  <Timeline className='w-[60%] ml-[20%] sm-mx:w-auto sm-mx:mx-auto' radius='md' active={2} bulletSize={40} lineWidth={6}>
                        {TimelineItem(EducationInfo)}
                        <Timeline.Item  bullet={<IconBook2 size={dot} />} ></Timeline.Item>
                  </Timeline>
            </div>
      )
}

export default Education
