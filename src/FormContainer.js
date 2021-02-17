import React from "react";
import FormComponent from "./OldCode/FrormComponent";
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import {Link} from "react-router-dom";

class FormContainer extends React.Component {
    constructor() {
        super ();
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            id: "",
            gender: "",
            destination: "",
            isVegan: false,
            withChicken: false,
            withMeat: false,
            inputNode: ""
        }

        this.handelChange = this.handelChange.bind (this)
        this.handleSubmit = this.handleSubmit.bind(this)
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

    handleSubmit = (event) => {
        event.preventDefault ()
        console.log (event.target[0].value)
        console.log (event.target.elements.id.value)
        console.log (event.target.id.value)
        console.log (this.inputNode.value)

    }


    render() {
        return (
            <div className="centerPos">
                <div className="textColor">
                    <main>
                        <h3 className="h">Register your information please: </h3>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                <input type="text"
                                       value={this.state.firstName}
                                       name="firstName"
                                       placeholder={"FirstName"}
                                       onChange={this.handelChange}/>
                                <pre></pre>
                                <input type="text"
                                       value={this.state.lastName}
                                       name="lastName"
                                       placeholder={"LastName"}
                                       onChange={this.handelChange}/>
                                <pre></pre>

                                <input type="text"
                                       value={this.state.age}
                                       name="age"
                                       placeholder={"Age"}
                                       onChange={this.handelChange}/><br/>
                                <pre></pre>

                                <input type="text"
                                       value={this.state.id}
                                       name="id"
                                       placeholder={"user id"}
                                       onChange={this.handelChange}
                                       ref={node => (this.inputNode = node)}/><br/>
                                <pre></pre>

                                <input type="text"
                                       value={this.state.name}
                                       name="name"
                                       placeholder={"user name"}
                                       onChange={this.handelChange}/><br/>
                                <pre></pre>

                                <label>

                                    <input type="radio"
                                           value="male"
                                           name="gender"
                                           checked={this.state.gender === "male"}
                                           onChange={this.handelChange}/> Male
                                </label>
                                <label>
                                    <input type="radio"
                                           value="female"
                                           name="gender"
                                           checked={this.state.gender === "female"}
                                           onChange={this.handelChange}/> Female
                                </label><br/>
                                <pre></pre>

                                <h3 className="h">Choose food: </h3>
                                <label>Vegan:
                                    <input type="checkbox"
                                           name="isVegan"
                                           checked={this.state.isVegan}
                                           onChange={this.handelChange}/>
                                </label>
                                <pre></pre>

                                <label>WithChicken:
                                    <input type="checkbox"
                                           name="withChicken"
                                           checked={this.state.withChicken}
                                           onChange={this.handelChange}/>
                                </label>
                                <pre></pre>

                                <label>WithMeat:
                                    <input type="checkbox"
                                           name="withMeat"
                                           checked={this.state.withMeat}
                                           onChange={this.handelChange}/>
                                </label>
                                <br/><br/>

                                <select value={this.state.destination} name="destination" onChange={this.handelChange}>
                                    <option value="">---please choose location</option>
                                    <option value="usa">USA</option>
                                    <option value="sweden">Sweden</option>
                                    <option value="north pole">North pole</option>
                                    <option value="south pole">South pole</option>
                                </select><br/>

                                <Link
                                    to={{
                                        pathname: "/page2",
                                        id: this.state.id,
                                        firstName: this.state.firstName,
                                        lastName: this.state.lastName,
                                    }}
                                >
                                    <button type="submit" className="button"> submit</button>
                            </Link>
                            </label>

                        </form>

                        <p className="rightPos">Your name is : {this.state.firstName}<br/>
                            <pre></pre>
                            your surname is : {this.state.lastName}<br/>
                            <pre></pre>
                            your age is : {this.state.age}<br/>
                            <pre></pre>
                            you are : {this.state.gender}<br/>
                            <pre></pre>
                            you user id: : {this.state.id}<br/>
                            you user name: {this.state.name}<br/>
                            <pre></pre>
                            vegan:{this.state.isVegan ? "Yes" : "No"}<br/>
                            <pre></pre>
                            vegan:{this.state.withMeat ? "Yes" : "No"}<br/>
                            <pre></pre>
                            vegan:{this.state.withChicken ? "Yes" : "No"}<br/>
                            <pre></pre>
                            destination : {this.state.destination}
                        </p>
                    </main>
                </div>
            </div>
        )
    }



}

export default FormContainer
