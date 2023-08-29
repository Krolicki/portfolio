import { useEffect, useState } from 'react'
import './Navbar.css'
import i18n from '../../i18n/i18n';

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
        title: i18n.t('navbar.home'),
        link: "hero"
    },
    {
        title: i18n.t('navbar.about'),
        link: "about"
    },
    {
        title: i18n.t('navbar.projects'),
        link: "projects"
    },
    {
        title: "GitHub",
        link: "github"
    },
    {
        title: i18n.t('navbar.contact'),
        link: "contact"
    }
]
export const Navbar = ({ scrollDown, scrollToComponent, intersectedView} : NavbarType) => {
    const [menuClick, setMenuClick] = useState(false)
    const [focus, setFocus] = useState(false)

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
                            >{section.title}</a>
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}