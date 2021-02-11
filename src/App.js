import React from "react";
import './App.css';
import {Switch, Route} from "react-router-dom";
import Language from "./components/Language";
import Page from './components/Page/Page'

function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path="/" component={Language}/>
            <Route exact path="/page" component={Page}/>
        </Switch>
    </div>
  );
}

export default App;
