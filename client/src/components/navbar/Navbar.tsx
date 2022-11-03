
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../redux/features/user/UserSlice';
import { useAppDispatch, useAppSelector } from '../../redux/Hooks';
import '../styles.css';

const Navbar = () => {

    const navigate = useNavigate();
    const userState = useAppSelector(state => state.User)
    const dispatch = useAppDispatch();
    const navigateOnClick = ({ innerHTML }: any): void => {
        innerHTML ? navigate(innerHTML.toLowerCase()) : navigate('')
    }

    const onLogoutClick = () => {
        dispatch(logout())
        navigateOnClick('')
    }



    return (
        <div className='navbar'>
            {!userState.user && <button onClick={(e) => navigateOnClick(e.target)}>Login</button>}
            {!userState.user && <button onClick={(e) => navigateOnClick(e.target)}>Register</button>}
            {userState.user && <button onClick={onLogoutClick}>Logout</button>}
            <button onClick={(e) => navigateOnClick(e.target)}>Exercises</button>

        </div>
    )
}

export default Navbar