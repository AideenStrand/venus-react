import React from "react"

function FormComponent(props) {

    return (<main>
            <h3 className="h">Register your information please: </h3>
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

            <h3 className="h">Choose food: </h3>
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


        </form>

            <p className="rightPos">Your name is  : {props.data.firstName}<br/><pre></pre>
                your surname is  : {props.data.lastName}<br/><pre></pre>
                your age is  : {props.data.age}<br/><pre></pre>
                you are : {props.data.gender}<br/><pre></pre>
                vegan:{props.data.isVegan ? "Yes" : "No"}<br/><pre></pre>
                vegan:{props.data.withMeat ? "Yes" : "No"}<br/><pre></pre>
                vegan:{props.data.withChicken? "Yes" : "No"}<br/><pre></pre>
                destination :  {props.data.destination}
            </p>

            <button className="button"> submit</button>

    </main>
    )

}

export default FormComponent
