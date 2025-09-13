import { useRef } from "react";
import { useEffect, useState } from "react";

function App() {
  

   const handleInput=(evt)=>{
   const user=document.querySelector("#user").value;
   const password=document.querySelector("#password").value;
      evt.preventDefault();
      console.log(user);
      console.log(password);
   }



   

    return(
      
      <div> 
      <form action="" onSubmit={handleInput}>
      <input id="user" type="text" placeholder="Username" />
      <br />
      <br />
      <input id="password" type="password" placeholder="Password" />
      <br />
      <br />
      <button>
         Submit
      </button>
      </form>

      </div>

    )

}
export default App;