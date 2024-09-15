import FloatingInput from "./FloatingInput"
import { useState } from "react"
import { Button } from '@mantine/core';
import { IconMessageFilled, IconArrowRight, IconAffiliate } from '@tabler/icons-react';


const Contact = () => {

      const form = {
            name: '',
            email: '',
            mobile: '',
            message: ''
      }

      const [formData, setFormData] = useState(form)
      const handleChange = (id: string, value: string) => {
            setFormData({ ...formData, [id]: value })
      }

      return (
            <div  className="px-32 ml-16 mb-16 pb-12  font-mono" id="Contact">
                  <h1 className="text-4xl flex justify-center text-white font-bold pt-8 my-8">
                        <span className="text-primaryColor">05.&nbsp;</span>Contact Me
                  </h1>
                  <div data-aos="fade-up" data-aos-duration="500" className="  flex flex-col  gap-3 border-2  border-primaryColor rounded-3xl w-[70%] m-auto shadow-[0_0_6px_0_#64FFDA]">
                        <div className=" flex items-center gap-2 text-4xl font-bold font-mono ml-8  text-white p-3">Let's Connect <IconAffiliate size={35} /></div>
                        <div className="flex flex-col gap-7 mb-3 w-[90%] m-auto">
                              <FloatingInput id='name' name='Enter your Name' value={formData.name} handleChange={handleChange} />
                              <FloatingInput id='email' name='Enter your Email' value={formData.email} handleChange={handleChange} />
                              <FloatingInput id='mobile' name='Enter your Mobile No.' value={formData.mobile} handleChange={handleChange} />
                              <FloatingInput id='message' name='Enter your Message' value={formData.message} handleChange={handleChange} />
                        </div>
                        <Button
                              className="!text-2xl !w-60 !text-primaryColor !mb-6 !mx-auto !rounded-3xl"
                              size="lg"
                              color="teal"
                              variant="light"
                              leftSection={<IconMessageFilled size={20} />}
                              rightSection={<IconArrowRight size={20} />}
                        >
                              Send
                        </Button>
                  </div>
            </div>
      )
}

export default Contact
