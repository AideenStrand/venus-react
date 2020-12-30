import React from "react"


function Conditional(props){
    if(props.isloading === true){
        return (
            <h1>is loading</h1>
        )
    }
    else {
        return (
            <h1>finished</h1>
        )
    }

}
export default Conditional

