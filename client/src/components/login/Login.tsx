import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import loginRequest from '../../redux/features/user/loginRequest';
import { useAppDispatch, useAppSelector } from '../../redux/Hooks';
import '../styles.css';


const Login = () => {

    const dispatch = useAppDispatch()
    const userState = useAppSelector(state => state.User);
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginClick = () => {
        dispatch(loginRequest({ email, password }))
        navigate('myaccount')
    }


    return (
        <div className='login-container container'>
            <div className='login-container-header'>Login</div>

            <div className="label">
                email adress:
            </div>
            <div className='input-field'>
                <input type="text" onChange={(e) => { setEmail(e.target.value) }} />
            </div>
            <div className="label">
                password:
            </div>
            <div className='input-field'>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} />
            </div>
            <div>
                <button className='login-btn' onClick={handleLoginClick}>Log In</button>
            </div>

        </div>
    )
}

export default Login