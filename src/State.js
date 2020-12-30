import  React, {Component} from "react";


class State extends Component{

    constructor(props, context) {
        super (props, context);
        this.state = {
            isLoggin : true
        }
    }

    render() {
        let text
        if(this.state.isLoggin){
            text = "yes it is"
        }
        return(
            <div>
                <p>{text}</p>
            </div>
        )
    }
}

export default State
