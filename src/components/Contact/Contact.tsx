import { forwardRef } from 'react'
import './Contact.css'
import { ReactComponent as MailIcon } from './mail.svg'
import { useTranslation } from 'react-i18next';

export const Contact = forwardRef<HTMLDivElement>((_,ref) => {
    const { t } = useTranslation()

    return(
        <section className='contact-wraper' ref={ref}>
            <div className='contact-content'>
                <h2>{t('contact.header')}</h2>
                <p>{t('contact.content')}<a href="https://www.linkedin.com/in/jakub-krolicki/" target='_blank' className='contact-linkedin'>LinkedIn</a></p>
                <a href="mailto:jakub.krolicki.k@gmail.com">jakub.krolicki.k@gmail.com</a><br />
            </div>
            <div className='contact-icon-wraper'>
                <MailIcon className='contact-icon'/>
            </div>
        </section>
    )
})