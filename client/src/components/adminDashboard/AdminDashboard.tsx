import React, { useState } from 'react'
import { ExerciseTable } from '../exercises/ExerciseTable'
import CreateExercise from './CreateExercise'
import '../styles.css';
import { Portal } from '../../Portal';
import { Exercise } from '../../redux/features/exercises/ExerciseSlice';


const AdminDashboard = () => {

  const [isPortalOpen, setIsPortalOpen] = useState(false);


  return (
    <div className='container dashboard'>
      <ExerciseTable />
      <button onClick={() => setIsPortalOpen(true)}>Create Exercise</button>
        <Portal open={isPortalOpen} children={<CreateExercise/>} onClose={() => setIsPortalOpen(false)}></Portal>
    </div>
  )
}

export default AdminDashboard