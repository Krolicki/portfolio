import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
//import enT from './en.json'
import plT from './translations/pl.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
    //   en: {
    //     translation: enT
    //   },
      pl:{
        translation: plT
      }
    },
    fallbackLng: 'pl',
    debug: true,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;