import React from 'react'
import Exercises from '../exercises/Exercises'
import MyWorksOuts from '../MyWorkOuts/MyWorkOuts'
import '../styles.css';


const MyAccount = () => {
    return (
        <div className='my-account'>
            <MyWorksOuts />
            <Exercises />
        </div>
    )
}

export default MyAccount