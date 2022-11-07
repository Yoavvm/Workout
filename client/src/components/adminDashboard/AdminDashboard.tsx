import React from 'react'
import { ExerciseTable } from '../exercises/ExerciseTable'
import CreateExercise from './CreateExercise'
import EditExercise from './EditExercise'
import '../styles.css';


const AdminDashboard = () => {
  return (
    <div className='container dashboard'>
      <CreateExercise />
      <ExerciseTable />
      {/* <EditExercise /> */}

    </div>
  )
}

export default AdminDashboard