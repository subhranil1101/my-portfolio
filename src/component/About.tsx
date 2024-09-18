import { Button, useMatches } from '@mantine/core'
import { Info } from '../User'
import Typewriter from 'typewriter-effect'
import { useDisclosure } from '@mantine/hooks'
import ResumeViewer from './ResumeViewer'
import { IconDownload, IconArrowRight } from '@tabler/icons-react';
import Particles from './magicui/Particles'
import { NeonGradientCard } from './magicui/neon-gradient-card'


const About = () => {
      const [opened, { open, close }] = useDisclosure(false)
      const btn = useMatches({
            xs:'xs',
            sm:'sm',
            md:'md',
            lg:'lg'
      })
      return (
            <div >
                  <div className='flex md-mx:flex-col-reverse md-mx:h-fit md-mx:pt-5 xs-mx:pt-0 md-mx:overflow-visible  relative md-mx:gap-6 justify-around lg-mx:justify-center xs-mx:justify-center items-center font-mono overflow-visible px-24 sm-mx:px-16 xs-mx:px-12 h-[80vh] mt-5  '>
                        <Particles className="absolute inset-0 -z-10" quantity={1000} ease={80} vx={.1} vy={.1} color='#64FFDA' refresh />
                        <div data-aos="fade-right" data-aos-duration="800" className='ml-16 xs-mx:ml-1 md-mx:ml-10 w-3/5 md-mx:w-full flex flex-col md-mx:items-start xs-mx:items-center md-mx:gap-0'>
                              <div className='text-4xl lg-mx:text-2xl xl-mx:text-3xl lxl-mx:text-2xl  xs-mx:text-lg text-primaryColor'>Hi, I am</div>
                              <div className='text-7xl lg-mx:text-4xl md-mx:text-3xl xl-mx:text-5xl lxl-mx:text-4xl xs-mx:text-2xl xs-mx:font-bold text-white tracking-widest font-semibold italic py-2 xs-mx:py-0'>{Info.name}</div>
                              <div className=' flex items-center text-4xl lg-mx:text-2xl xl-mx:text-3xl lxl-mx:text-2xl xs-mx:text-lg text-white py-3 md-mx:py-0'>I'm a&nbsp;<span className='text-5xl lg-mx:text-3xl md-mx:text-2xl xl-mx:text-4xl  lxl-mx:text-3xl xs-mx:text-lg text-primaryColor'><Typewriter
                                    options={{
                                          strings: Info.stack,
                                          autoStart: true,
                                          loop: true,
                                    }}
                              /></span></div>
                              <div className='text-gray-300 font-mono text-xl md-mx:text-sm xl-mx:text-lg lxl-mx:text-sm xs-mx:text-xs xs-mx:text-center w-[82%] md-mx:w-[95%] xs-mx:w-[87%] my-4 xs-mx:my-1 text-justify font-semibold italic'>{Info.about}</div>
                              <div className='flex  xs-mx:flex-col xs-mx:items-center xs-mx:justify-center gap-4 xs-mx:gap-2 mt-10 xs-mx:mt-4 md-mx:mt-3'>
                                    <Button
                                          className='!text-bgColor'
                                          onClick={open}
                                          color="#64FFDA"
                                          size={btn} radius="lg"
                                          variant="filled"
                                          rightSection={<IconArrowRight size={20} />}
                                    >
                                          Check Resume
                                    </Button>
                                    <Button className='!text-primaryColor !w-fit' component='a' href='Resume_Subhranil Das.pdf' download={Info.name} variant="outline" size={btn} radius="lg" rightSection={<IconDownload size={20} />}>Download</Button>
                              </div>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="800" className='h-fit w-fit rounded-full  flex justify-center items-center z-0'>
                              <NeonGradientCard className="lg-mx:w-64 lg-mx:h-64 md-mx:w-52 md-mx:h-52 xs-mx:w-36 xs-mx:h-36 w-[375px] h-[375px]  items-center justify-center text-center">
                                    <img className='w-full h-full rounded-full' src="photo.jpeg" alt="dp" />
                              </NeonGradientCard>
                        </div>
                  </div>
                  <ResumeViewer opened={opened} close={close} />
            </div>
      )
}

export default About