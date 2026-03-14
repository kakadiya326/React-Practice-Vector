import React, { useState } from 'react'
import axios from "axios"

const Register = () => {
  let [data, setData] = useState({ "name": "", "phno": "", "email": "", "pwd": "" })
  let [msg, setMsg] = useState("")
  let fun = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  let reg = () => {

    axios.post("http://localhost:5000/register", data).then((res) => {
      setMsg(res.data.msg)
    })
  }
  return (
    <div>
      <div className="form">
        <h2>{msg}</h2>
        <input type="text" name="name" id="name" placeholder='Enter name' onChange={fun} value={data.name} />
        <input type="text" name="phno" id="phno" placeholder='Enter phno' onChange={fun} value={data.phno} />
        <input type="text" name="email" id="email" placeholder='Enter e-mail' onChange={fun} value={data.email} />
        <input type="password" name="pwd" id="pwd" placeholder='Enter password' onChange={fun} value={data.pwd} />
        <button onClick={reg}>Register</button>
      </div>
    </div>
  )
}

export default Register