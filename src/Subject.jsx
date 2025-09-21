import { useContext } from "react";
import { subjectContext } from "./CreateContext";


function Subject() {

const subject=useContext(subjectContext);
  return (
    <div style={{backgroundColor:"gray",padding:"10px"}}>
        <h1>Subject is:{subject}</h1>
    </div>
  )

}
export default Subject;