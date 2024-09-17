import Header from './Header'
import Social from './Social'
import Mail from './Mail'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'
import Education from './Education'
import Contact from './Contact'
import Footer from './Footer'
import Loader from './Loader'
import { useState,useEffect } from 'react'
const HomePage = () => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [])
  
  return (
    <div className={`min-h-[100vh] ${loading?'flex':""} items-center justify-center overflow-hidden`}>
      {loading?<Loader/>:<>
      <Header />
      <Social />
      <Mail />
      <About/>
      <Projects/>
      <Skills/>
      <Education/>
      <Contact/>
      <Footer/>
      </>}
    </div>
  )
}

export default HomePage
