
import React from 'react'
import { Link } from 'react-router-dom';
import '../styles.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <button><Link to="/">Login</Link></button>
            <button><Link to="/register">Register</Link></button>
            <button><Link to="/exercises">Exercises</Link></button>
        </div>
    )
}

export default Navbar