import { useEffect } from "react";

function LifeCycle({count,data}){

   useEffect(()=>{
    console.log("mounting phase only");
    
   },[])
   
   useEffect(()=>{
    console.log("updating phase only");
    
   },[count,data])

   useEffect(()=>{
    return()=>{
        console.log("unmounting phase only");
    }
   },[])
//    useEffect(()=>{
//     console.log("always");
    
//    })

    return(
        <>
       <h1>Life Cycle</h1>
      
        </>
    )
}
export default LifeCycle;