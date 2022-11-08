import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import type { RootState, AppDispatch } from '../../store'



const deleteExercise = createAsyncThunk('deleteExercise',
    async (exerciseId: string) => {
        const response: any = await axios.delete<{}>(`http://localhost:3001/exercises/` + exerciseId)
        return response.data;
    }
)

export default deleteExercise;
