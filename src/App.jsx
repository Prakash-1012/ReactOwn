import {Routes,Route} from "react-router";
import Contact from "./Contact";
import Login from "./Login";
import NavBar from "./NavBar";
function App() {


  return (
    <>
    <NavBar/>
  <Routes>
    <Route path="/" element={<h1>Home</h1>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/Login" element={<Login/>}/>
  </Routes>
  
    </>
  )

}
export default App;
