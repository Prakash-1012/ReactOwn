import { useRef, useTransition } from "react";
import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import AddUser from "./AddUser";
import DisplayUser from "./DisplayUser";
function App() {

// lifting state up
const [user, setUser]=useState();




  return (
    <div>
     <AddUser setUser={setUser}/>
     <DisplayUser user={user}/>

    </div>
  )

}
export default App;