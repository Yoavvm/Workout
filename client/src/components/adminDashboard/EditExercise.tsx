import React from 'react'
import { Exercise } from '../../redux/features/exercises/ExerciseSlice'
import { useAppSelector } from '../../redux/Hooks'
import '../styles.css';


const EditExercise = () => {

    const exercises = useAppSelector(state => state.Exercises)
    
  return (
    <div>
        {exercises.exercises?.map((exercise: Exercise) => {
            return null
        })}
    </div>
  )
}

export default EditExercise