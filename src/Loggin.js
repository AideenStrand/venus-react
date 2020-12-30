import React from "react";

class Loggin extends React.Component{

    constructor() {
        super ();
        this.state = {
            isLogedin : false
        }

        this.handelClick = this.handelClick.bind(this)
    }

    handelClick() {
        console.log("im working")
        this.setState(prevState =>{
            return {
                isLogedin: !prevState.isLogedin
            }
        })

    }

    render() {
        let buttonText = this.state.isLogedin ? "LOG OUT": "its loged in"
        return (
            <div>
                hhh
                <button onClick={this.handelClick}> {buttonText}</button>
            </div>
        )
    }
}

export default Loggin
