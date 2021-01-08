import React from "react";

function Todoitem(props){


    return(

        <div>
            <p>key resoult={props.id}</p>


            <input type={"checkbox"}
                   checked={props.item.complete}
            onChange={()=> props.handelChnage(props.item.id)}/>

            <p>{props.item.name}</p>
        </div>


    )
}

export default Todoitem
