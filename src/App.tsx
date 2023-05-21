import { useState, useEffect } from 'react'
import './App.css'
import { About } from './components/About/About'
import { Hero } from './components/Hero/Hero'
import throttle from 'lodash.throttle';
import { Projects } from './components/Projects/Projects';
import { GitHub } from './components/GitHub/GitHub';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  const [scroll, setScroll] = useState<number | null>(null)
  const [animationCompleated, setAnimationCompleated] = useState(false)

  const handleScroll = throttle(() => {
      let value = window.scrollY
      setScroll(value)
  }, 30)

  useEffect(()=>{
      window.addEventListener('scroll', handleScroll)

      return(()=>{
          window.removeEventListener('scroll', handleScroll)
      })
    },[])

  return (
    <>
      <Hero globalScroll={scroll} setAnimationCompleated={setAnimationCompleated}/>
      {animationCompleated &&
        <>
          <Navbar globalScroll={scroll}/>
          <About globalScroll={scroll}/>
          <Projects />
          <GitHub />
          <Contact />
          <Footer />
        </>
      }
    </>
  )
}

export default App
