import { useState } from 'react'
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
                                className={`${intersectedView === (section.link).toLowerCase() ? "active" : ""}`}
                            >{section.title}</span>
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}