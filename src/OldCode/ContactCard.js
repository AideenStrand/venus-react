import React from "react";

function ContactCard(props) {

    return (
        <div>
             <h1>double</h1>
            <div>
            <h1> {props.contact.name}</h1>
            <img
                src={props.contact.imgUrl}
                sizes={20}
                height="150" width="150"
                alt="new"
            />
            <p1>email = {props.contact.email}</p1>
            <p1>phone = {props.contact.phone}</p1>

           </div>
        </div>
    )}
    export default ContactCard


