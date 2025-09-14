import { useRef } from "react";
import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";

function App() {

   const handleForm=async()=>{
      await new Promise(res=>setTimeout(res,5000));
      console.log("submit");
   }

   function Form(){
      const {pending}=useFormStatus();
      console.log(pending);
      
      return(
         <div>
         <input type="text" placeholder="enter username" />
         <br />
         <br />
         <input type="password" placeholder="enter Password" />

         <button disabled={pending}>{pending?"submitting...":"submit"}</button>
         </div>
      )
   }


  
   return(
      <div>
        <form action={handleForm} >
        <Form/>

        </form>

      </div>
   )

}
export default App;