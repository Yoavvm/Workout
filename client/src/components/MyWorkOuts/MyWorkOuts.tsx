import React from 'react'
import { WorkOut } from '../../redux/features/user/UserSlice';
import { useAppSelector } from '../../redux/Hooks'
import '../styles.css';


type WorkOutLineProps = {
    workOut: WorkOut
}

const MyWorkOuts = () => {



    const userState = useAppSelector(state => state.User)
    const userWorkOuts = userState.user?.myWorkouts

    return (
        <div className='my-workouts'>
            <div className='my-workouts-title'>
                MyWorkOuts
            </div>

            <div className='my-workouts-container'>
                {userWorkOuts?.map(((workOut: WorkOut) => {
                    return (
                        
                        <Workout workOut={workOut} key={"workout" + workOut.name}  />
                    )
                }))}
            </div>



        </div>



    )
}



const Workout = ({workOut}: WorkOutLineProps) => {

    console.log(workOut)
    return (
        <div className='my-workouts-box'> {workOut.name} </div>
        )

}

export default MyWorkOuts