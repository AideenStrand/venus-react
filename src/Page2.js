import React from "react";
import DataJson from "./DataJson";

class Page2 extends React.Component{

    constructor(props) {
        super(props);
        console.log(this.props)
        this.state ={
            availabelData: {},
        }
    }

    checkId(event) {
        var response = []
        fetch ("https://petstore.swagger.io/v2/pet/findByStatus?status=available")
            .then (res => res.json ())
            .then (data => {
                for (var i in data) {
                    response.push ({
                        id: data[i].id,
                    });
                }
                console.log("event")
                console.log(event)
                console.log(response)
            })
            .then (re => this.setState(preState =>{
                for(var i in response) {
                    if (parseInt(event) === response[i].id) {
                        console.log("true")
                        return {
                            availabelData: response[i]
                        }

                    }
                }
            }
            ))
/*        console.log("ava")
        console.log(this.state.availabelData.id)*/
            }

    render() {
        return (
            <div className="centerPos">
                <p>true: {this.state.availabelData.id}</p>
                <p> You registered your information successfully </p>
                <p> You registered id is : {this.props.location.id} </p>
                <button type="button" className="button"
                        onClick={this.checkId(this.props.location.id)}>Click</button>
            </div>
        );
    }
}

export default Page2;
