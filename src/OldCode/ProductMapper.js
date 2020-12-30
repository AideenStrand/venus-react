import React  from "react";

function ProductMapper(props){

    return(
        <div>
            <h1>id = {props.id}</h1>
            <h1>name = {props.productmap.name}</h1>
            <h1>price = {props.productmap.price}</h1>
        </div>
    )
}

export default ProductMapper
