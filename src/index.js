import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Page2 from "./Page2";

ReactDOM.render (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/page2" component={Page2}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById ('root')
);

reportWebVitals ();
