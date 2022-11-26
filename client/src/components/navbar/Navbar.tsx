
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Portal } from '../../Portal';
import { logout } from '../../redux/features/user/UserSlice';
import { handleLogout } from '../../redux/features/workout/workoutSlice';
import { useAppDispatch, useAppSelector } from '../../redux/Hooks';
import AdminDashboard from '../adminDashboard/AdminDashboard';

import '../styles.css';


type navbarConfigItem = {
    title: string,
    path: string,

}

const navbarConfig: navbarConfigItem[] = [
    { title: 'Login', path: 'login' },
    { title: 'Logout', path: '' },
    { title: 'Register', path: 'register' },
    { title: 'Admin', path: 'admin' },
    { title: 'My Account', path: 'myaccount' },
]

const Navbar = () => {

    const navigate = useNavigate();
    const userState = useAppSelector(state => state.User)
    const dispatch = useAppDispatch();
    const [isPortalOpen, setIsPortalOpen] = useState(false);


    const onLogoutClick = () => {
        dispatch(logout())
        dispatch(handleLogout());
    }



    return (
        <div className='navbar container'>
            {navbarConfig.map(navbarItem => 
                <button key={navbarItem.title} onClick={() => navigate(`${navbarItem.path}`)}>{navbarItem.title}</button>
            )}
            <button onClick={() => setIsPortalOpen(true)}>Open Modal</button>
            <Portal open={isPortalOpen} children={<AdminDashboard/>} onClose={() => setIsPortalOpen(false)}></Portal>
        </div>
    )
}

export default Navbar