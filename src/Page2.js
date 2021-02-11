import React from "react";
import FormContainer from "./FormContainer";

function Page2(props) {


    return (
        <div className="centerPos">
            <p>You registered your information successfully</p>

            <p >You registered id is : {props.location.id} </p>

        </div>
    );

}

export default Page2;
