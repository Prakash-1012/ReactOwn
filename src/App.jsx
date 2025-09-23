import {Routes,Route, Navigate} from "react-router";
import Contact from "./Contact";
import Login from "./Login";
import NavBar from "./NavBar";
import College from "./College";
import Student from "./Student";
import Department from "./Department";
import Details from "./Details";
function App() {


  return (
    <>
    <NavBar/>
  <Routes>
    <Route path="/" element={<h1>Home</h1>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/College" element={<College/>}>
    <Route path="Student" element={<Student/>}/> 
    <Route path="Department" element={<Department/>}/> 
    <Route path="Details" element={<Details/>}/> 


    </Route>


    <Route path="/*" element={<Navigate to="/"/>}/> 
  </Routes>
  
    </>
  )

}
export default App;
