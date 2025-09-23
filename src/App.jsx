import {Routes,Route, Navigate} from "react-router";
import Contact from "./Contact";
import Login from "./Login";
import NavBar from "./NavBar";
import PageNotFound from "./PageNotFound";
function App() {


  return (
    <>
    <NavBar/>
  <Routes>
    <Route path="/" element={<h1>Home</h1>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/Login" element={<Login/>}/>
    {/* <Route path="/*" element={<PageNotFound/>}/> */}
    <Route path="/*" element={<Navigate to="/"/>}/>   {/* redirects to home page if page not found */}
  </Routes>
  
    </>
  )

}
export default App;
