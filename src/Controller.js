import React from "react";

class Controller extends React.Component {

    constructor() {
        super ();
        this.state = {
            loading: true,
            chara: {}
        }
    }

    componentDidMount() {
        this.setState ({loading: true})

        fetch ("https://petstore.swagger.io/v2/pet/findByStatus?status=available")
            .then (response => response.json ())
            .then (data => {
                this.setState ({
                        loading: false,
                        chara: data[0]
                    }
                )
            })
    }

    render() {
        const text = this.state.loading ? "loadin" : this.state.chara.id
        return (
            <div>
                <div>{text}</div>
            </div>
        )
    }
}

export default Controller
