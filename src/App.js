import React from "react";
import './App.css';
import logo from "./images/logo.svg"
import FormContainer from "./FormContainer";
import Availabel from "./OldCode/Availabel";

class App extends React.Component {

    constructor() {
        super ();
        this.state={
            isloading: true
        }
    }

    render() {
        return(
            <div>
            <div className="App">
                <h1 className="h1">Venus React Site</h1>

            </div>
            <div>
                <Availabel />
            </div>
                <div>
                    <FormContainer/>
                </div>
                <div className="App-logo">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
            </div>
        )
    }
}

//       <div><Checkboxs isloading={this.state.isloading}/></div>
export default App


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer" >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
