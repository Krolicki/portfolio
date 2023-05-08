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

    const [scroll, setScroll] = useState<number | null>(null)

    const handleScroll = () => {
        let value = window.scrollY
        
        if(window.innerHeight * 0.5 > value){
            setScroll(value)
            console.log(window.innerHeight * 0.5, value)
        }
    }


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

        window.addEventListener('scroll', handleScroll)

        return(()=>{
            window.removeEventListener('scroll', handleScroll)
        })
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
                    <Plan1 style={scroll ? {transform: `translateY(-${scroll *1.5}px)`} : {}} className={`first-plan ${secondStage ? !scroll ?"show-first-plan":"" : ""}`}/>
                    <Plan2 style={scroll ? {transform: `translateY(-${scroll *1.3}px)`} : {}} className={`second-plan ${secondStage ? !scroll ? "show-first-plan":"" : ""}`} />
                    <Plan3 style={scroll ? {transform: `translateY(-${scroll *1.1}px)`} : {}} className={`third-plan ${secondStage ? !scroll ? "show-first-plan":"" : ""}`} />
                    <Plan4 style={scroll ? {transform: `translateY(-${scroll *0.6}px)`} : {}} className={`fourth-plan ${secondStage ? !scroll ? "show-first-plan":"" : ""}`} />
                    <Plan5 style={scroll ? {transform: `translateY(-${scroll *0.3}px)`} : {}} className={`fifth-plan ${secondStage ? !scroll ? "show-first-plan":"" : ""}`} />
                    <Background style={scroll ? {transform: `translateY(-${scroll *0.1}px)`} : {}} className={`background ${secondStage ? !scroll ? "show-first-plan":"" : ""}`} />
            </div>
        </section>
    )
}