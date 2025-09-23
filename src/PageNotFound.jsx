import { Link } from "react-router";
import "./header.css"
function PageNotFound(){
    return(
        <div style={{textAlign:"center"}}>
        <h1>Page Not Found</h1>
        <div>
            <Link style={{textDecoration:"none",color:"black",border:"1px solid gray",borderRadius:"1.2rem",padding:".5rem",margin:"2rem"}} to="/">Back to Home</Link>
        </div>
        <img style={{width:"600px",margin:"2rem"}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe1U-fzbIq8W3EKClK4jZSXEkaeWKcX4aGIQ&s" alt="" />
        </div>
    )
}
export default PageNotFound;