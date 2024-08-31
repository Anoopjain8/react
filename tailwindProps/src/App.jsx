import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let newObj = {
    name: 'anoop',
    age: 33
  }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-3xl mb-3'>Tailwind Test</h1>
      <Card username="Emily" image = "images/Emily.webp" btntext = "View Profile" myObj={newObj}/>
      <Card username="Gabriel" image = "images/Gabriel.webp" btntext = "Visit Me"/>
    </>
  )
}

export default App
