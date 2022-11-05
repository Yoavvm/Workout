import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import type { RootState, AppDispatch } from '../../store'


type newExercisePayload = {
    exerciseName: string,
    videoUrl: string
}

const createExercise = createAsyncThunk('createExercise',
    async (exercisePayload: newExercisePayload) => {
        const response: any = await axios.put<{}>('http://localhost:3001/exercises', exercisePayload)
        return response.data;
    }
)

export default createExercise;
