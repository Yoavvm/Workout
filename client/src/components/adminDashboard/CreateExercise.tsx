import React, { useState } from 'react'
import createExercise from '../../redux/features/exercises/createExercise'
import { useAppDispatch } from '../../redux/Hooks'

const CreateExercise = () => {

  const dispatch = useAppDispatch()
  const [exerciseName, setExerciseName] = useState('')
  const [videoUrl, setVideoUrl] = useState('')


  return (
    <div>
        <div>
            exercise name: <input onChange={(e) => {setExerciseName(e.target.value)}} type="text" />
        </div>
        <div>
            exercise Url: <input onChange={(e) => {setVideoUrl(e.target.value)}} type="text" />

        </div>
        <button onClick={() => dispatch(createExercise({exerciseName, videoUrl}))}>Submit</button>
    </div>
  )
}

export default CreateExercise