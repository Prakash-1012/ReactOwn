import { useRef, useTransition } from "react";
import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";

function App() {
 const [data, setData] = useState({
    name: 'Prakash',
    address: {
      city: 'Delhi',
      country: 'India'
    }
  })

  const handleName = (val) => {
    setData({ ...data,name:val })

  }
  const handleCity = (city) => {
    setData({ ...data, address: { ...data.address, city } })


  }
  return (
    <div>
      <h1>Updating Objects in State</h1>

      <input type="text" placeholder="update name"
        onChange={(event) => handleName(event.target.value)} />
      <input type="text" placeholder="update city"
        onChange={(event) => handleCity(event.target.value)} />
      <h2>Name :{data.name}</h2>
      <h2>City :{data.address.city}</h2>
      <h2>Country :{data.address.country}</h2>
    </div>
  )

}
export default App;