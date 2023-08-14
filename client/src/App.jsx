/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App*/


import './App.css'

import { Route, Routes, useLocation } from 'react-router-dom'

import CreateActivity from './components/CreateActivity/CreateActivity'
import Detail from './components/Detail/Detail'
import HomePage from './components/HomePage/HomePage'
import LandingPage from './components/LandingPage/LandingPage'
import Nav from './components/Nav/Nav'
import ResultsSearch from './components/SearchBar/ResultsSearch'

function App() {
  
  const location = useLocation()
  
  return (
    <div className='Container'>
        {location.pathname!=='/' && <Nav/>}
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/result' element={<ResultsSearch/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/create' element={<CreateActivity/>}/>
        </Routes>
    </div>
  )
}

export default App