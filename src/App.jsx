import { lazy, Suspense, useActionState, useEffect, useState } from "react";
import "./index.css";
function App() {
  const handleValidation = (prevData, formData) => {
    let regex = /[A-Z0-9]+$/i;
    let name = formData.get("name");
    let password = formData.get("password");
    if (name.length > 5) {
      return { error: "Name should only contain 5 characters",name,password };
    }
    else if (!regex.test(password)) {
      return { error: "No special characters allowed",name,password };
    }
    else {
      return { message: "Login done",name,password };
    }

  }

  const [data, action, pending] = useActionState(handleValidation, undefined);



  return (
    <>
     {
          data?.error && <span style={{ color: "red" }}>{data?.error}</span>
        }
        {
          data?.message && <span style={{ color: "green" }}>{data?.message}</span>
         }
      <form action={action}>
        <input defaultValue={data?.name} type="text" placeholder="enter name" name="name" />
        <br />
        <br />
        <input defaultValue={data?.password} type="text" placeholder="enter password" name="password" />
        <br />
        <br />
      
        <button disabled={pending}>Login</button>

      </form>

    </>
  )



}
export default App;
