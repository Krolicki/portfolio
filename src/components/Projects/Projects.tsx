import { forwardRef, useState } from 'react'
import { Project } from './Project'
import './Projects.css'
import { useTranslation } from 'react-i18next';

export type projectType = {
    title: string
    images: string[]
    description: string
    ref: {
        desc: string
        link: string
    }
    technologies: string[]
    unavailable?: boolean
}

export const Projects = forwardRef<HTMLDivElement>((_,ref) => {
    const [photoToShow, setPhotoToShow] = useState<string | null>(null)

    const { t } = useTranslation()

    const projectsList : projectType[] = [
        {
            title: t('projects.project.jednosc.title'),
            images: ["jednosc1.png", "jednosc2.png", "jednosc3.png", "jednosc4.png"],
            description: t('projects.project.jednosc.description'),
            ref:{
                desc: t('projects.ref.unavailable'),
                link: ""
            },
            technologies: ["React", "JavaScript", "React Router", "React Helmet"],
            unavailable: true
        },
        {
            title: t('projects.project.forum.title'),
            images: ["forum1.png", "forum2.png","forum3.png","forum4.png","forum5.png"],
            description: t('projects.project.forum.description'),
            ref:{
                desc: t('projects.ref.repo'),
                link: "https://github.com/Krolicki/react-forum-page"
            },
            technologies: ["React", "JavaScript", "Firebase", "React Router"]
        },
        {
            title: t('projects.project.multiStepForm.title'),
            images: ["step1.png", "step2.png", "step3.png"],
            description: t('projects.project.multiStepForm.description'),
            ref:{
                desc: t('projects.ref.repo'),
                link: "https://github.com/Krolicki/react-multi-step-form"
            },
            technologies: ["React", "Typescript", "i18next"]
        },
        {
            title: t('projects.project.weatherApp.title'),
            images: ["weather.png"],
            description: t('projects.project.weatherApp.description'),
            ref:{
                desc: t('projects.ref.repo'),
                link: "https://github.com/Krolicki/react-weather"
            },
            technologies: ["React", "Typescript", "OpenWeather API"]
        },
        {
            title: t('projects.project.photoEditor.title'),
            images: ["editor1.png", "editor2.png"],
            description: t('projects.project.photoEditor.description'),
            ref:{
                desc: t('projects.ref.repo'),
                link: "https://github.com/Krolicki/react-photo-editor"
            },
            technologies: ["React", "Typescript", "HTML Canvas"]
        },
        {
            title: t('projects.project.raspberryPi.title'),
            images: ["rasp1.png", "rasp2.png", "rasp3.png"],
            description: t('projects.project.raspberryPi.description'),
            ref:{
                desc: t('projects.ref.repos'),
                link: "https://github.com/Krolicki?tab=repositories&q=raspberry&type=&language=&sort="
            },
            technologies: ["Python", "Raspberry Pi", "Flask", "Javascript"]
        }
    ]

    return(
        <section className='projects-wraper' ref={ref}>
            <h1>{t('projects.header')}</h1>
            {projectsList.map((project, index)=>{
                return(
                    <Project project={project} flip={index % 2 === 1} key={project.title} setPhoto={setPhotoToShow}/>
                )
            })}
            {photoToShow && window.innerWidth > 920 &&
                <div className='show-photo-wraper'>
                    <img alt={photoToShow} src={`projectsImages/${photoToShow}`} draggable="false" onDragStart={()=> {return false}}/>
                    <span onClick={()=> setPhotoToShow(null)}>x</span>
                </div>
            }
        </section>
    )
})