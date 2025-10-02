import { lazy, Suspense, useEffect, useState } from "react";
import "./index.css";
function App() {
const Users=lazy(()=>import("./Users"))
const[load,setLoad]=useState(false);




  return (
    <>
    <h1>Lazy Loading</h1>
  <button onClick={()=>setLoad(true)}>Load Users</button>
  {
    load?<Suspense fallback={<p>loading...</p>}><Users/></Suspense>:null
  }

    </>
  )



}
export default App;
