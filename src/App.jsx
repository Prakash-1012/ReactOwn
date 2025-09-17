import { useRef, useTransition } from "react";
import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
function App() {

const[users,setUsers]=useState([]);
const[user,setUser]=useState();

const handleUsers=()=>{
  setUsers([...users,user]);
}
// derived states
let total_user=users.length;
let last_user=users[total_user-1];
let unique_users=[...new Set(users)].length;




  return (
    <div>
      <input type="text" placeholder="add new user" onChange={(evt)=>setUser(evt.target.value)} />
      <button onClick={handleUsers}>Add user</button>
      <h1>Total users:{total_user}</h1>
      <h1>Last user:{last_user}</h1>
      <h1>Unique users:{unique_users}</h1>

    </div>
  )

}
export default App;