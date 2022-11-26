
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../redux/features/user/UserSlice';
import { handleLogout } from '../../redux/features/workout/workoutSlice';
import { useAppDispatch, useAppSelector } from '../../redux/Hooks';
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
    const navigateOnClick = ({ innerHTML }: any): void => {
        innerHTML ? navigate(innerHTML.toLowerCase().replace(/\s+/g, '')) : navigate('')
    }

    const onLogoutClick = () => {
        dispatch(logout())
        dispatch(handleLogout());
        navigateOnClick('')
    }



    return (
        <div className='navbar container'>
            {userState.user && <button onClick={(e) => navigateOnClick(e.target)}>My Account</button>}
            {navbarConfig.map(navbarItem => 
                <button onClick={() => navigate(`${navbarItem.path}`)}>{navbarItem.title}</button>
            )}

        </div>
    )
}

export default Navbar