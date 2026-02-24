import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/add">Add Books</Link>
            <Link to="/search">Search</Link>
        </nav>
    )
}

export default NavBar