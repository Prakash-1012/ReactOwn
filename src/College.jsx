import { NavLink, Outlet } from "react-router";

export default function College(){
    return (
    <div className="college">
        <h1>College</h1>
        <NavLink to="" className="link">Student</NavLink>
        <NavLink to="Department" className="link">Department</NavLink>
        <NavLink to="Details" className="link">Details</NavLink>
        <Outlet/>
    </div>
    )
}