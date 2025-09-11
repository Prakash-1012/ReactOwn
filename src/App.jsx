import { useEffect, useState } from "react";

function App() {
const[cardStyle,setCardStyle]=useState({
  width:"200px",
  border:"2px solid #343a40",
  boxShadow:"1px 1px 10px 1px #0287fbff",
  margin:"20px"
})
const updateTheme=(bgcolor,textColor)=>{
setCardStyle({...cardStyle,backgroundColor:bgcolor,color:textColor});
}
    return (
      <div>
       <button onClick={()=>updateTheme("gray","green")}>New Theme</button>
          <button onClick={()=>updateTheme("white","black")}>Deafult theme</button>
        <div style={{display:"flex",flexWrap:"wrap"}}>
        
         <div style={cardStyle}>
             <img style={{width:"200px",boxShadow:"1px 1px 10px 1px #343a40",}}src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
             <div style={{padding:"10px"}}>
              <h3>Prakash Ranjan</h3>
              <p>Frontend Developer</p>
             </div>
             
          </div>
          <div style={cardStyle}>
             <img style={{width:"200px",boxShadow:"1px 1px 10px 1px #343a40",}}src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
             <div style={{padding:"10px"}}>
              <h3>Prakash Ranjan</h3>
              <p>Frontend Developer</p>
             </div>
             
          </div>
          <div style={cardStyle}>
             <img style={{width:"200px",boxShadow:"1px 1px 10px 1px #343a40",}}src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
             <div style={{padding:"10px"}}>
              <h3>Prakash Ranjan</h3>
              <p>Frontend Developer</p>
             </div>
             
          </div>
          <div style={cardStyle}>
             <img style={{width:"200px",boxShadow:"1px 1px 10px 1px #343a40",}}src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
             <div style={{padding:"10px"}}>
              <h3>Prakash Ranjan</h3>
              <p>Frontend Developer</p>
             </div>
             
          </div>
          <div style={cardStyle}>
             <img style={{width:"200px",boxShadow:"1px 1px 10px 1px #343a40",}}src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
             <div style={{padding:"10px"}}>
              <h3>Prakash Ranjan</h3>
              <p>Frontend Developer</p>
             </div>
             
          </div>
          <div style={cardStyle}>
             <img style={{width:"200px",boxShadow:"1px 1px 10px 1px #343a40",}}src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
             <div style={{padding:"10px"}}>
              <h3>Prakash Ranjan</h3>
              <p>Frontend Developer</p>
             </div>
             
          </div>
          <div style={cardStyle}>
             <img style={{width:"200px",boxShadow:"1px 1px 10px 1px #343a40",}}src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
             <div style={{padding:"10px"}}>
              <h3>Prakash Ranjan</h3>
              <p>Frontend Developer</p>
             </div>
             
          </div>
          <div style={cardStyle}>
             <img style={{width:"200px",boxShadow:"1px 1px 10px 1px #343a40",}}src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
             <div style={{padding:"10px"}}>
              <h3>Prakash Ranjan</h3>
              <p>Frontend Developer</p>
             </div>
             
          </div>
          <div style={cardStyle}>
             <img style={{width:"200px",boxShadow:"1px 1px 10px 1px #343a40",}}src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
             <div style={{padding:"10px"}}>
              <h3>Prakash Ranjan</h3>
              <p>Frontend Developer</p>
             </div>
             
          </div>
          <div style={cardStyle}>
             <img style={{width:"200px",boxShadow:"1px 1px 10px 1px #343a40",}}src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
             <div style={{padding:"10px"}}>
              <h3>Prakash Ranjan</h3>
              <p>Frontend Developer</p>
             </div>
             
          </div>
          <div style={cardStyle}>
             <img style={{width:"200px",boxShadow:"1px 1px 10px 1px #343a40",}}src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
             <div style={{padding:"10px"}}>
              <h3>Prakash Ranjan</h3>
              <p>Frontend Developer</p>
             </div>
             
          </div>
          <div style={cardStyle}>
             <img style={{width:"200px",boxShadow:"1px 1px 10px 1px #343a40",}}src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
             <div style={{padding:"10px"}}>
              <h3>Prakash Ranjan</h3>
              <p>Frontend Developer</p>
             </div>
             
          </div>
          <div style={cardStyle}>
             <img style={{width:"200px",boxShadow:"1px 1px 10px 1px #343a40",}}src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
             <div style={{padding:"10px"}}>
              <h3>Prakash Ranjan</h3>
              <p>Frontend Developer</p>
             </div>
             
          </div>
        </div>
        </div>
    )

}
export default App;