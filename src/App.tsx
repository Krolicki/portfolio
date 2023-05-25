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
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const gitRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const refs : Refs = {
    hero: heroRef,
    about: aboutRef,
    projects: projectsRef,
    github: gitRef,
    contact: contactRef
  }

  const handleScroll = throttle(() => {
      setScroll(window.scrollY)
  }, 10)
  
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
        <div className='content-container'>
          <Navbar globalScroll={scroll} scrollToComponent={scrollToComponent}/>
          <About globalScroll={scroll} ref={aboutRef}/>
          <Projects ref={projectsRef}/>
          <GitHub ref={gitRef}/>
          <Contact ref={contactRef}/>
          <Footer />
        </div>
      }
    </>
  )
}

export default App
