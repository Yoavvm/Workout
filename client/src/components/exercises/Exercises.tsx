import React, {useEffect} from 'react'
import { ExercisesState, selectExercises } from '../../redux/features/exercises/ExerciseSlice'
import getAll from '../../redux/features/exercises/getAllExercises'
import { useAppSelector, useAppDispatch } from '../../redux/Hooks'

const Exercises = () => {

    const exerciseState:null | ExercisesState = useAppSelector(state => state.Exercises)
    const dispatch = useAppDispatch()
    useEffect(()=> {
        dispatch(getAll())
    }, [])

  return (
    <div>
        <div>Exercises</div>
        {exerciseState.exercises && exerciseState.exercises.map((exercise:any ) => {
            return exercise.name
        })}
    </div>
  )
}

export default Exercises