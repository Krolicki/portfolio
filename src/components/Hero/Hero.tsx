import { useEffect, useState } from 'react'
import './Hero.css'
import { ReactComponent as Plan1 } from './assets/plan1.svg'
import { ReactComponent as Plan2 } from './assets/plan2.svg'
import { ReactComponent as Plan3 } from './assets/plan3.svg'
import { ReactComponent as Plan4 } from './assets/plan4.svg'
import { ReactComponent as Plan5 } from './assets/plan5.svg'
import { ReactComponent as Background } from './assets/background.svg'

export const Hero = () => {
    const [loaded, setLoaded] = useState(false)
    const [firstStage, setFirstStage] = useState(false)
    const [secondStage, setSecondStage] = useState(false)
    const [finalStage, setFinalStage] = useState(false)


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
        setTimeout(()=>{
            setFinalStage(true)
        },5000)
        
    },[])

    return (
        <section className='hero'>
            <div className={`
                text-wraper 
                ${secondStage? "final-stage" : ""}`
            }>
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
                        ${finalStage ? "final-stage" : ''}
                    `}>
                    <p className='second-text' >
                        <span>Jestem</span>
                        Jakub Królicki
                    </p>
                </div>
            </div>
            <div className='landscape'>
                <Plan1 className={`first-plan ${secondStage ? "show-first-plan" : ""}`} />
                <Plan2 className={`second-plan ${secondStage ? "show-first-plan" : ""}`} />
                <Plan3 className={`third-plan ${secondStage ? "show-first-plan" : ""}`} />
                <Plan4 className={`fourth-plan ${secondStage ? "show-first-plan" : ""}`} />
                <Plan5 className={`fifth-plan ${secondStage ? "show-first-plan" : ""}`} />
                <Background className={`background ${secondStage ? "show-first-plan" : ""}`} />
            </div>
        </section>
    )
}