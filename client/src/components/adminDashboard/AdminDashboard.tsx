import React from 'react'
import { ExerciseTable } from '../exercises/ExerciseTable'
import CreateExercise from './CreateExercise'
import EditExercise from './EditExercise'
import '../styles.css';


const AdminDashboard = () => {
  return (
    <div className='dashboard container'>
      <CreateExercise />
      <ExerciseTable />
      {/* <EditExercise /> */}

    </div>
  )
}

export default AdminDashboard