import { useContext, useEffect } from "react"
import MyContext from "./MyContext"
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const Logout = () => {
  let obj = useContext(MyContext);
  let navigate = useNavigate()
  useEffect(() => {
    obj.updfunction({ "token": "", "name": "", "role": "" })
    Cookies.remove("lgdet");
    navigate("/")
  }, [])
  return (
    <div>Logout</div>
  )
}

export default Logout