import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin } from "@tabler/icons-react";
import React from "react";

const Social = () => {

  const socialLinks = [{
    link:'https://github.com/subhranil1101',
    icon:IconBrandGithub
  },
  {
    link:'https://www.linkedin.com/in/subhranil-das-b29128231',
    icon:IconBrandLinkedin
  },
  {
    link:'https://leetcode.com/u/subhranil11/',
    icon:IconBrandLeetcode
  },
  {
    link:'https://www.facebook.com/subhranil.das.507/',
    icon:IconBrandFacebook
  },
  {
    link:'https://www.instagram.com/_.subhra._.nil._/',
    icon:IconBrandInstagram
  }
]

  const socialIcons = socialLinks.map((socialLink) => {
    return <a href={`${socialLink.link}`} target="_blank" rel="noreferrer" className="text-textColor flex flex-col gap-5 font-mono text-lg hover:cursor-pointer hover:font-medium hover:text-primaryColor letter tracking-widest hover:-translate-x-2 transition transform duration-150 ease-in-out -rotate-90">
        <socialLink.icon size={30}/>
      </a>
  }
  )


  return (
    <div className="flex  gap-4 items-center fixed bottom-[178px] -left-[195px]  rotate-90">
      {socialIcons}
      <hr className="border-[1px] bg-textColor rounded-full border-textColor text-textColor w-72" />
    </div>
  );
};


export default Social;
