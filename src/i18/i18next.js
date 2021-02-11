import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import en from '../languages/en.json';
import uz from '../languages/uz.json';
import ru from '../languages/ru.json';


i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: en
            },
            uz: {
                translation: uz
            },
            ru: {
                translation: ru
            }
        },
        lng: window.localStorage.getItem('lang') ? window.localStorage.getItem('lang') : 'en',

        keySeparator: false,

        interpolation: {
            escapeValue: false // react already safes from xss
        }

    })

