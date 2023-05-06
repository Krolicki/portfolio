import { useEffect, useState } from 'react'
import './Hero.css'
import { ReactComponent as Plan1 } from './assets/plan1.svg'

export const Hero = () => {
    const [loaded, setLoaded] = useState(false)
    const [firstStage, setFirstStage] = useState(false)
    const [secondStage, setSecondStage] = useState(false)


    useEffect(()=>{
        setTimeout(()=>{
            setLoaded(true)
        },500)
        setTimeout(()=>{
            setFirstStage(true)
        },2500)
        setTimeout(()=>{
            setSecondStage(true)
        },3500)
        
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
            <div className='landscape'>
                <Plan1 className={`first-plan ${secondStage ? "show-first-plan" : ""}`} />
            </div>
        </section>
    )
}