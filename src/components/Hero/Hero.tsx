import { forwardRef, useEffect, useState } from 'react'
import { useTransition, animated, useSpring } from 'react-spring';
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
    setAnimationCompleted : React.Dispatch<React.SetStateAction<boolean>>
}

const AnimatedPlan1 = animated(window.innerWidth < 700 ? Plan1m : Plan1)
const AnimatedPlan2 = animated(Plan2)
const AnimatedPlan3 = animated(Plan3)
const AnimatedPlan4 = animated(Plan4)
const AnimatedPlan5 = animated(Plan5)
const AnimatedBackground = animated(window.innerWidth < 700 ? BackgroundM : Background)

export const Hero = forwardRef<HTMLDivElement, HeroProps>(({ globalScroll, setAnimationCompleted }, ref) => {
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
            setAnimationCompleted(true)
        },5000)
    },[])

    useEffect(()=>{
        if(globalScroll !== null && globalScroll < window.innerHeight * 0.75)
            setScroll(globalScroll)
    },[globalScroll])

    // const firstPlanAnimation = useSpring({
    //     transform: `translateY(-${scroll * 0.6}px) translateZ(0)`,
    //     config: { duration: 0, immediate: true, delay: 0 }
    // })
    // const secondPlanAnimation = useSpring({
    //     transform: `translateY(-${scroll * 0.4}px) translateZ(0)`,
    //     config: { duration: 0, immediate: true, delay: 0 }
    // })
    // const thirdPlanAnimation = useSpring({
    //     transform: `translateY(-${scroll * 0.2}px) translateZ(0)`,
    //     config: { duration: 0, immediate: true , delay: 0}
    // })
    // const fourthPlanAnimation = useSpring({
    //     transform: `translateY(-${scroll * 0.1}px) translateZ(0)`,
    //     config: { duration: 0, immediate: true , delay: 0}
    // })
    // const fifthPlanAnimation = useSpring({
    //     transform: `translateY(-${scroll * 0.07}px) translateZ(0)`,
    //     config: { duration: 0, immediate: true , delay: 0}
    // })
    // const backgroundAnimation = useSpring({
    //     transform: `translateY(-${scroll * 0.05}px) translateZ(0)`,
    //     config: { duration: 0, immediate: true, delay: 0 }
    // })
    const firstPlanAnimation =  {
        transform: `translateY(-${scroll * 0.6}px) translateZ(0)`
    }
    const secondPlanAnimation = {
        transform: `translateY(-${scroll * 0.4}px) translateZ(0)`
    }
    const thirdPlanAnimation = {
        transform: `translateY(-${scroll * 0.2}px) translateZ(0)`
    }
    const fourthPlanAnimation = {
        transform: `translateY(-${scroll * 0.1}px) translateZ(0)`
    }
    const fifthPlanAnimation = {
        transform: `translateY(-${scroll * 0.07}px) translateZ(0)`
    }
    const backgroundAnimation = {
        transform: `translateY(-${scroll * 0.05}px) translateZ(0)`
    }
    

    return (
        <section className='hero' ref={ref}>
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
                    `}
                    style={scroll ? {transform: `translateY(${scroll *0.2}px)`} : {}}
                >
                    <p className='second-text'>
                        <span>Jestem</span>
                        Jakub Królicki
                    </p>
                </div>
            </div>
            <div className='landscape'>
                <AnimatedPlan1 style={scroll ? firstPlanAnimation: {} } className={`first-plan ${showLandscape}`} />
                <AnimatedPlan2 style={scroll ? secondPlanAnimation : {} } className={`second-plan ${showLandscape}`} />
                <AnimatedPlan3 style={scroll ? thirdPlanAnimation : {} } className={`third-plan ${showLandscape}`} />
                <AnimatedPlan4 style={scroll ? fourthPlanAnimation : {} } className={`fourth-plan ${showLandscape}`} />
                <AnimatedPlan5 style={scroll ? fifthPlanAnimation : {} } className={`fifth-plan ${showLandscape}`} />
                <AnimatedBackground style={scroll ? backgroundAnimation: {} } className={`background ${showLandscape}`} />
            </div>
        </section>
    )
})