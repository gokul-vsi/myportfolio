import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Components/Header'
import { Home } from './Components/Home'
import { About } from './Components/About'
import { Skill } from './Components/Skill'
import { Project } from './Components/Project'
import { Contact } from './Components/Contact'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Home/>
     <About/>
     <Skill/>
     <Project/>
     <Contact/>
    </>
  )
}

export default App
