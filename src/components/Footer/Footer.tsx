import { useEffect } from 'react'
import './Footer.css'

export const Footer = ({setPageLoaded} : {setPageLoaded : (state : boolean) => void }) => {
    useEffect(()=>{
        setPageLoaded(true)
    },[])

    return (
        <footer>
            <span>© 2023 Jakub Królicki</span>
        </footer>
    )
}