import { Link, useParams } from "react-router"

export default function UserDetails(){
    const UserData=useParams();
    return (
    <div>
        <h1>User id:{UserData.id}</h1>
        <h1>User id:{UserData.name}</h1>

        <Link to="/Users">Back</Link>
    </div>
    )
}