const ForwardRef=(props)=>{
    return(
        <div>
            <input ref={props.ref}type="text" placeholder="enter value" />
        </div>
    )
}
export default ForwardRef;