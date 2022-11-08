import React from 'react'
import { Exercise } from '../../redux/features/exercises/ExerciseSlice'
import { useAppDispatch, useAppSelector } from '../../redux/Hooks'
import Exercises from './Exercises'
import { FaTrashAlt } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import '../styles.css';
import deleteExercise from '../../redux/features/exercises/deleteExercise';






type ExerciseLineProps = {
    exercise: Exercise,
}

export const ExerciseTable = () => {
    const exercises = useAppSelector(state => state.Exercises)

    return (
        <div className='exercise-table'>
            <div className='exercise-table-header exercise-line'>
                <div className="exercise-data">
                    <div>Exercise Name</div>
                    <div>Exercise Url</div>
                </div>

                <div className='exercise-admin-actions'>actions</div>
            </div>
            {exercises.exercises?.map((exercise: Exercise, index) => {
                return <ExerciseLine key={"exercise" + index} exercise={exercise} />
            })}
        </div>
    )
}


const ExerciseLine = ({ exercise }: ExerciseLineProps) => {
    const dispatch = useAppDispatch();

    return (
        <div className='exercise-line'>
            <div className="exercise-data">
                <div>{exercise.exerciseName}</div>
                <div>{exercise.videoUrl}</div>
            </div>
            <div className='exercise-admin-actions'>
                <i><HiPencil /></i>
                <div onClick={() => dispatch(deleteExercise(exercise._id))}>
                    <i><FaTrashAlt /></i>
                </div>
            </div>
            {'' + " " + ''}
        </div>
    )
}
