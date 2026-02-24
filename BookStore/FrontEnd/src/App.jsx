import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Display from './components/Display'
import Add from './components/Add'
import Search from './components/Search'
import NavBar from './components/NavBar'
import './App.css'
const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Display />} />
        <Route path='/add' element={<Add />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App