import { useRef } from "react";
import { useEffect, useState } from "react";

function App() {

   const divRef=useRef(null);
   const inputRef=useRef(null);
   const handleInputRef=()=>{
      inputRef.current.focus();
      inputRef.current.value="Prakash ranjan"
   }
   const handleDiv=()=>{
      if( divRef.current.style.display!="none"){
          divRef.current.style.display="none"
      }
      else{
          divRef.current.style.display="inline"
      }

  
   }

    return(
      
      <div>
         <h1>UseRef</h1>
         <div>
             <div >
             <img style={{width:"200px",boxShadow:"1px 1px 10px 1px #343a40",}}src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
             <div  style={{padding:"10px"}}>
              <h3>Prakash Ranjan</h3>
              <p ref={divRef}>Frontend Developer</p>
             </div>
         </div>
      </div>
      <button onClick={handleDiv}>Change text color</button>
      <br />
      <br />
      <button onClick={handleInputRef}>focus on input field</button>
      <br />
      <br />      
      <input ref={inputRef} type="text" placeholder="enter your name" />
      </div>

    )

}
export default App;