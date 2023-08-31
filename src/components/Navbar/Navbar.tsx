import { useEffect, useState } from 'react'
import './Navbar.css'
import { useTranslation } from 'react-i18next';

type SectionType = {
    title: string
    link: string
}

type NavbarType = {
    //globalScroll : number | null
    scrollDown : boolean
    scrollToComponent : (link : string) => void
    intersectedView : string
}

const Sections : SectionType[]= [
    {
        title: 'navbar.home',
        link: "hero"
    },
    {
        title: 'navbar.about',
        link: "about"
    },
    {
        title: 'navbar.projects',
        link: "projects"
    },
    {
        title: "GitHub",
        link: "github"
    },
    {
        title: 'navbar.contact',
        link: "contact"
    }
]
export const Navbar = ({ scrollDown, scrollToComponent, intersectedView} : NavbarType) => {
    const [menuClick, setMenuClick] = useState(false)
    const [focus, setFocus] = useState(false)

    const { t } = useTranslation()

    useEffect(()=>{
        if(scrollDown && focus)
            setFocus(false)
    },[scrollDown])

    return (
        <nav>
            <div className='nav-wraper'>
                <button className='nav-button' type='button' onClick={()=>setMenuClick((prev) => !prev)}>menu</button>
                <div className={`nav-items ${menuClick ? "show-menu" : ""} ${scrollDown && !focus ? "scroll-down" : ""}`}>
                    {Sections.map((section) => {
                        return(
                            <a 
                                onClick={()=>{
                                    scrollToComponent(section.link)
                                    setMenuClick(false)
                                }}
                                key={section.link}
                                href={`#${section.link}`}
                                className={`${intersectedView === (section.link).toLowerCase() ? "active" : ""} nav-item`}
                                tabIndex={0}
                                onFocus={()=>setFocus(true)}
                                onBlur={()=>setFocus(false)}
                            >{t(section.title)}</a>
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}