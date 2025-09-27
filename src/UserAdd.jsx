import { useState } from "react"

export default function UserAdd() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [course, setCourse] = useState("");
    const url="http://localhost:3000/users";

    const addUser=async()=>{
        let response=await fetch(url,{
            method:"Post",
            body:JSON.stringify({name,age,course})
        })
        response=response.json();
        if(response){
            alert(`New user added`);
        }
    }


    return (
        <>
            <h1>Add new user</h1>
            <input onChange={(evt) => setName(evt.target.value)} type="text" placeholder="Enter Name" />
            <input onChange={(evt) => setAge(evt.target.value)} type="text" placeholder="Enter Age" />
            <input onChange={(evt) => setCourse(evt.target.value)} type="text" placeholder="Enter Course" />
            <button onClick={addUser}>Add User</button>

        </>
    )
}