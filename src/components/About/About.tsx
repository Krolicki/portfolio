import { forwardRef } from 'react'
import './About.css'
import aboutPhoto from './me.jpg'

export const About = forwardRef<HTMLDivElement, {globalScroll : number | null}>(({globalScroll}, ref) => {
    return(
        <section className='about-wraper' ref={ref}>
            <p className='about-header'>Kto?</p>
            <span>
                <span className='about-img-wraper'>
                    <img src={aboutPhoto} className='about-img' />
                    <span style={globalScroll ? {transform: `rotate(${globalScroll /4}deg)`} : {}} className='line1'></span>
                    <span style={globalScroll ? {transform: `rotate(${globalScroll /2}deg)`} : {}} className='line2'></span>
                </span>
            </span>
            <span className='about-content'>
                <p>Jestem <b>Inżynierem Informatyki</b>, obecnie pracuję jako wsparcie techniczne.</p>
                <p><b>Pomagam</b> ludziom z problemami software'owymi i hardware'owymi, 
                    <b> wdrażam</b> nowe rozwiązania, <b>konfiguruję</b> komputery, serwery i inne sprzęty.</p> 
                <p><b>Zarządzam</b> użytkownikami i prawami dostępu, <b>administruję</b> systemem monitoringu i...</p>
                <p>Długo by opowiadać!</p>
                <br />
                <p>Rok temu zacząłem doskonalić swoje umiejętności programowania.</p>
                <p>Po spróbowaniu Pythona postanowiłem pójść we <b>Front-End.</b></p>
                <p>Obecnie znam <b>React</b> z JavaScript i Typescript oraz podstawy Redux</p>
            </span>
        </section>
    )
})