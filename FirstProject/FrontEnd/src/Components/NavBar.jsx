import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <Link to={"/"} >Home</Link>
            <Link to={"/add"} >Add</Link>
            <Link to={"/search"} >Search</Link>
        </nav>
    )
}

export default NavBar