import { Link } from "react-router"

export default function Users(){
    const Users=[
        {id:1,name:"Prakash"},
        {id:2,name:"Priya"},
        {id:3,name:"Parag"},
        {id:4,name:"Arijit"},
        
    ]
    return (
    <div>
        <h1>User List Page</h1>
        {
        Users.map((item)=>(
            <div>
           <Link className="link" to={"/users/"+item.id}><h4>{item.name}</h4></Link>
            </div>
        ))
    }
        <hr />
   {
        Users.map((item)=>(
            <div>
           <Link className="link" to={"/users/"+item.id+"/"+item.name}><h4>{item.name}</h4></Link>
            </div>
        ))
    }
    </div>
    )
}