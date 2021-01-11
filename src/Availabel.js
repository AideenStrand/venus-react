import React from "react";

class Availabel extends React.Component {

    constructor() {
        super ();
        this.state = {
            availabelData: {}
        }
    }

    toggleButtonState = () => {
        console.log("im working")
        let selectedWord = window.getSelection().toString();
        fetch ("https://petstore.swagger.io/v2/pet/findByStatus?status=available")
            .then (response => response.json ())
            .then (data => this.setState (
                {availabelData: data[0]}))
    }

    render() {
        return (
            <div className="leftPos" >
                <h3  className="h">Choose id and put in your information please: </h3>
                <button className="button" onClick={this.toggleButtonState}>Click</button>
                <p>{this.state.availabelData.id}</p>

            </div>

        )
    }
}

/*
var response = []
var i;
fetch ("https://petstore.swagger.io/v2/pet/findByStatus?status=available")
    .then (response => response.json ())
    .then (data => {
        for (i = 0; i < data.length; i++) {
            response["id"] = data[i].id
            response["name"] = data[i].name
            console.log (response)
        }
    })
    .then (result =>
        this.setState (
            {
                availabelData: response
            }))

}*/


export default Availabel
