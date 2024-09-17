import { Info } from "../User"

const Footer = () => {
  return (
    <div className=" ml-16 mb-2 font-mono text-center md-mx:m-auto xs-mx:w-[60%] xs-mx:pb-5">
      <div className="text-3xl sm-mx:text-xl xs-mx:text-lg text-primaryColor font-bold py-3">{Info.name}</div>
      <div className="text-lg sm-mx:text-sm xs-mx:text-xs italic text-textColor">Copyright &copy; {new Date().getFullYear()} | All Rights Reserved {Info.name} </div>
    </div>
  )
}

export default Footer
