import { projectType } from './Projects'
import { useRef, useState, useEffect, TouchEventHandler  } from 'react'
import './Projects.css'

type ProjectProps = {
  project : projectType
  flip: boolean
  setPhoto:  React.Dispatch<React.SetStateAction<string | null>>
}

export const Project = ({project, flip, setPhoto} : ProjectProps) => {
    const [slidePhoto, setSlidePhoto] = useState(0)
    const slidePhotoRef = useRef(0)
    const containerRef = useRef<HTMLDivElement | null>(null)
    const observerRef = useRef<IntersectionObserver | null>(null)
    const intervalRef = useRef<number | null>(null)

    const [touchPosition, setTouchPosition] = useState<number | null>(null)

    const handleTouchStart : TouchEventHandler<HTMLSpanElement> = (e) => {
      const touchDown = e.touches[0].clientX
      setTouchPosition(touchDown)
    }

    const handleTouchMove : TouchEventHandler<HTMLSpanElement> = (e) => {
      const touchDown = touchPosition
  
      if(touchDown === null) {
          return
      }
  
      const currentTouch = e.touches[0].clientX
      const diff = touchDown - currentTouch
  
      if (diff > 5) {
        if (slidePhotoRef.current !== project.images.length - 1)
          changeSlide(slidePhotoRef.current + 1)
      }
  
      if (diff < -5) {
        if (slidePhotoRef.current !== 0)
          changeSlide(slidePhotoRef.current - 1)
      }
  
      setTouchPosition(null)
  }

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            startInterval()
          }
        })

        if(containerRef.current)
            observerRef.current.observe(containerRef.current)
    
        return () => {
          if (observerRef.current) {
            observerRef.current.disconnect()
          }
          if(intervalRef.current)
            clearInterval(intervalRef.current)
        }
      }, [])
    
      const startInterval = () => {
        if(intervalRef.current)
            clearInterval(intervalRef.current)
        if(project.images.length > 1){
          intervalRef.current = setInterval(() => {
            if (slidePhotoRef.current === project.images.length - 1) {
              slidePhotoRef.current = 0
            } else {
              slidePhotoRef.current += 1
            }
      
            setSlidePhoto(slidePhotoRef.current)
          }, 4000)
        }
        return () => {
            if(intervalRef.current)
                clearInterval(intervalRef.current)
        }
      }

    const changeSlide = (index : number) => {
      if(intervalRef.current)
        clearInterval(intervalRef.current)
      slidePhotoRef.current = index
      setSlidePhoto(index)
      setTimeout(()=>{
        startInterval()
      }, 3000)
    } 

    return(
        <div className={`project ${flip ? "flipColumns" : ""}`}>
            <h2>{project.title}</h2>
            <div className='project-photos'>
              <div className='project-images-slider'>
                  <span 
                    className='project-images' 
                    style={{transform: `translateX(-${slidePhoto * 100}%)`}}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                  >
                      {project.images.map((image, index) =>{
                          return <img alt={image} src={`projectsImages/${image}`} key={index} onClick={() => setPhoto(image)}/>
                      })}
                  </span>
              </div>
              <div className='project-slider-dots' ref={containerRef}>
                      {project.images.map((_, index) => (
                          <span
                              key={index}
                              className={`dot ${index === slidePhoto ? "active-dot" : ""}`}
                              onClick={() => changeSlide(index)}
                          />
                          ))
                      }
                      
              </div>
            </div>
            <p>{(project.description)}</p>
            <span className='link'>
              {project.unavailable ? 
                <b>{project.ref.desc}</b>
                :
                <a href={`${project.ref.link}`} target='_blank'><b>{project.ref.desc}</b></a>
              }
            </span>
            <div className='project-technologies'>
                {project.technologies.map((technology) =>{
                    return <span key={technology}>{technology}</span>
                })}
            </div>
        </div>
    )
}