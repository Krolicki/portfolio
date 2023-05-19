import { projectType } from './Projects'
import { useRef, useState, useEffect } from 'react'
import './Projects.css'

type ProjectProps = {
  project : projectType
  flip: boolean
}

export const Project = ({project, flip} : ProjectProps) => {
    const [slidePhoto, setSlidePhoto] = useState(0)
    const slidePhotoRef = useRef(0)
    const containerRef = useRef<HTMLDivElement | null>(null)
    const observerRef = useRef<IntersectionObserver | null>(null)
    const intervalRef = useRef<number | null>(null)

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
                  <span className='project-images' style={{transform: `translateX(-${slidePhoto * 100}%)`}}>
                      {project.images.map((image, index) =>{
                          return <img alt={image} src={`/projectsImages/${image}`} key={index}/>
                      })}
                  </span>
              </div>
              <div className='project-slider-dots' ref={containerRef}>
                      {project.images.map((image, index) => (
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
                <a href={`${project.ref.link}`} target='_blank'><b>{project.ref.desc}</b></a>
            </span>
            <div className='project-technologies'>
                {project.technologies.map((technology) =>{
                    return <span key={technology}>{technology}</span>
                })}
            </div>
        </div>
    )
}