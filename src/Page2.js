import React from "react";

class Page2 extends React.Component {

    constructor(props) {
        super (props);
        console.log (this.props)
        this.state = {
            availableData: {},
        }
    }

    checkId(event) {

        var response = []

        if (this.state.availableData.validate !== true) {
            fetch ("https://petstore.swagger.io/v2/pet/findByStatus?status=available")
                .then (res => res.json ())
                .then (data => {
                    for (var i in data) {

                        if (parseInt (event) === data[i].id) {

                            response.push ({
                                id: data[i].id,
                                validate: true
                            });

                            break;
                        }

                    }
                    console.log ("event")
                    console.log (event)
                    console.log (response)
                })
                .then (re => this.setState (preState => {
                        for (var i in response) {
                            return {
                                availableData: response[i]
                            }
                        }

                    }
                ))
        }
    }


    render() {

            this.checkId (this.props.location.id)

        if (this.state.availableData.validate === true) {
            return (
                <div className="centerPos">
                    <p> You registered your information successfully </p>
                    <p> Name : <span
                        className="rightNumber"> {this.props.location.firstName} {this.props.location.lastName}</span>
                    </p>
                    <p> Registered id : <span className="rightNumber">{this.state.availableData.id} </span></p>
                    <p> User name : <span className="rightNumber">{this.props.location.userName} </span></p>
                    <p> Birth date : <span className="rightNumber">{this.props.location.age} </span></p>
                    <p> Address : <span className="rightNumber">{this.props.location.destination} </span></p>
                    <p> Selected Food: <span className="rightNumber">{this.props.location.isVegan} </span></p>
                </div>
            );
        } else {
            return (
                <div className="centerPosAlert">
                    <p className="WrongNumber"> Wrong number  !</p>
                    <p className="hWrong">Please back to previous page and choose right id </p>
                </div>)
        }
    }
}

export default Page2;
