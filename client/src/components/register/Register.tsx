import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import register from '../../redux/features/user/register';
import { useAppDispatch } from '../../redux/Hooks';
import '../styles.css';


const Register = () => {

    const dispatch = useAppDispatch()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegisterClick = () => {
    
        //need to add validation function for user input
        dispatch(register({ email, password }))
    }

    return (
        <div>
            <div>Register</div>

            <div className="input-field">
                email adress:
                <input type="text" onChange={(e) => {setEmail(e.target.value)}} />
            </div>
            <div className="input-field">
                password:
                <input type="password" onChange={(e) => {setPassword(e.target.value)}} />
            </div>
            <div>
                <button onClick={() => handleRegisterClick()}>Register</button>
            </div>

        </div>
    )
}

export default Register