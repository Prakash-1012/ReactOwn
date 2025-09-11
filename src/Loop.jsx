function Loop({ user }) {

    return (
        <div style={{ border: "1px solid green", color: "green", borderRadius: "10px", margin: "10px", width: "400px", padding: "2rem" }}>
            <h1>Id:{user.id}</h1>
            <h1>Name:{user.name}</h1>
            <h1>Age:{user.age}</h1>
            <h1>Email:{user.email}</h1>

        </div>
    )
}
export default Loop;