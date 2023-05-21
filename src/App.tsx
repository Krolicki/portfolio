import { useState, useEffect, useRef } from 'react'
import './App.css'
import { About } from './components/About/About'
import { Hero } from './components/Hero/Hero'
import throttle from 'lodash.throttle';
import { Projects } from './components/Projects/Projects';
import { GitHub } from './components/GitHub/GitHub';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';

type Refs = {
  [key: string]: React.RefObject<HTMLDivElement>
}

type RefName = keyof Refs;

function App() {
  const [scroll, setScroll] = useState<number | null>(null)
  const [animationCompleted, setAnimationCompleted] = useState(false)

  const heroRef = useRef<HTMLDivElement>(null);

  const refs : Refs = {
    hero: heroRef,
  }

  const handleScroll = throttle(() => {
      let value = window.scrollY
      setScroll(value)
  }, 30)

  const scrollToHero = () => {
    if (heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
  const scrollToComponent = (refName: RefName) => {
    const ref = refs[refName];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  useEffect(()=>{
      window.addEventListener('scroll', handleScroll)

      return(()=>{
          window.removeEventListener('scroll', handleScroll)
      })
    },[])

  return (
    <>
      <Hero globalScroll={scroll} setAnimationCompleted={setAnimationCompleted} ref={heroRef}/>
      {animationCompleted &&
        <>
          <Navbar globalScroll={scroll} scrollToComponent={scrollToComponent}/>
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
