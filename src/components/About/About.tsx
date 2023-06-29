import { forwardRef, useEffect } from 'react'
import './About.css'
import aboutPhoto from './me.jpg'
import { useTranslation } from 'react-i18next';

export const About = forwardRef<HTMLDivElement, {globalScroll : number | null}>(({globalScroll}, ref) => {
    const { t } = useTranslation()

    // useEffect(()=>{
    //     const observer = new IntersectionObserver(
    //         ([entry]) => {
    //             if(entry.isIntersecting)
    //                 setIsIntersecting(entry.isIntersecting);
    //         }
    //       );
    //     if(ref)
    //         observer.observe(ref.current);
    // },[])

    return(
        <section className='about-wraper' ref={ref}>
            <p className='about-header'>{t("about.header")}?</p>
            <span>
                <span className='about-img-wraper'>
                    <img src={aboutPhoto} className='about-img' />
                    <span style={globalScroll ? {transform: `rotate(${globalScroll /4}deg)`} : {}} className='line1'></span>
                    <span style={globalScroll ? {transform: `rotate(${globalScroll /2}deg)`} : {}} className='line2'></span>
                </span>
            </span>
            <span className='about-content'>
                <p dangerouslySetInnerHTML={{__html: t("about.content.l1")}} />
                <p dangerouslySetInnerHTML={{__html: t("about.content.l2")}} />
                <p dangerouslySetInnerHTML={{__html: t("about.content.l3")}} />
                <p dangerouslySetInnerHTML={{__html: t("about.content.l4")}} /> 
                <br />
                <p dangerouslySetInnerHTML={{__html: t("about.content.l5")}} /> 
                <p dangerouslySetInnerHTML={{__html: t("about.content.l6")}} /> 
                <p dangerouslySetInnerHTML={{__html: t("about.content.l7")}} /> 
            </span>
        </section>
    )
})