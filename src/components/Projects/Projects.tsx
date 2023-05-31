import { forwardRef, useState } from 'react'
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
}

const projectsList : projectType[] = [
    {
        title: "Jedność Gorlice",
        images: ["jednosc1.png", "jednosc2.png", "jednosc3.png", "jednosc4.png"],
        description: 'Strona internetowa dla Spółdzielni Produkcyjno-Handlowej "JEDNOŚĆ" w Gorlicach.\nOpisuje historę firmy, zakłady produkcyjne, produkty piekarskie i cukiernicze oraz placówki.',
        ref:{
            desc: "Link do strony",
            link: "https://www.jednosc.gorlice.pl/"
        },
        technologies: ["React", "JavaScript", "React Router", "React Helmet"]
    },
    {
        title: "Forum",
        images: ["forum1.png", "forum2.png","forum3.png","forum4.png","forum5.png"],
        description: 'Strona "Landing Page" z forum.\nUmożliwia logowanie, rejestrację, dodawanie postów, edytowanie ich i usuwanie. Zawiera profile użytkowników ze statystykami, ranking najlepszych postów, wyszukiwarkę i podział postów na strony.\nTo mój najbardziej rozwinięty projekt.',
        ref:{
            desc: "Link do repozytorium",
            link: "https://github.com/Krolicki/react-forum-page"
        },
        technologies: ["React", "JavaScript", "Firebase", "React Router"]
    },
    {
        title: "Wielokrokowy Formularz",
        images: ["step1.png", "step2.png", "step3.png"],
        description: 'Formularz z walidacją pól (adres email, hasło, data urodzenia, zgody) i paskiem postępu.\nPosiada dwie wersje językowe: polski i angielski.',
        ref:{
            desc: "Link do repozytorium",
            link: "https://github.com/Krolicki/react-multi-step-form"
        },
        technologies: ["React", "Typescript", "i18next"]
    },
    {
        title: "Aplikacja Pogodowa",
        images: ["weather.png"],
        description: 'Aplikacja pogodowa z prognozą na 5 dni.',
        ref:{
            desc: "Link do repozytorium",
            link: "https://github.com/Krolicki/react-weather"
        },
        technologies: ["React", "Typescript", "OpenWeather API"]
    },
    {
        title: "Edytor zdjęć",
        images: ["editor1.png", "editor2.png"],
        description: 'Pozwala na edytowanie zdjęć filtrami CSS i zapisywanie plików przy użyciu HTML Canvas.\nZdjęcia można przesłać lub wybrać z niekończońcej się ściany zdjęć pobieranych z Unsplash.com.',
        ref:{
            desc: "Link do repozytorium",
            link: "https://github.com/Krolicki/react-photo-editor"
        },
        technologies: ["React", "Typescript", "HTML Canvas"]
    },
    {
        title: "Raspberry Pi",
        images: ["rasp1.png", "rasp2.png", "rasp3.png"],
        description: 'Tworzę także aplikacje i systemy na Raspberry Pi.\nWykonałem m.in. sterowanie roletami okiennymi, sterowanie światłem, system alarmowy z czujnikami ruchu, czujnikiem otwarcia drzwi i kartami dostępu.',
        ref:{
            desc: "Link do repozytoriów",
            link: "https://github.com/Krolicki?tab=repositories&q=raspberry&type=&language=&sort="
        },
        technologies: ["Python", "Raspberry Pi", "Flask", "Javascript"]
    }
]

export const Projects = forwardRef<HTMLDivElement>((_,ref) => {
    const [photoToShow, setPhotoToShow] = useState<string | null>(null)

    const showPhoto = (url : string) => {

    }

    return(
        <section className='projects-wraper' ref={ref}>
            <h1>Moje projekty</h1>
            {projectsList.map((project, index)=>{
                return(
                    <Project project={project} flip={index % 2 === 1} key={project.title} setPhoto={setPhotoToShow}/>
                )
            })}
            {photoToShow && window.innerWidth > 920 &&
                <div className='show-photo-wraper'>
                    <img alt={photoToShow} src={`/projectsImages/${photoToShow}`} draggable="false" onDragStart={()=> {return false}}/>
                    <span onClick={()=> setPhotoToShow(null)}>x</span>
                </div>
            }
        </section>
    )
})