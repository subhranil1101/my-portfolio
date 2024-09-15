import { slugs } from "../User";
import IconCloud from "./magicui/icon-cloud";
import { IconHexagon } from "@tabler/icons-react";
const Loader = () => {
      return (
            <div  data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000" data-aos-easing="ease-in-out" className="relative flex h-full w-full items-center justify-center px-20 pb-20 pt-8 ">
                  <IconCloud iconSlugs={slugs} />
                  <IconHexagon className="absolute -z-10  " color="#64FFDA" size={100} stroke={1}/>
                  <div className=" absolute text-4xl font-mono font-bold text-primaryColor -z-10">SD</div>
            </div>
      );
}

export default Loader;