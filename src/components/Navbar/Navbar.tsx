import { useState } from 'react'
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

export const Navbar = () => {
    const [menuClick, setMenuClick] = useState(false)

    return (
        <nav>
            <div className='nav-wraper'>
                <button className='nav-button' type='button' onClick={()=>setMenuClick((prev) => !prev)}>menu</button>
                <div className={`nav-items ${menuClick ? "show-menu" : ""}`}>
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