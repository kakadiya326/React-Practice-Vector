import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Logout from './components/Logout'
import MyContext from './components/MyContext'
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Display from './components/Display'
import { Dispmarks } from './components/Dispmarks'
import AddMarks from './components/AddMarks'
import Cookies from 'js-cookie'

const App = () => {
  let [data, setData] = useState({ "token": "", "name": "" });
  let updF = (obj) => {
    setData({ ...data, ...obj })
  }
  let obj = { "state": data, "updfunction": updF }
  useEffect(() => {
    let cookieData = Cookies.get("lgdet")
    if (cookieData != undefined) {
      updF(JSON.parse(cookieData))
    }
  }, [])
  return (
    <BrowserRouter>
      <MyContext.Provider value={obj}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/disp' element={<Display />} />
          <Route path='/search' element={<Dispmarks />} />
          <Route path='/addmarks/:hno' element={<AddMarks />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  )
}

export default App