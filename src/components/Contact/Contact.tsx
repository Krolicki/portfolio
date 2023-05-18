import './Contact.css'
import { ReactComponent as MailIcon } from './mail.svg'

export const Contact = () => {
    return(
        <section className='contact-wraper'>
            <div className='contact-icon-wraper'>
                <MailIcon className='contact-icon'/>
            </div>
            <div className='contact-content'>
                <h2>Poznamy się?</h2>
                <p>Jeśli zainteresowała Cię moja praca, możesz skontaktować się za mną mailowo, lub odwiedzić mój profil na <a href="https://www.linkedin.com/in/jakub-krolicki/" target='_blank' className='contact-linkedin'>LinkedIn</a></p>
                <a href="mailto:jakub.krolicki.k@gmail.com">jakub.krolicki.k@gmail.com</a><br />
            </div>
        </section>
    )
}