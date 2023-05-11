import { useEffect, useState } from 'react'
import './Hero.css'
import { ReactComponent as Plan1 } from './assets/plan1.svg'
import { ReactComponent as Plan1m } from './assets/plan1m.svg'
import { ReactComponent as Plan2 } from './assets/plan2.svg'
import { ReactComponent as Plan3 } from './assets/plan3.svg'
import { ReactComponent as Plan4 } from './assets/plan4.svg'
import { ReactComponent as Plan5 } from './assets/plan5.svg'
import { ReactComponent as Background } from './assets/background.svg'
import { ReactComponent as BackgroundM } from './assets/backgroundm.svg'

type HeroProps = {
    globalScroll : number | null
    setAnimationCompleated : React.Dispatch<React.SetStateAction<boolean>>
}

export const Hero = ({globalScroll, setAnimationCompleated } : HeroProps) => {
    const [loaded, setLoaded] = useState(false)
    const [firstStage, setFirstStage] = useState(false)
    const [secondStage, setSecondStage] = useState(false)
    const [finalStage, setFinalStage] = useState(false)

    const [scroll, setScroll] = useState<number | null>(null)

    const showLandscape = secondStage ? !scroll ? "show-first-plan" : "scroll-sctive" : ""

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
            setAnimationCompleated(true)
        },5000)
    },[])

    useEffect(()=>{
        if(globalScroll !== null && globalScroll < window.innerHeight / 2)
            setScroll(globalScroll)
    },[globalScroll])

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
                {window.innerWidth < 700 ?
                    <Plan1m style={scroll ? {transform: `translateY(-${scroll *1.2}px)`} : {}} className={`first-plan ${showLandscape}`}/>
                    :
                    <Plan1 style={scroll ? {transform: `translateY(-${scroll *1.2}px)`} : {}} className={`first-plan ${showLandscape}`}/>
                }
                <Plan2 style={scroll ? {transform: `translateY(-${scroll *1}px)`} : {}} className={`second-plan ${showLandscape}`} />
                <Plan3 style={scroll ? {transform: `translateY(-${scroll *0.8}px)`} : {}} className={`third-plan ${showLandscape}`} />
                <Plan4 style={scroll ? {transform: `translateY(-${scroll *0.6}px)`} : {}} className={`fourth-plan ${showLandscape}`} />
                <Plan5 style={scroll ? {transform: `translateY(-${scroll *0.4}px)`} : {}} className={`fifth-plan ${showLandscape}`} />
                {window.innerWidth < 700 ?
                    <BackgroundM style={scroll ? {transform: `translateY(-${scroll *0.2}px)`} : {}} className={`background ${showLandscape}`} />
                    :
                    <Background style={scroll ? {transform: `translateY(-${scroll *0.2}px)`} : {}} className={`background ${showLandscape}`} />
                }
            </div>
        </section>
    )
}