import React, { useEffect } from 'react'
import { activateWorkout, WorkOut } from '../../redux/features/workout/workoutSlice';
import { useAppDispatch, useAppSelector } from '../../redux/Hooks'
import { AiFillPlayCircle } from 'react-icons/ai'
import '../styles.css';
import { Exercise } from '../../redux/features/exercises/ExerciseSlice';


type WorkOutLineProps = {
    workOut: WorkOut
}

const MyWorkOuts = () => {



    const userState = useAppSelector(state => state.User)
    const userWorkOuts = userState.user?.myWorkouts

    useEffect(() => {

    })

    return (
        <div className='my-workouts'>
            <div className='my-workouts-title'>
                MyWorkOuts
            </div>

            <div className='my-workouts-container'>
                {userWorkOuts?.map(((workOut: WorkOut) => {
                    return (

                        <Workout workOut={workOut} key={"workout" + workOut.name} />
                    )
                }))}
            </div>



        </div>



    )
}



const Workout = ({ workOut }: WorkOutLineProps) => {

    const exerciseState = useAppSelector(state => state.Exercises)


    const dispatch = useAppDispatch()

    const buildWorkout = () => {
        const activeWorkout = workOut.exercises.map((userExercise: string) => {
            return exerciseState.exercises.find((exercise: Exercise) => {
                return exercise._id == userExercise
                
            })
        })
        return activeWorkout
    }

    const onPlayClicked = () => {
        const activatedWorkoutBuild = buildWorkout();
        console.log({activatedWorkoutBuild})
        dispatch(activateWorkout({workOut, activatedWorkoutBuild}));
    }


    return (
        <div className='my-workouts-box'>
            <div> {workOut.name} </div>
            <div onClick={onPlayClicked}><AiFillPlayCircle /></div>
        </div>
    )

}

export default MyWorkOuts