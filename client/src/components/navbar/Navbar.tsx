
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../styles.css';

const Navbar = () => {

    const navigate = useNavigate();
    const navigateOnClick = ({innerHTML}:any):void => {
        navigate(innerHTML.toLowerCase())
    }



    return (
        <div className='navbar'>
            <button onClick={(e) => navigateOnClick(e.target)}>Login</button>
            <button onClick={(e) => navigateOnClick(e.target)}>Register</button>
            <button onClick={(e) => navigateOnClick(e.target)}>Exercises</button>
       
        </div>
    )
}

export default Navbar