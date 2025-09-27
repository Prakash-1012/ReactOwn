import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router";

export default function UserList(){
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
      const deleteUser=async(id)=>{
        let response=await fetch(url+"/"+id,{
          method:"delete"
        });
        response=await response.json();
        if(response){
          alert("User Deleted");
          fetchData();
        }
      }
      return (
        <>
          <ul style={{display:"flex",justifyContent:"space-around",width:"800px",listStyleType:"none"}}>
              <li>Name</li>
              <li>Course</li>
              <li>Age</li>
              <li>Action</li>
            </ul>
    
        { !loading?
          userData.map((user,index)=>(
            <ul key={index} style={{display:"flex",justifyContent:"space-around",width:"800px",listStyleType:"none"}}>
              <li>{user.name}</li>
              <li>{user.course}</li>
              <li>{user.age}</li>
              <li><button onClick={()=>deleteUser(user.id)}>Delete</button></li>
            </ul>
          )):<h1>Data Loading...</h1>
        }
   
        </>
      )
    
}