import { projectType } from './Projects'
import { useRef, useState, useEffect } from 'react'
import './Projects.css'

export const Project = ({project} : {project : projectType}) => {
    const [slidePhoto, setSlidePhoto] = useState(0)
    const slidePhotoRef = useRef(0)
    const containerRef = useRef<HTMLDivElement | null>(null)
    const observerRef = useRef<IntersectionObserver | null>(null)


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
        }
      }, [])
    
      const startInterval = () => {
        const interval = setInterval(() => {
          if (slidePhotoRef.current === project.images.length - 1) {
            slidePhotoRef.current = 0
          } else {
            slidePhotoRef.current += 1
          }
    
          setSlidePhoto(slidePhotoRef.current)
        }, 3000)
    
        return () => {
          clearInterval(interval)
        }
      }

    return(
        <div className='project'>
            <h2>{project.title}</h2>
            <div className='project-images-slider' ref={containerRef}>
                <span className='project-images' style={{transform: `translateX(-${slidePhoto * 100}%)`}}>
                    {project.images.map((image, index) =>{
                        return <img alt={image} src={`/projectsImages/${image}`} key={index}/>
                    })}
                </span>
            </div>
            <span className='project-slider-dots'>
                    {project.images.map((image, index) => (
                        <span
                            key={index}
                            className={`dot ${index === slidePhoto ? "active-dot" : ""}`}
                            onClick={() => setSlidePhoto(index)}
                        />
                        ))
                    }
            </span>
            <p>{project.description}</p>
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