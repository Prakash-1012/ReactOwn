import { useRef, useTransition } from "react";
import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";

function App() {
const [pending,startTransition]=useTransition();
const handlebutton=()=>{
startTransition(async()=>{
   await new Promise(res=>setTimeout(res,3000))

})

}
   return(
      <div>
         {
            pending?<img style={{width:"200px"}} src="https://res.cloudinary.com/bytesizedpieces/image/upload/v1656084931/article/a-how-to-guide-on-making-an-animated-loading-image-for-a-website/animated_loader_gif_n6b5x0.gif" />:null 
         }
         <button disabled={pending} onClick={handlebutton}>click me!</button>

      </div>
   )

}
export default App;