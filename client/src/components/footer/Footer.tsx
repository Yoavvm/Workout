import React, { useEffect } from 'react'
import { MdOutlineSkipNext, MdOutlineSkipPrevious, MdStopCircle } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { Exercise } from '../../redux/features/exercises/ExerciseSlice'
import { nextExercise, prevExercise, stopWorkout } from '../../redux/features/workout/workoutSlice'
import { useAppDispatch, useAppSelector } from '../../redux/Hooks'


const Footer = () => {

  const dispatch = useAppDispatch()
  const state = useAppSelector(state => state)
  const workoutState = state.Workout
  const activeExercise = state.Workout.activeExercise;
  const workoutBuild: Exercise[] | null = state.Workout.workoutBuild


  useEffect(() => {

  }, [workoutBuild])

  return (
    <div className='container footer-container'>
      <div className='footer-info'>
        <div>
          workout name: {workoutState.workout?.name}
        </div>
        <a href={workoutState.workoutBuild ? workoutState.workoutBuild[activeExercise].videoUrl: 'https://www.youtube.com/'} target="_blank">
          <div>
            current exercise: {workoutState.workoutBuild && workoutState.workoutBuild[activeExercise].exerciseName}
          </div>
        </a>
      </div>
      <div className='footer-actions'>
        <div onClick={() => dispatch(prevExercise())} className="footer-icon"><MdOutlineSkipPrevious /></div>
        <div onClick={() => dispatch(stopWorkout())} className="footer-icon"><MdStopCircle /></div>
        <div onClick={() => dispatch(nextExercise())} className="footer-icon"><MdOutlineSkipNext /></div>
      </div>
    </div>
  )
}

export default Footer