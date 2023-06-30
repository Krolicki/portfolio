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
  const [pageLoaded, setPageLoaded] = useState(false)
  const [intersectedView, setIntersectedView] = useState<string>("")

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

  const observers : {
    observer : IntersectionObserver 
    ref: React.RefObject<HTMLDivElement>
  }[] = []

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

          observers.forEach(element => {
            if(element.observer)
              element.observer.disconnect()
          })
      })
    },[])

    useEffect(()=>{
      for(let [name, ref] of Object.entries(refs)){
        let observer = new IntersectionObserver(
          ([entry]) => {
            if(entry.isIntersecting)
              setIntersectedView(name)
          },
          { rootMargin: "-50%" }
        )
        if(ref.current)
          observer.observe(ref.current)
        observers.push( 
          {
            observer: observer,
            ref: ref
        })
      }
    },[animationCompleted])

  return (
    <>
      <Hero globalScroll={scroll} setAnimationCompleted={setAnimationCompleted} ref={heroRef}/>
      {animationCompleted &&
        <div className='content-container'>
          {pageLoaded &&
            <Navbar globalScroll={scroll} scrollToComponent={scrollToComponent} intersectedView={intersectedView}/>
          }
          <About globalScroll={scroll} ref={aboutRef}/>
          <Projects ref={projectsRef}/>
          <GitHub ref={gitRef}/>
          <Contact ref={contactRef}/>
          <Footer setPageLoaded={setPageLoaded}/>
        </div>
      }
    </>
  )
}

export default App
