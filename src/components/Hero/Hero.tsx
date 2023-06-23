import { forwardRef, useEffect, useState } from 'react'
import { animated } from 'react-spring';
import './Hero.css'
import { ReactComponent as Plan1 } from './assets/plan1.svg'
import { ReactComponent as Plan2 } from './assets/plan2.svg'
import { ReactComponent as Plan3 } from './assets/plan3.svg'
import { ReactComponent as Plan4 } from './assets/plan4.svg'
import { ReactComponent as Plan5 } from './assets/plan5.svg'
import { ReactComponent as Background } from './assets/background.svg'
import { ReactComponent as BackgroundM } from './assets/backgroundm.svg'
import Plan1m2 from './assets/plan1m.png'
import Plan2m  from './assets/plan2.png'
import Plan3m from './assets/plan3.png'
import Plan4m from './assets/plan4.png'
import Plan5m from './assets/plan5.png'
import BackgroundMm from './assets/backgroundm.png'
import { useTranslation } from 'react-i18next';

type HeroProps = {
    globalScroll : number | null
    setAnimationCompleted : React.Dispatch<React.SetStateAction<boolean>>
}

const AnimatedPlan2 = animated(Plan2)
const AnimatedPlan3 = animated(Plan3)
const AnimatedPlan4 = animated(Plan4)
const AnimatedPlan5 = animated(Plan5)
const AnimatedBackground = animated(window.innerWidth < 1200 ? BackgroundM : Background)

export const Hero = forwardRef<HTMLDivElement, HeroProps>(({ globalScroll, setAnimationCompleted }, ref) => {
    const [loaded, setLoaded] = useState(false)
    const [firstStage, setFirstStage] = useState(false)
    const [secondStage, setSecondStage] = useState(false)
    const [finalStage, setFinalStage] = useState(false)

    const [scroll, setScroll] = useState<number | null>(null)

    const showLandscape = secondStage ? !scroll ? "show-first-plan" : "scroll-active" : ""

    const { t } = useTranslation()

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
        if(globalScroll !== null && globalScroll < window.innerHeight * 2)
            setScroll(globalScroll)
    },[globalScroll])

    // const firstPlanAnimation =  scroll ? {
    //     transform: `translate3d(0px, -${scroll * 0.1}px, 0px)`
    // } : {}
    const secondPlanAnimation = scroll ? {
        transform: `translate3d(0px, -${scroll * 0.35}px, 0px)`
    } : {}
    const thirdPlanAnimation = scroll ? {
        transform: `translate3d(0px, -${scroll * 0.2}px, 0px)`
    } : {}
    const fourthPlanAnimation = scroll ? {
        transform: `translate3d(0px, -${scroll * 0.07}px, 0px)`
    } : {}
    const fifthPlanAnimation = scroll ? {
        transform: `translate3d(0px, -${scroll * 0.03}px, 0px)`
    } : {}
    const backgroundAnimation = scroll ? {
        transform: `translate3d(0px, -${scroll * 0.02}px, 0px)`
    } : {}
    

    return (
        <section className={`hero ${finalStage ? "final-stage" : ""}`} ref={ref}>
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
                        {t('hero.first-text')}
                    </p>
                </div>
                <div className={`
                        second-text-wraper
                        ${firstStage ? "flip" : ""}
                        ${finalStage ? "final-stage" : ''}
                    `}
                    style={scroll ? {transform: `translateY(${scroll *0.1}px)`} : {}}
                >
                    <p className='second-text'>
                        <span>{t('hero.second-text')}</span>
                        Jakub Królicki
                    </p>
                </div>
            </div>
            {/* <div className='landscape'> */}
                {window.innerWidth > 700 ?
                        <>
                            <Plan1 className={`first-plan ${secondStage ? "show-first-plan" : ""}`} />
                            <div className='landscape'>
                                <AnimatedPlan2 style={scroll ? secondPlanAnimation : {} } className={`second-plan ${showLandscape}`} />
                                <AnimatedPlan3 style={scroll ? thirdPlanAnimation : {} } className={`third-plan ${showLandscape}`} />
                                <AnimatedPlan4 style={scroll ? fourthPlanAnimation : {} } className={`fourth-plan ${showLandscape}`} />
                                <AnimatedPlan5 style={scroll ? fifthPlanAnimation : {} } className={`fifth-plan ${showLandscape}`} />
                                <AnimatedBackground style={scroll ? backgroundAnimation: {} } className={`background ${showLandscape}`} />
                            </div>
                        </>
                    :
                    <>
                        <img src={Plan1m2}  className={`first-plan ${secondStage ? "show-first-plan" : ""}`} />
                        <img src={Plan2m}  className={`second-plan ${secondStage ? "show-first-plan" : ""}`} />
                        <img src={Plan3m}  className={`third-plan ${secondStage ? "show-first-plan" : ""}`} />
                        <img src={Plan4m}  className={`fourth-plan ${secondStage ? "show-first-plan" : ""}`} />
                        <img src={Plan5m}  className={`fifth-plan ${secondStage ? "show-first-plan" : ""}`} />
                        <img src={BackgroundMm}  className={`background ${secondStage ? "show-first-plan" : ""}`} />
                    </>
                }
            {/* </div> */}
        </section>
    )
})