import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';



const getAllExercises = createAsyncThunk('getAllExercises',
    async () => {
        const response: any = await axios.get<{}>('http://localhost:3001/exercises')
        return response.data;
    }
)

export default getAllExercises;
