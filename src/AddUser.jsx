const AddUser=({setUser})=>{
    return(
        <div>
<input type="text" placeholder="Add new user" onChange={(evt)=>setUser(evt.target.value)} />
        </div>
    )
}
export default AddUser;