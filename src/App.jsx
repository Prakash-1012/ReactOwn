import { useRef, useTransition } from "react";
import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
let count = 0;
function App() {

// impure component
  const Counter = () => {
    count = count + 2;
    return (
      <div>
        <h1>counter:{count}</h1>
      </div>
    )
  }


  return (
    <div>

      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter/>


    </div>
  )

}
export default App;