import {  BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import Add from './Components/Add'
import Search from './Components/Search'
const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Add />} />
        <Route path='/search' element={<Search/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App  