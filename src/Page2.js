import React from "react";
import FormContainer from "./FormContainer";

function Page2(props) {

    console.log(props.location.id)
    return (
        <div className="centerPos">
   {/*         <FormContainer />*/}
            <p>You registered your information</p>
        </div>
    );

}

export default Page2;
