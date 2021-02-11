import React from 'react';
import i18next from "i18next";
import {useTranslation} from "react-i18next";
import {Link} from 'react-router-dom'
import './style.css'

export default function Language() {
    const {t, i18n} = useTranslation();
    // const lang = i18n.language;


    function handleChange(lang) {
        i18next.changeLanguage(lang);
        window.localStorage.setItem('lang', lang);
    }

    return (
        <div>
            <div className={"dflex"}>
                <button onClick={() => handleChange('en')}>
                    English
                </button>
                <button onClick={() => handleChange('ru')}>
                    Russian
                </button>
                <button onClick={() => handleChange('uz')}>
                    Uzbek
                </button>
            </div>
            <div className="text">
                <h1>{t('header')}</h1>
                <p>{t('text')}</p>
            </div>
            <Link to="page">{t('link')}</Link>
        </div>
    )
}
