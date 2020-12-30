import React from "react";
import FormComponent from "./FrormComponent";

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


    render() {
        return (
      <FormComponent handelchange={this.handelChange}
      data={this.state} handelSubmit={this.handelSubmit}/>
        )
    }

}
export default FormContainer
