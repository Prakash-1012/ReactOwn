import { useEffect, useState } from "react";
import { Routes, Route, Navigate, NavLink } from "react-router";
import UserList from "./UserList";
import UserAdd from "./UserAdd";

function App() {
  return (
    <>
<h1>Make user list and add new user and display on UI</h1>
<ul>
  <li>
    <NavLink to="/">UserList</NavLink>
  </li>
  <li>
    <NavLink to="/addUser">Add new user</NavLink>

  </li>
</ul>
<Routes>


  <Route path="/" element={<UserList/>}/>
  <Route path="/addUser" element={<UserAdd/>}/>

  
</Routes>

    </>
  )



}
export default App;
