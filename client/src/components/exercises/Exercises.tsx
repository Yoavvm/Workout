import React, { useEffect } from 'react'
import { Exercise, ExercisesState } from '../../redux/features/exercises/ExerciseSlice'
import getAll from '../../redux/features/exercises/getAllExercises'
import { useAppSelector, useAppDispatch } from '../../redux/Hooks'
import '../styles.css';


const Exercises = () => {

  const exerciseState: null | ExercisesState = useAppSelector(state => state.Exercises)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getAll())
  }, [])

  return (
    <div>

      <div>
        <div>Exercises</div>
        {exerciseState.exercises && exerciseState.exercises.map((exercise: Exercise, index) => {
          return (<ExerciseInfo exercise={exercise} key={'exercise'+ index}/>)
        })}

      </div>

    </div>
  )
}

const ExerciseInfo = ({exercise}:{exercise:Exercise}) => {

  return (
    <div>
      <div>
        {exercise.exerciseName}
      </div>
      <div>
        {exercise.videoUrl}
      </div>
    </div>
  )
}

export default Exercises
