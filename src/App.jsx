import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card/Card'
import Gmail from './component/Gmail'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Card/>
        <Gmail />
      </div>
      
      
    </>
  )
}

export default App
