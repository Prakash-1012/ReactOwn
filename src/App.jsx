import { useId, useRef, useTransition } from "react";
import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";

function App() {






  return (
    <div>
  <Users />
  <Users />



    </div>
  )

}
export default App;
function Users(){
  const user=useId();
  return(
    <div>
     <input type="text" id={user+"name"} placeholder="enter username"/>
     <label htmlFor={user+"name"}>enter name</label>
     <br />
     <br />
      <input type="password" id={user+"password"} placeholder="enter password"/>
     <label htmlFor={user+"password"}>enter password</label>
     <br />
     <br />
      <input type="text" id={user+"skills"} placeholder="enter skills"/>
     <label htmlFor={user+"skills"}>enter skills</label>
     <br />
     <br />
     <hr />

    </div>
  )
}