import { useState } from "react";

function Dropdown(){
    const[game,setGame]=useState("RDR 2")
    return(
        <div>
            <h1>Handle dropdowns</h1>
            <h2>Select Game</h2>
           <select onChange={(evt)=>setGame(evt.target.value)} defaultValue={"RDR 2"}>
            <option value="RDR 2">RDR 2</option>
            <option value="Cyberpunk 2077">Cyberpunk 2077</option>
            <option value="RE4 remake">RE4 remake</option>
           </select>
           <h3>Selected Game:{game}</h3>
        </div>
    )
}
export default Dropdown;