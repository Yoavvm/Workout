import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import loginRequest from '../../redux/features/user/loginRequest';
import { useAppDispatch, useAppSelector } from '../../redux/Hooks';

const Login = () => {

    const dispatch = useAppDispatch()
    const userState = useAppSelector(state => state.User);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginClick = () => dispatch(loginRequest({ email, password }))


    return (
        <div>
            <div>Login</div>

            <div className="input-field">
                email adress:
                <input type="text" onChange={(e) => { setEmail(e.target.value) }} />
            </div>
            <div className="input-field">
                password:
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} />
            </div>
            <div>
                <button onClick={() => handleLoginClick()}>Login</button>
            </div>

        </div>
    )
}

export default Login