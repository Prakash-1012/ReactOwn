import { useState } from "react"

function Skills(){
    const[skills,setSkills]=useState([]);
    const handleSkills=(evt)=>{
        console.log(evt.target.value,evt.target.checked);
        if(evt.target.checked){
            setSkills([...skills,evt.target.value]);
        }
        else{
            setSkills([...skills.filter((item)=>item!=evt.target.value)]);
        }
        
    }
    return(
        <div>
            <input onChange={handleSkills} type="checkbox" value="PHP" id="php" />
            <label htmlFor="php">PHP</label>
            <br />
            <br />
            <input onChange={handleSkills} type="checkbox" value="JS" id="js" />
            <label htmlFor="js">JS</label>
            <br />
            <br />
            <input onChange={handleSkills} type="checkbox" value="Java" id="java" />
            <label htmlFor="java">Java</label>
            <br />
            <br />
            <input onChange={handleSkills} type="checkbox" value="Node" id="node" />
            <label htmlFor="node">Node</label>
            
            <h1>{skills.toString()}</h1>
        </div>
    )
}
export default Skills;