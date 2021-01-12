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
                <p>User ID:   {this.state.availabelData.id}</p>
                <p>User name: {this.state.availabelData.name}</p>
            </div>

        )
    }
}


export default Availabel
