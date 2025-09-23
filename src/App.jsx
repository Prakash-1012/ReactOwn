import { BrowserRouter,Routes,Route,Link } from "react-router";
function App() {


  return (
    <>
  <BrowserRouter>
  <Link to="/">Home</Link>
  <Link to="/contact">Contact</Link>
  <Link to="/about">About</Link>


  <Routes>
    <Route path="/" element={<h1>Home</h1>}/>
    <Route path="/contact" element={<h1>Contact</h1>}/>
    <Route path="/about" element={<h1>About</h1>}/>

  </Routes>
  </BrowserRouter>
    </>
  )

}
export default App;
