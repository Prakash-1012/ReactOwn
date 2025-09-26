import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router";

function App() {
  const[userData,setUserdata]=useState([]);
  const[loading,setLoading]=useState(false)
  useEffect(()=>{
    setLoading(true);
  fetchData();
  },[])

  const url="http://localhost:3000/users";
  const fetchData=async ()=>{
    let response=await fetch(url);
    response=await response.json();
    setLoading(false);
    setUserdata(response);
  }
  return (
    <>

    { !loading?
      userData.map((user,index)=>(
        <ul key={index}className="flex justify-center">
          <li>{user.name}</li>
          <li>{user.course}</li>
          <li>{user.age}</li>
        </ul>
      )):<h1>Data Loading...</h1>
    }
    </>
  )

}
export default App;
