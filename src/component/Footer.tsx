import { Info } from "../User"

const Footer = () => {
  return (
    <div className=" ml-16 mb-2 font-mono text-center">
      <div className="text-3xl text-primaryColor font-bold py-3">{Info.name}</div>
      <div className="text-lg italic text-textColor">Copyright &copy; {new Date().getFullYear()} | All Rights Reserved {Info.name} </div>
    </div>
  )
}

export default Footer
