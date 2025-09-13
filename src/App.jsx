import { useRef } from "react";
import { useEffect, useState } from "react";
import FuncProps from "./FuncProps"
function App() {
   const [user,setuser]=useState();
   const showUser=(user)=>{
     alert(user);
   }
  
   return(
      <div>
         <input onChange={(event)=>setuser(event.target.value)} type="text" placeholder="enter user" />
         <FuncProps showUser={showUser} user={user}/>
         <FuncProps showUser={showUser} user={user}/>
         <FuncProps showUser={showUser} user={user}/>
         <FuncProps showUser={showUser} user={user}/>
         <FuncProps showUser={showUser} user={user}/>

      </div>
   )

}
export default App;