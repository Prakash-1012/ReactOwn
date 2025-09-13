import { useRef } from "react";
import { useEffect, useState } from "react";
import ForwardRef from "./ForwardRef";
function App() {
const inputRef=useRef(null);
function handleRef(){
   inputRef.current.value=1000;
   inputRef.current.focus();
   inputRef.current.style.color="blue";
}
  
   return(
      <div>
         <ForwardRef ref={inputRef}/>
         <hr />
         <button onClick={handleRef}>
            Forward Ref
         </button>


      </div>
   )

}
export default App;