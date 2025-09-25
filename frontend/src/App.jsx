import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Tofos'

function App() {
  const [count, setCount] = useState(0)

  return (
  
      <div>
        <CreateTodo></CreateTodo>
        <Todos></Todos>
      </div>
     
  )
}

export default App
