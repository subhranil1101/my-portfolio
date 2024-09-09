import { Button } from '@mantine/core'
import { Info } from '../User'
import { useState, useEffect } from 'react'
import Typewriter from 'typewriter-effect'
//@ts-ignore
import DOTS from 'vanta/dist/vanta.dots.min'
//@ts-ignore
import TRUNK from 'vanta/dist/vanta.trunk.min'
const About = () => {

      const [dots, setDots] = useState<any>(null)
      const [trunk, setTrunk] = useState<any>(null)
      useEffect(() => {
            if (!dots) {
                  setDots(DOTS({
                        el: '#bg',
                        mouseControls: true,
                        touchControls: true,
                        gyroControls: false,
                        minHeight: 200.00,
                        minWidth: 200.00,
                        scale: 1.00,
                        scaleMobile: 1.00,
                        color: 0x64FFDA,
                        color2: 0x204AFF,
                        backgroundColor: 0x0A192F,
                        size: 3,
                        spacing: 20.00,
                        showLines: false
                  }))
            }

            if (!trunk) {
                  setTrunk(TRUNK({
                        el: "#photo",
                        mouseControls: true,
                        touchControls: true,
                        gyroControls: false,
                        minHeight: 200.00,
                        minWidth: 200.00,
                        scale: 1.00,
                        scaleMobile: 1.00,
                        color: 0x64FFDA,
                        backgroundColor: 0x0A192F,
                        spacing: 3.00,
                        chaos: 2.50
                  }))
            }
            return () => {
                  if (dots) dots.destroy()
                  if (trunk) trunk.destroy()
            }
      },
            // eslint-disable-next-line
            [])

      return (
            <div className='flex justify-center items-center font-mono overflow-hidden px-24 h-[80vh] mt-5' id='bg'>
                  <div className='ml-16 w-3/5 flex flex-col'>
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
                        <Button component='a' href='https://www.google.com' target='_blank' className='!text-bgColor !w-fit ' variant="filled" color="#64FFDA" size="md" radius="lg">Check Resume</Button>
                  </div>
                  <div id='photo' className='h-[50vh] w-[25vw] rounded-full overflow-hidden flex justify-center items-center'>
                        <img className='w-[90%] rounded-full' src="photo.jpeg" alt="dp" />
                  </div>
            </div>
      )
}

export default About
