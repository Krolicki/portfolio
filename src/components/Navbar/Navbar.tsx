import { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import { useTranslation } from 'react-i18next';

type SectionType = {
    title: string
    link: string
}

export const Navbar = ({globalScroll, scrollToComponent} : {globalScroll : number | null, scrollToComponent : (link : string) => void}) => {
    const [menuClick, setMenuClick] = useState(false)
    const [scrollDown, setScrollDown] = useState(false)

    const lastScroll = useRef(0)

    const { t } = useTranslation()

    const Sections : SectionType[]= [
        {
            title: t('navbar.home'),
            link: "hero"
        },
        {
            title: t('navbar.about'),
            link: "about"
        },
        {
            title: t('navbar.projects'),
            link: "projects"
        },
        {
            title: "GitHub",
            link: "github"
        },
        {
            title: t('navbar.contact'),
            link: "contact"
        }
    ]

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