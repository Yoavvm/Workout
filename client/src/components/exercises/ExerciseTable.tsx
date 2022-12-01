import React, { useState } from 'react'
import { Exercise } from '../../redux/features/exercises/ExerciseSlice'
import { useAppDispatch, useAppSelector } from '../../redux/Hooks'
import Exercises from './Exercises'
import { FaTrashAlt } from "react-icons/fa";
import { HiPencil } from "react-icons/hi";
import '../styles.css';
import { Portal } from '../../Portal';
import deleteExercise from '../../redux/features/exercises/deleteExercise';
import CreateExercise from '../adminDashboard/CreateExercise';
import { EditExercise } from '../adminDashboard/EditExercise';


type ExerciseLineProps = {
    exercise: Exercise,
}

export const ExerciseTable = () => {
    const exercises = useAppSelector(state => state.Exercises)
    const [isPortalOpen, setIsPortalOpen] = useState(false);

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
            <Portal open={isPortalOpen} children={<CreateExercise />} onClose={() => setIsPortalOpen(false)}></Portal>

        </div>
    )
}


const ExerciseLine = ({ exercise }: ExerciseLineProps) => {
    const dispatch = useAppDispatch();

    const [isPortalOpen, setIsPortalOpen] = useState(false);


    return (
        <div className='exercise-line'>
            <div className="exercise-data">
                <div>{exercise.exerciseName}</div>
                <div>{exercise.videoUrl}</div>
            </div>
            <div className='exercise-admin-actions'>
                <div onClick={() => setIsPortalOpen(true)}>
                    <i><HiPencil /></i>
                </div>

                <div onClick={() => dispatch(deleteExercise(exercise._id))}>
                    <i><FaTrashAlt /></i>
                </div>
            </div>
            <Portal open={isPortalOpen} children={<EditExercise exerecise={exercise} />} onClose={() => setIsPortalOpen(false)}></Portal>
        </div>
    )
}
