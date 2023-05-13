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
        description: 'Strona internetowa dla Spółdzielni Produkcyjno-Handlowej "JEDNOŚĆ" w Gorlicach.\nOpisuje historę firmy, zakłady produkcyjne, produkty piekarskie i cukiernicze oraz placówki.',
        ref:{
            desc: "Link do strony",
            link: "https://www.jednosc.gorlice.pl/"
        },
        technologies: ["React", "JavaScript", "React Router", "React Helmet"],
        flip: false
    },
    {
        title: "Forum",
        images: ["forum1.png", "forum2.png","forum3.png","forum4.png","forum5.png"],
        description: 'Strona "Landing Page" z forum.\nUmożliwia logowanie, rejestrację, dodawanie postów, edytowanie ich i usuwanie. Zawiera profile użytkowników ze statystykami, ranking najlepszych postów, wyszukiwarkę i podział postów na strony.\nTo mój najbardziej rozwinięty projekt',
        ref:{
            desc: "Link do repozytorium",
            link: "https://github.com/Krolicki/react-forum-page"
        },
        technologies: ["React", "JavaScript", "Firebase", "React Router"],
        flip: true
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