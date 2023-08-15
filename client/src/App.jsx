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
