import React from "react"

function FormComponent(props) {

    return (<main>
            <h5>Register your information please: </h5>
        <form  onSubmit={props.handelSubmit}>
            <input type="text"
                   value={props.data.firstName}
                   name="firstName"
                   placeholder={"FirstName"}
                   onChange={props.handelchange} />   <pre></pre>

            <input type="text"
                   value={props.data.lastName}
                   name="lastName"
                   placeholder={"LastName"}
                   onChange={props.handelchange}/>  <pre></pre>

            <input type="text"
                   value={props.data.age}
                   name="age"
                   placeholder={"Age"}
                   onChange={props.handelchange}/><br /><pre></pre>

            <label>

                <input type="radio"
                       value="male"
                       name="gender"
                       checked={props.data.gender === "male"}
                       onChange={props.handelchange}/> Male
            </label>
            <label>
                <input type="radio"
                       value="female"
                       name="gender"
                       checked={props.data.gender === "female"}
                       onChange={props.handelchange}/> Female
            </label><br/><pre></pre>

            <label>Vegan:
                <input type="checkbox"
                       name="isVegan"
                       checked={props.data.isVegan}
                       onChange={props.handelchange}/>
            </label><pre></pre>


            <label>WithChicken:
                <input type="checkbox"
                       name="withChicken"
                       checked={props.data.withChicken}
                       onChange={props.handelchange}/>
            </label><pre></pre>

            <label>WithMeat:
                <input type="checkbox"
                       name="withMeat"
                       checked={props.data.withMeat}
                       onChange={props.handelchange}/>
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
                {props.data.gender}{props.data.destination}</p>

            <button className="button"> submit</button>
        </form>

    </main>
    )

}

export default FormComponent
