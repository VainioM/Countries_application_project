import {Link} from 'react-router-dom';
import '../css/Navbar.css'

function Navbar(){
    return <nav className="navbar">
        <div className="navbar-brand">
            <Link to="/" className='header'>Country App</Link>
        </div>
        <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/visited" className="nav-link">Visited</Link>
            <Link to="/worldmap" className="nav-link">World map</Link>
            <Link to="/login" className="nav-link-login">Login</Link>
        </div>
    </nav>
}

export default Navbar