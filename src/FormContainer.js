import React from "react";
import FormComponent from "./FrormComponent";
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';

class FormContainer extends React.Component {
    constructor() {
        super ();
        this.state = {
            firsName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            isVegan: false,
            withChicken: false,
            withMeat: false
        }

        this.handelChange = this.handelChange.bind (this)
        this.handelSubmit = this.handelSubmit.bind (this)
    }

    handelChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState (
            {
                [name]: checked
            })
            :
            this.setState ({[name]: value})
    }

    handelSubmit(event){
        event.preventDefault()
        console.log(event.target.name)
    }

    handelSubmit(e){
        e.preventDefault ();
        alert ('A name was submitted: ');
        window.location.href="PageTwo.js";
        window.location.href="/PageTwo.js";
        document.getElementById("write").innerHTML = window.location.search;
    }



    render() {
        return (<div className="centerPos">
      <div className="textColor"><FormComponent handelchange={this.handelChange}
                                data={this.state} handelSubmit={this.handelSubmit}/></div>
            </div>
        )
    }

}
export default FormContainer
