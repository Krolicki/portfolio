import { useState, useEffect } from 'react'
import './App.css'
import { About } from './components/About/About'
import { Hero } from './components/Hero/Hero'
import throttle from 'lodash.throttle';
import { Projects } from './components/Projects/Projects';

function App() {
  const [scroll, setScroll] = useState<number | null>(null)
  const [animationCompleated, setAnimationCompleated] = useState(false)

  const handleScroll = throttle(() => {
      let value = window.scrollY
      setScroll(value)
  }, 100)

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
          <About globalScroll={scroll}/>
          <Projects />
        </>
      }
    </>
  )
}

export default App
