import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MyContext from './MyContext'
import axios from 'axios'
import Cookies from 'js-cookie'

const Login = () => {
  let [data, setData] = useState({ "uid": "", "pwd": "" })
  let [msg, setMsg] = useState("")
  let navigate = useNavigate()
  let obj = useContext(MyContext)
  let fun = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  let login = () => {
    axios.post("http://localhost:5000/login", data).then((res) => {
      if (res.data.token == undefined) {
        setMsg(res.data.msg)
      } else {
        obj.updfunction(res.data)
        Cookies.set("lgdet", JSON.stringify(res.data), { "expires": 3 })

        res.data.role == "admin" ? navigate("/disp") : navigate("/search")
      }
    })
  }

  useEffect(() => {
    if (obj.state.role == "admin") {
      navigate("/disp")
    }
    if (obj.state.role == "user") {
      navigate("/search")
    }
    
  }, [])
  return (
    <div>
      <h2>{msg}</h2>
      <input type="text" placeholder='Enter e-mail/phno/hno' onChange={fun} name='uid' value={data.uid} />
      <input type="password" name="pwd" id="pwd" placeholder='Enter password' onChange={fun} />
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login