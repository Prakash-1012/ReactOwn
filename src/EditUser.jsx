import { useState,useEffect } from "react"
import { useNavigate, useParams } from "react-router";

export default function EditUser() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [course, setCourse] = useState("");
    const navigate=useNavigate()
    const {id} = useParams();
    const url = "http://localhost:3000/users/"+id;


    useEffect(()=>{
          fetchUserdata();

    },[])

    const fetchUserdata = async () => {
        let response = await fetch(url);
        response =await response.json();
        setName(response.name);
        setAge(response.age);
        setCourse(response.course);

    }

    const updateData=async()=>{
        let response = await fetch(url,{
            method:"Put",
            body:JSON.stringify({name,age,course})
        });
        response=await response.json();
        if(response){
        alert("user data updated")
        navigate("/");
        }


    }

    
    return (
        <>

            <input value={name} onChange={(evt)=>setName(evt.target.value)} type="text" placeholder="Enter new name" />
            <input value={age} onChange={(evt)=>setAge(evt.target.value)} type="text" placeholder="Enter new age" />
            <input value={course} onChange={(evt)=>setCourse(evt.target.value)} type="text" placeholder="Enter new course" />
            <button onClick={updateData}>Save Changes</button>





        </>
    )
}