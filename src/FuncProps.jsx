function FuncProps({user,showUser}){

    return(
        <div>
            <button onClick={()=>showUser(user)}>alert name</button>
            
        </div>
    )
}

export default FuncProps;