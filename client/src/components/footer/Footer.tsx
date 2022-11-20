import React from 'react'
import { MdOutlineSkipNext, MdOutlineSkipPrevious, MdStopCircle } from 'react-icons/md'
import { stopWorkout } from '../../redux/features/workout/workoutSlice'
import { useAppDispatch, useAppSelector } from '../../redux/Hooks'


const Footer = () => {

  const dispatch = useAppDispatch()
  const state = useAppSelector(state => state)
  const workoutState = state.Workout
  const activeExercise = state.Workout.activeExercise;

  const activeExerciseInfo = state.Exercises.exercises[activeExercise]

  return (
    <div className='container footer-container'>
      <div className='footer-info'>
        <div>
          workout name: {workoutState.workout?.name}
        </div>
        <div>
          current exercise: {}
        </div>
      </div>
      <div className='footer-actions'>
        <div className="footer-icon"><MdOutlineSkipPrevious /></div>
        <div onClick={() => dispatch(stopWorkout())} className="footer-icon"><MdStopCircle /></div>
        <div className="footer-icon"><MdOutlineSkipNext /></div>
      </div>
    </div>
  )
}

export default Footer