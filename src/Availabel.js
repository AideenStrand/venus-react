import React from "react";

class Availabel extends React.Component {

    constructor() {
        super ();
        this.state = {
            availabelData: {},
            count: 0
        }
    }

    toggleButtonState = (event) => {
        var response = []
        var i;


        console.log (this.state.count)
        fetch ("https://petstore.swagger.io/v2/pet/findByStatus?status=pending")
            .then (response => response.json ())
           // .then(repo => console.log(repo))
            .then(data => {
                for(var i in data){
                    response.push({
                        id: data[i].id,
                        name: data[i].name
                    });
                }
                console.log(response)
            })
            .then (data => this.setState (prevState => {
                return {
                    availabelData: response[this.state.count],
                    count: prevState.count + 1
                }
            }))
    }

    render() {
        return (
            <div className="leftPos">
                <h3 className="h">Click for chosing id and put in your information<pre>or</pre>Click again and take
                    new one:
                </h3>
                <button type="button" className="button" onClick={this.toggleButtonState}>Click</button>
                <p>{this.state.availabelData.id}</p>
                <p>{this.state.availabelData.name}</p>
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
