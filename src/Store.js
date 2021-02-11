// import React, {createContext, useState} from 'react';
//
// import {languageOptions, dictionaryList} from './languages';
//
// export const Store = createContext({
//     userLanguage: 'en',
//     dictionary: dictionaryList.en
// });
//
//
// export function StoreProvider(props) {
//     const defaultLanguage = window.localStorage.getItem('d_lang');
//     const [userLanguage, setUserlanguage] = useState(defaultLanguage || 'en')
//     const value = {
//         userLanguage,
//         dictionary: dictionaryList[userLanguage],
//         userLanguageChange: selected => {
//             const newLanguage = languageOptions[selected] ?selected:'en';
//             setUserlanguage(newLanguage);
//             window.localStorage.setItem('d_lang', newLanguage);
//         }
//     }
//
//     return (
//         <Store.Provider value={value}>{props.children}</Store.Provider>
//     )
// }
