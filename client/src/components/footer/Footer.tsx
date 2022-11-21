import React, { useEffect } from 'react'
import { MdOutlineSkipNext, MdOutlineSkipPrevious, MdStopCircle } from 'react-icons/md'
import { Exercise } from '../../redux/features/exercises/ExerciseSlice'
import { stopWorkout } from '../../redux/features/workout/workoutSlice'
import { useAppDispatch, useAppSelector } from '../../redux/Hooks'


const Footer = () => {

  const dispatch = useAppDispatch()
  const state = useAppSelector(state => state)
  const workoutState = state.Workout
  const activeExercise = state.Workout.activeExercise;
  const workoutBuild:Exercise[] | null = state.Workout.workoutBuild

  if (workoutBuild) console.log(workoutBuild[0])

  useEffect(() => {

  }, [workoutBuild])

  return (
    <div className='container footer-container'>
      <div className='footer-info'>
        <div>
          workout name: {workoutState.workout?.name}
        </div>
        <div>
          current exercise: {workoutState.workoutBuild && workoutState.workoutBuild[0].exerciseName}
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