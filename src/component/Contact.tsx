import FloatingInput from "./FloatingInput"
import { useState } from "react"
import { Button, useMatches } from '@mantine/core';
import { IconMessageFilled, IconArrowRight, IconAffiliate } from '@tabler/icons-react';
import { validateForm } from "./Validation";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase";
import toast from "react-hot-toast";



const Contact = () => {
      const ico = useMatches({
            xs: 15,
            sm: 25,
            xl: 35
      })
      const sico = useMatches({
            xs: 10,
            sm: 15,
            xl: 20
      })
      const btn = useMatches({
            xs: 'xs',
            sm: 'sm',
            md: 'md',
            lg: 'lg'
      })

      const form = {
            name: '',
            email: '',
            mobile: '',
            message: ''
      }

      const [formData, setFormData] = useState<{ [key: string]: string }>(form)
      const [formError, setFormError] = useState<{ [key: string]: string }>(form)

      const handleChange = (id: string, value: string) => {
            setFormData({ ...formData, [id]: value })
            setFormError({ ...formError, [id]: validateForm(id, value) })
      }

      const handleSubmit = async () => {
            let valid = true;
            let newFormError: { [key: string]: string } = {}
            for (let key in formData) {
                  const error = validateForm(key, formData[key])
                  if (error.length > 0) {
                        newFormError[key] = error;
                        valid = false;
                  }
            }
            setFormError(newFormError)
            if (valid) {
                  setFormData(form)
                  toast.success('Submitted Successfully.', { duration: 3000 });
                  await addDoc(collection(db, "portfolio"), formData)

            }
            else {
                  toast.error('Some error occurred!', { duration: 3000 })
            }
      }


      return (
            <div className="px-32 ml-16 md-mx:pl-7 md-mx:pr-20 xs-mx:pl-16 xs-mx:pr-[60px] xs-mx:ml-auto  mb-16 pb-12  font-mono" id="Contact">
                  <h1 className="text-4xl sm-mx:text-2xl flex justify-center text-white font-bold pt-8 my-8 sm-mx:pt-5">
                        <span className="text-primaryColor">05.&nbsp;</span>Contact Me
                  </h1>
                  <div data-aos="fade-up" data-aos-duration="500" className="  flex flex-col  gap-3 border-2  border-primaryColor rounded-3xl w-[90%] md-mx:w-full m-auto shadow-[0_0_6px_0_#64FFDA]">
                        <div className=" flex items-center gap-2 text-4xl bs-mx:text-2xl xs-mx:text-lg font-bold font-mono ml-8 xs-mx:m-auto  text-white p-3 bs-mx:py-2">Let's Connect <IconAffiliate size={ico} /></div>
                        <div className="flex flex-col gap-7 bs-mx:gap-6 mb-3 w-[90%] m-auto">
                              <FloatingInput id='name' name='Enter your Name' value={formData.name} handleChange={handleChange} error={formError.name} />
                              <FloatingInput id='email' name='Enter your Email' value={formData.email} handleChange={handleChange} error={formError.email} />
                              <FloatingInput id='mobile' name='Enter your Mobile No.' value={formData.mobile} handleChange={handleChange} error={formError.mobile} />
                              <FloatingInput id='message' name='Enter your Message' value={formData.message} handleChange={handleChange} error={formError.message} />
                        </div>
                        <Button
                              onClick={handleSubmit}
                              className="!text-2xl bs-mx:!text-xl !w-60 xs-mx:!w-fit xs-mx:!px-4 xs-mx:!h-9 !text-primaryColor !mb-6 !mx-auto !rounded-3xl"
                              size={btn}
                              color="teal"
                              variant="light"
                              leftSection={<IconMessageFilled size={sico} />}
                              rightSection={<IconArrowRight size={sico} />}
                        >
                              Send
                        </Button>
                  </div>
            </div>
      )
}

export default Contact
