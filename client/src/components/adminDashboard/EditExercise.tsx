import React, { useState } from 'react'
import editExercise from '../../redux/features/exercises/editExercise'
import { Exercise } from '../../redux/features/exercises/ExerciseSlice'
import { useAppDispatch } from '../../redux/Hooks'

type Props = {
    exerecise: Exercise
}

export const EditExercise = ({exerecise}: Props) => {

    const dispatch = useAppDispatch()
    const [exerciseName, setExerciseName] = useState(exerecise.exerciseName)
    const [videoUrl, setVideoUrl] = useState(exerecise.videoUrl)
  
    const handleSubmit = () => {
      dispatch(editExercise({ exerciseName, videoUrl, id: exerecise._id }))
    }

    return (
    <div className='create-container'>
      <h1>edit exercise</h1>
      <div className='create-container-line'>
        exercise name: <input onChange={(e) => { setExerciseName(e.target.value) }} type="text" value={exerciseName} />
      </div>
      <div className='create-container-line'>
        exercise Url: <input onChange={(e) => { setVideoUrl(e.target.value) }} type="text" value={videoUrl} />
      </div>
      <div className='create-container-line'>

      <div className='btn-container'>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      </div>
    </div>
    )
}
