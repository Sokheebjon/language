import React, {useContext} from 'react';
import './style.css'
import {Store} from "../Store";

export default function Language() {
    const {dictionary,  userLanguageChange} = useContext(Store);

    function handleChange(e) {
        userLanguageChange(e)
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
                <h1>{dictionary.header}</h1>
                <p>{dictionary.text}</p>
            </div>
        </div>
    )
}
