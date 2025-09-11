import { useState } from "react";

function Radio(){
    const[gender,setGender]=useState("male");
    return(
        <div>
            <h1>Radio Buttons</h1>
            <h2>Select Your Gender</h2>
            <input type="radio" name="gender" onChange={(evt)=>setGender(evt.target.value)} value={"male"} id="male" checked={gender=="male"}/>
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" onChange={(evt)=>setGender(evt.target.value)} value={"female"}id="female" checked={gender=="female"}/>
            <label htmlFor="female">Female</label>
            <h3>Selected gender:{gender}</h3>
        </div>
    )
}
export default Radio;