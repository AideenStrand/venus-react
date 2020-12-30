import React from "react"


class Form extends React.Component {

    constructor() {
        super ();
        this.state = {
            firstName: "",
            lastName: "",
            isFriendly:false,
            gender:"",
            fvColor:"blue"
        }
        this.handelCheck = this.handelCheck.bind (this)
    }

    handelCheck(event) {
        const {name, value, type, checked, radio} = event.target
        type === "checkbox" ? this.setState({[name]: checked }) : this.setState ({[name]: value})
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handelsubmit}>
                    <input type="text"
                           value={this.state.firstName}
                           name="firstName"
                           placeholder={"firstname"}
                           onChange={this.handelCheck}/>
                    <br/>

                    <input type="text"
                           value={this.state.lastName}
                           name="lastName"
                           placeholder={"lastname"}
                           onChange={this.handelCheck}/>
                    <h1>{this.state.firstName} {this.state.lastName}</h1>

                    <textarea value={"comment somthing"}></textarea>
                    <br/>
                    <label>
                        <input type="checkbox"
                               name="isFriendly"
                               checked={this.state.isFriendly}
                          onChange={this.handelCheck}/> is friendly
                    </label>
                    <br/>
                    <label>
                        <input type="radio"
                               name="gender"
                               value="male"
                               checked={this.state.gender === "male"}
                          onChange={this.handelCheck}/> male
                    </label>
                    <br/>
                    <label>
                        <input type="radio"
                               name="gender"
                               value="female"
                               checked={this.state.gender === "female"}
                          onChange={this.handelCheck}/> female
                        <h1>you are {this.state.gender}</h1>
                    </label>

                    <label>you favorit color</label>
                    <select value={this.state.fvColor} name="fvColor" onChange={this.handelCheck}>
                        <option value="blue">Blue</option>
                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="yellow">Yellow</option>
                    </select>
                    <h1>your favorit colot if : {this.state.fvColor}</h1>
                    <button>sbmmit</button>
                </form>
            </div>
        )
    }

}


export default Form
