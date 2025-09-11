import { useEffect } from "react";
const Student=({count})=>{
       function callback(){
        console.log("callback called");
        
       }
    
       useEffect(()=>{
       callback();
       },[])
    return(
        <div>
           
        </div>
    )
}
export default Student;