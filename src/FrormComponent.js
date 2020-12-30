import React from "react"

function FormComponent(props) {

    return (<main>
        <form  onSubmit={props.handelSubmit}>
            <input type="text"
                   value={props.data.firstName}
                   name="firstName"
                   placeholder={"FirstName"}
                   onChange={props.handelchange}/><br/>

            <input type="text"
                   value={props.data.lastName}
                   name="lastName"
                   placeholder={"LastName"}
                   onChange={props.handelchange}/><br/>

            <input type="text"
                   value={props.data.age}
                   name="age"
                   placeholder={"Age"}
                   onChange={props.handelchange}/><br/>

            <label>

                <input type="radio"
                       value="male"
                       name="gender"
                       checked={props.data.gender === "male"}
                       onChange={props.handelchange}/> Male
            </label><br/>
            <label>
                <input type="radio"
                       value="female"
                       name="gender"
                       checked={props.data.gender === "female"}
                       onChange={props.handelchange}/> Female
            </label><br/><br/>

            <label>
                <input type="checkbox"
                       name="isVegan"
                       checked={props.data.isVegan}
                       onChange={props.handelchange}/> Vegan:
            </label>
            <br/>

            <label>
                <input type="checkbox"
                       name="withChicken"
                       checked={props.data.withChicken}
                       onChange={props.handelchange}/> WithChicken:
            </label>
            <br/>
            <label>
                <input type="checkbox"
                       name="withMeat"
                       checked={props.data.withMeat}
                       onChange={props.handelchange}/> WithMeat:
            </label>
            <br/><br/>

            <select value={props.data.destination} name="destination" onChange={props.handelchange}>
                <option value="">---please choose location</option>
                <option value="usa">USA</option>
                <option value="sweden">Sweden</option>
                <option value="north pole">North pole</option>
                <option value="south pole">South pole</option>
            </select>

            <p>{props.data.firstName}
                {props.data.lastName}
                {props.data.age}
                {props.data.gender}{props.data.destination}
                {props.data.isVegan ? "yes" : "no"}
                {props.data.withMeat ? "yes" : "no"}
                {props.data.withChicken ? "yes" : "no"}</p>

            <button>submit</button>
        </form>

    </main>
    )

}

export default FormComponent
