import { useId, useRef, useTransition } from "react";
import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import College from "./College";
import { subjectContext } from "./CreateContext";


function App() {
const [subject,setSubject]=useState("");

  return (
     <subjectContext.Provider value={subject}>
      <select value={subject} onChange={(evt)=>setSubject(evt.target.value)}>
        <option value="">Select Subject</option>
        <option value="Maths">Maths</option>
        <option value="History">History</option>
        <option value="CS">CS</option>
      </select>
      <button onClick={()=>setSubject("")}>Clear</button>
      <div style={{backgroundColor:"red",padding:"10px"}}>
    <h1>Context API</h1>
    <College/>
      </div>
     </subjectContext.Provider>
  )

}
export default App;
