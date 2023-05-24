import { useEffect, useRef, useState } from 'react'
import './Navbar.css'

type SectionType = {
    title: string
    link: string
}

const Sections : SectionType[]= [
    {
        title: "Start",
        link: "hero"
    },
    {
        title: "O mnie",
        link: "about"
    },
    {
        title: "Projekty",
        link: "projects"
    },
    {
        title: "GitHub",
        link: "github"
    },
    {
        title: "Kontakt",
        link: "contact"
    }
]

export const Navbar = ({globalScroll, scrollToComponent} : {globalScroll : number | null, scrollToComponent : (link : string) => void}) => {
    const [menuClick, setMenuClick] = useState(false)
    const [scrollDown, setScrollDown] = useState(false)

    const lastScroll = useRef(0)

    useEffect(()=>{
        if(globalScroll){
            if(globalScroll <= 0){
                setScrollDown(false)
            }
            if(globalScroll > lastScroll.current){
                setScrollDown(true)
            }
            if(globalScroll < lastScroll.current){
                setScrollDown(false)
            }
            lastScroll.current = globalScroll;
        }
    },[globalScroll])

    return (
        <nav>
            <div className='nav-wraper'>
                <button className='nav-button' type='button' onClick={()=>setMenuClick((prev) => !prev)}>menu</button>
                <div className={`nav-items ${menuClick ? "show-menu" : ""} ${scrollDown ? "scroll-down" : ""}`}>
                    {Sections.map(section => {
                        return(
                            <span 
                                onClick={()=>{
                                    scrollToComponent(section.link)
                                    setMenuClick(false)
                                }}
                                key={section.link}
                            >{section.title}</span>
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}