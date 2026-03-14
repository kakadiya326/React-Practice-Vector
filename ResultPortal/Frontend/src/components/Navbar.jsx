import { useContext } from 'react'
import { Link } from 'react-router-dom'
import MyContext from './MyContext'
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import './Navbar.css'

const Navbar = () => {
  let obj = useContext(MyContext);

  return (
    <nav>

      {obj.state.token == "" ? <>
        <Link to={'/'}>Login</Link>
        <Link to={'/register'}>Register</Link></> :
        <>
          <Link to={'/home'}>Home</Link>
          <Link to={'/disp'}>Display</Link>
          <Link to={"/addmarks/''"}>Addmarks</Link>
          <Link to={'/logout'}>Logout</Link>
          <Avatar sx={{ bgcolor: deepOrange[500] }}>{obj.state.name[0].toUpperCase()}</Avatar>
        </>
      }


    </nav>
  )
}

export default Navbar