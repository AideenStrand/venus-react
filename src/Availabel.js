import React from "react";

class Availabel extends React.Component {

    constructor() {
        super ();
        this.state = {
            availabelData: "",
          count:0}
    }

    toggleButtonState = (event) => {
        var response = []
        var i;

        console.log(this.state.count)
        fetch ("https://petstore.swagger.io/v2/pet/findByStatus?status=available")
            .then (response => response.json ())
            .then (data => {
                for (i = 0; i < data.length; i++) {
                    response["id"] = data[this.state.count].id
                }
                console.log ("this is response")
                console.log (response)
            })
            .then (data => this.setState( prevState => {
                return {
                    availabelData: response["id"],
                    count: prevState.count  + 1
                }}))
    }

    render() {
        return (
            <div className="leftPos" >
                <h3  className="h">Choose id and put in your information please: </h3>
                <button type="button" className="button" onClick={this.toggleButtonState}>Click</button>
                <p>{this.state.availabelData}</p>
                <button type="button" className="button" onClick={this.toggleButtonState}>{this.state.count}</button>

            </div>

        )
    }
}

export default Availabel
