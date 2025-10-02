import { useEffect, useState } from "react";
import "./index.css";
function App() {
const[nameErr,setNameErr]=useState();

const[passErr,setPassErr]=useState();


const handleName=(evt)=>{
  if(evt.target.value.length>5){
    setNameErr("Length of name exceeded(only 5 characters)");
  }else{
    setNameErr();
  }

}
const handlePass=(evt)=>{
  let regex=/^[A-Z0-9]+$/i;
  if(regex.test(evt.target.value)){
    setPassErr();
  }
  else{
    setPassErr("No special characters allowed")
  }

}


  return (
    <>
  <input className={nameErr?"error":""} type="text" onChange={handleName} placeholder="enter your name"  />
  <span style={{color:"red"}}>{nameErr && nameErr}</span>
  <br />
  <br />
  <input className={passErr?"error":""} type="text" onChange={handlePass} placeholder="enter your password"  />
  <span style={{color:"red"}}>{passErr && passErr}</span>

  <br />
  <br />
  <button disabled={nameErr||passErr}>Login</button>

    </>
  )



}
export default App;
