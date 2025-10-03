import { lazy, Suspense, useActionState, useEffect, useReducer, useState } from "react";
import "./index.css";
function App() {
  const emptyData={
    name:"",
    age:"",
    email:"",
    city:"",
    address:""
  }
  const reducer=(data,action)=>{
    return{...data,[action.type]:action.val}
  }
  const [state,dispatch]=useReducer(reducer,emptyData);
  return (
    <>

    <input type="text" placeholder="enter name" onChange={(evt)=>dispatch({type:"name",val:evt.target.value})} />
    <br />
    <br />
    <input type="text" placeholder="enter age" onChange={(evt)=>dispatch({type:"age",val:evt.target.value})}/>
      <br />
    <br />
    <input type="text" placeholder="enter email" onChange={(evt)=>dispatch({type:"email",val:evt.target.value})}/>
      <br />
    <br />
    <input type="text" placeholder="enter city" onChange={(evt)=>dispatch({type:"city",val:evt.target.value})} />
    <br />
    <br />
    <input type="text" placeholder="enter address" onChange={(evt)=>dispatch({type:"address",val:evt.target.value})}/>

    <h1>Name:{state.name}</h1>
    <h1>Age:{state.age}</h1>
    <h1>Email:{state.email}</h1>
    <h1>City:{state.city}</h1>
    <h1>Address:{state.address}</h1>






    </>
  )



}
export default App;
