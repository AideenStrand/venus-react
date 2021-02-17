import React, {useEffect} from "react";

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

        {
            this.checkId (this.props.location.id)
        }

        if (this.state.availableData.validate === true) {
            return (
                <div className="centerPos">
                    <p> You registered your information successfully </p>
                    <p> You registered id is : {this.state.availableData.id} </p>
                </div>
            );
        }else{
            return(
            <div className="centerPos">
                <p>you have wrong number</p>
            </div>)
        }
    }
}

export default Page2;
