import Student from "./Student";

const College = ({ college }) => {
    return (
        <div>

            <ul>
                <li> <h1>Name:{college.name}</h1>  </li>
                <ul>
                    <li> <h2>City:{college.city}</h2></li>
                    <li> <h2>Website:{college.website}</h2></li>
                     {
            college.students.map((student)=>(
                <Student student={student}/>
            ))
        
        }
                </ul>
            </ul>
            
           


        </div>
    )

}
export default College;