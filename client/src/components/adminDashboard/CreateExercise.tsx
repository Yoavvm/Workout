import React, { useState } from 'react'
import createExercise from '../../redux/features/exercises/createExercise'
import { useAppDispatch } from '../../redux/Hooks'
import '../styles.css';

type Props = {
  exerciseName?:string,
  videoUrl?: string,
} | null

const CreateExercise = (props:Props) => {

  const dispatch = useAppDispatch()
  const [exerciseName, setExerciseName] = useState('')
  const [videoUrl, setVideoUrl] = useState('')

  const handleSubmit = () => {
    dispatch(createExercise({ exerciseName, videoUrl }))
  }


  return (
    <div className='create-container'>
      <h1>create exercise</h1>
      <div className='create-container-line'>
        exercise name: <input onChange={(e) => { setExerciseName(e.target.value) }} type="text" />
      </div>
      <div className='create-container-line'>
        exercise Url: <input onChange={(e) => { setVideoUrl(e.target.value) }} type="text" />
      </div>
      <div className='create-container-line'>

      <div className='btn-container'>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      </div>
    </div>
  )
}

export default CreateExercise