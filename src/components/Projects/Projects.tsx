import { Project } from './Project'
import './Projects.css'

export type projectType = {
    title: string
    images: string[]
    description: string
    ref: {
        desc: string
        link: string
    }
    technologies: string[]
    flip: boolean
}

const projectsList : projectType[] = [
    {
        title: "Jedność Gorlice",
        images: ["jednosc1.png", "jednosc2.png", "jednosc3.png"],
        description: 'Strona internetowa dla Spółdzielni Produkcyjno-Handlowej "JEDNOŚĆ" w Gorlicach. \n Opisuje historę firmy, zakłady produkcyjne, produkty piekarskie i cukiernicze oraz placówki.',
        ref:{
            desc: "Link do strony",
            link: "https://www.jednosc.gorlice.pl/"
        },
        technologies: ["React", "JavaScript"],
        flip: false
    }
]


export const Projects = () => {
    return(
        <section className='projects-wraper'>
            <h1>Moje projekty</h1>
            {projectsList.map((project)=>{
                return(
                    <Project project={project} key={project.title}/>
                )
            })}
        </section>
    )
}