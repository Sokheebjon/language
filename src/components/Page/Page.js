import React from 'react'
import {useTranslation} from "react-i18next";
import {Link} from 'react-router-dom'


export default function Page() {
    const {t, i18n} = useTranslation();
    return (
        <di>
            <p className="text">{t('article')}</p>
            <Link to="/">{t('homePage')}</Link>
        </di>
    )
}
