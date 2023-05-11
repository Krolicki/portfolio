import { projectType } from './Projects'
import { useState, useEffect } from 'react'
import './Projects.css'

export const Project = ({project} : {project : projectType}) => {
    const [slidePhoto, setSlidePhoto] = useState(0)

    useEffect(()=>{
        setInterval(()=>{
            
        },3000)

        return(()=>{
            
        })
    },[])

    return(
        <div className='project'>
            <h2>{project.title}</h2>
            <div className='project-images-slider'>
                {project.images.map((image, index) =>{
                    return <img alt={image} src={`/projectsImages/${image}`} key={index}/>
                })}
            </div>
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