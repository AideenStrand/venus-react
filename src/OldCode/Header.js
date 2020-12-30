import React from "react";
import ContactCard from "./ContactCard"

function Header() {
    const date = new Date (2018, 12, 2, 3);
    const firstname = "cai";
    const lastname = "berger";
    let timeOfDay;
    const hours = date.getHours ();

    const styles = {
        backgroundColor: "pink",
        fontSize: 24,
    }

    if (hours < 12) {
        timeOfDay = "morning"
        styles.color = "yellow"
    } else {
        timeOfDay = "night"
        styles.color = "black"
    }

    return (//<h1> `{${firstname} ${lastname}}` </h1>
        //<h1> {firstname  + "  "  + lastname} </h1>
        <div className={"center"}>
            <div>
                <h2 style={styles}> good {timeOfDay}</h2>
            </div>
        <ContactCard
            contact = {{name: firstname,
                phone : "8099999",
                imgUrl: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
                email : "aideen.strandsson@gmail.com"}}
             />

                <ContactCard
                   contact={{name: lastname,    phone:"876876876",
                       imgUrl: "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350",
                       email : "cai.nerger @hotmail"}}
                 />

        </div>

    )
}

export default Header;
