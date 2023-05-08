import './About.css'
import aboutPhoto from './me.jpg'

export const About = () => {
    return(
        <section className='about-wraper'>
            <p className='about-header'>Kto?</p>
            <img src={aboutPhoto} className='about-img'/>
            <span className='about-content'>
                <p>Jestem <b>Inżynierem Informatyki</b>, obecnie pracuję jako wsparcie techniczne.</p>
                <p><b>Pomagam</b> ludziom z problemami software'owymi i hardware'owymi, 
                    <b> wdrażam</b> nowe rozwiązania, <b>konfiguruję</b> komputery, serwery i inne sprzęty.</p> 
                <p><b>Zarządzam</b> użytkownikami i prawami dostępu, <b>administruję</b> systemem monitoringu i...</p>
                <p>Długo by opowiadać!</p>
                <br />
                <p>Czas na zmiany dlatego dlatego rok temu zacząłem uczyć się programowania.</p>
                <p>Wybór padł na <b>Front-End.</b></p>
                <p>Obecnie znam <b>React</b> z JavaScript i Typescript, Redux-Toolkit i Redux-Saga</p>
            </span>
        </section>
    )
}