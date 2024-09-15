import { Button } from '@mantine/core'
import { Info } from '../User'
import Typewriter from 'typewriter-effect'
import { useDisclosure } from '@mantine/hooks'
import ResumeViewer from './ResumeViewer'
import { IconDownload, IconArrowRight } from '@tabler/icons-react';
import Particles from './magicui/Particles'
import { NeonGradientCard } from './magicui/neon-gradient-card'


const About = () => {
      const [opened, { open, close }] = useDisclosure(false)
      return (
            <div >
                  <div className='flex relative justify-center items-center font-mono overflow-hidden px-24 h-[80vh] mt-5' >
                        <Particles
                              className="absolute inset-0 -z-10"
                              quantity={1000}
                              ease={80}
                              vx={.1}
                              vy={.1}
                              color='#64FFDA'
                              refresh
                        />
                        <div data-aos="fade-right" data-aos-duration="800" className='ml-16 w-3/5 flex flex-col'>
                              <div className='text-4xl text-primaryColor'>Hi, I am</div>
                              <div className='text-7xl text-white tracking-widest font-semibold italic py-2'>{Info.name}</div>
                              <div className=' flex items-center text-4xl text-white py-3'>I'm a&nbsp;<span className='text-5xl text-primaryColor'><Typewriter
                                    options={{
                                          strings: Info.stack,
                                          autoStart: true,
                                          loop: true,
                                    }}
                              /></span></div>
                              <div className='text-gray-300 font-mono text-xl w-[82%] my-4 text-justify font-semibold italic'>{Info.about}</div>
                              <div className='flex gap-4 mt-10'>
                                    <Button
                                          className='!text-bgColor !w-fit '
                                          onClick={open}
                                          color="#64FFDA"
                                          size="md" radius="lg"
                                          variant="filled"
                                          rightSection={<IconArrowRight size={14} />}
                                    >
                                          Check Resume
                                    </Button>
                                    <Button className='!text-primaryColor' component='a' href='/Resume_Subhranil Das.pdf' download={Info.name} variant="outline" size="md" radius="lg" rightSection={<IconDownload size={20} />}>Download</Button>
                              </div>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="800"  className='h-fit w-fit rounded-full  flex justify-center items-center'>
                        <NeonGradientCard className="w-[375px] h-[375px] items-center justify-center text-center">
                              <img className='w-full h-full rounded-full' src="photo.jpeg" alt="dp" />
                        </NeonGradientCard>
                        </div>
                  </div>
                  <ResumeViewer opened={opened} close={close} />
            </div>
      )
}

export default About