import React from "react";
import './App.css';
import logo from "./images/logo.svg"
import FormContainer from "./FormContainer";
import Availabel from "./Availabel";
import {Route} from "react-router-dom";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            isloading: true
        }
    }

    render() {
        return (
            <div>
                <div className="App">
                    <h1>Venus React Site</h1>
                </div>
                <Route path="/home"/>
                <div>
                    <Availabel/>
                </div>
                <div>
                    <FormContainer/>
                </div>
                <div className="App-logo">
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
            </div>
        )
    }
}

export default App

