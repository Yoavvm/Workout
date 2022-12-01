import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import type { RootState, AppDispatch } from '../../store'


type editedExercisePayload = {
    exerciseName: string,
    videoUrl: string,
    id: string
}

const editExercise = createAsyncThunk('editExercise',
    async (exercisePayload: editedExercisePayload) => {
        const response: any = await axios.patch<{}>('http://localhost:3001/exercises', exercisePayload)
        return response.data;
    }
)

export default editExercise;
