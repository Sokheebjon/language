import React from 'react';
import ReactDOM from 'react-dom';
// import {StoreProvider} from "./Store";
import {BrowserRouter} from "react-router-dom";
import App from './App';
import './i18/i18next'

ReactDOM.render(
    <React.Fragment>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.Fragment>,
    document.getElementById('root')
);

