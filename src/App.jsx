import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let [color,setColor] = useState('#ffffff')

  let changeTheme = (newColor)=>{
    setColor(newColor)
    document.body.style.backgroundColor = newColor
    
  }


  return (
    <>
    <h1>Theme</h1>
     <button onClick={()=>changeTheme("#000000")}>White</button>
     <button onClick={()=>changeTheme("#ffffff")}>Black</button>

    </>
  )
}

export default App
