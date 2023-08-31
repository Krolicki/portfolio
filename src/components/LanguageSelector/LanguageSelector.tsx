import { useTranslation } from 'react-i18next'
import './LanguageSelector.css'
import { useEffect, useState } from 'react'

export const LanguageSelector = () => {
    const [currentLanguage, setCurrentLanguage] = useState('en')

    const {i18n} = useTranslation()

    const handleChangeLanguage = (lang : string) => {
        if(lang !== currentLanguage){
            i18n.changeLanguage(lang)
            setCurrentLanguage(lang)
        }
    }

    useEffect(()=>{
        if(i18n.resolvedLanguage)
            setCurrentLanguage(i18n.resolvedLanguage)
    },[i18n.resolvedLanguage])

    return(
        <div className='language-selector'>
            <button
                className={currentLanguage === "en" ? 'active-language' : ""}
                onClick={()=> handleChangeLanguage("en")}
                tabIndex={0}
            >
                EN
            </button>
            <button 
                className={currentLanguage === "pl" ? 'active-language' : ""}
                onClick={()=> handleChangeLanguage("pl")}
                tabIndex={0}
            >
                PL
            </button>
        </div>
    )
}