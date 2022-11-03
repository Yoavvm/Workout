import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import getAllExercises from "./getAllExercises";


export type ExercisesState = {
    status: "loading" | "idle" | "pending",
    error: string | null,
    exercises: [] | null
}

export type Exercise = {
    _id: string,
    exerciseName: string,
    videoUrl: string
}

const initialState: ExercisesState = {
    status: "idle",
    error: null,
    exercises: null
}

export const ExercisesReducer = createSlice(
    {
        name: 'Exercise',
        initialState,
        reducers: {
            
        },
        extraReducers: (builder) => {
            builder.addCase(getAllExercises.fulfilled, (state, action:PayloadAction<any>) => {
                state.exercises = action.payload
            })
            
        },


    }
);

export const { } = ExercisesReducer.actions;

export const selectExercises = (state: RootState) => state.Exercises;

export default ExercisesReducer.reducer;

