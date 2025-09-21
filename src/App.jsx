import { useId, useRef, useTransition } from "react";
import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import useToggle from "./useToggle";

function App() {

const [value,toggleVal]=useToggle(true);
  return (
    <>
      <button onClick={toggleVal}>Toggle Heading</button>
      <button onClick={()=>toggleVal(false)}>Hide Heading</button>
      <button onClick={()=>toggleVal(true)}>Show Heading</button>
{
  value?<h1>Custom Hooks</h1>:null
}

    </>
  )

}
export default App;
