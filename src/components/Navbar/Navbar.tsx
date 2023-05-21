import { useEffect, useRef, useState } from 'react'
import './Navbar.css'

type SectionType = {
    title: string
    link: string
}

const Sections : SectionType[]= [
    {
        title: "Start",
        link: ""
    },
    {
        title: "O mnie",
        link: ""
    },
    {
        title: "Projekty",
        link: ""
    },
    {
        title: "GitHub",
        link: ""
    },
    {
        title: "Kontakt",
        link: ""
    }
]

export const Navbar = ({globalScroll} : {globalScroll : number | null}) => {
    const [menuClick, setMenuClick] = useState(false)
    const [scrollDown, setScrollDown] = useState(false)

    const lastScroll = useRef(0)

    useEffect(()=>{
        if(globalScroll){
            if(globalScroll <= 0){
                //document.body.classList.remove("scroll-up");
                setScrollDown(false)
            }
            if(globalScroll > lastScroll.current){
                //document.body.classList.add("scroll-down");
                //document.body.classList.remove("scroll-up");
                setScrollDown(true)
            }
            if(globalScroll < lastScroll.current){
                //document.body.classList.add("scroll-up");
                //document.body.classList.remove("scroll-down");
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
                            <span>{section.title}</span>
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}