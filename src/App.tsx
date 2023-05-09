import { useState, useEffect } from 'react'
import './App.css'
import { About } from './components/About/About'
import { Hero } from './components/Hero/Hero'

function App() {
  const [scroll, setScroll] = useState<number | null>(null)

  const handleScroll = () => {
      let value = window.scrollY
      setScroll(value)
  }

  useEffect(()=>{
      window.addEventListener('scroll', handleScroll)

      return(()=>{
          window.removeEventListener('scroll', handleScroll)
      })
    },[])

  return (
    <>
      <Hero globalScroll={scroll}/>
      <About globalScroll={scroll}/>
    </>
  )
}

export default App
