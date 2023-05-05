import { useEffect, useState } from 'react'
import './Hero.css'

export const Hero = () => {
    const [loaded, setLoaded] = useState(false)
    const [firstStage, setFirstStage] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            setLoaded(true)
        },500)
        setTimeout(()=>{
            setFirstStage(true)
        },2500)
        
    },[])

    return (
        <section className='hero'>
            <div className='text-wraper'>
                <div className='first-text-wraper'>
                    <p className={`
                        first-text 
                        ${loaded ? "show-up" : ""}
                        ${firstStage ? "flip" : ""}
                    `}>
                        Witaj
                    </p>
                </div>
                <div className={`
                        second-text-wraper
                        ${firstStage ? "flip" : ""}
                    `}>
                    <p className='second-text' >
                        <span>Jestem</span>
                        Jakub Królicki
                    </p>
                </div>
            </div>
        </section>
    )
}