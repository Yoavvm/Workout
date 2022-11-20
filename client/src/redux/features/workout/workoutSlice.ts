import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store";
import { Exercise } from "../exercises/ExerciseSlice";


export type WorkOutState = {
    status: "loading" | "idle" | "pending",
    error: string | null,
    workout: WorkOut | null,
    activeExercise: number
}

export type WorkOut = {
    name: string,
    exercises: []

}

const initialState: WorkOutState = {
    status: "idle",
    error: null,
    workout: null,
    activeExercise: 0
}

export const WorkoutReducer = createSlice(

    {
        name: 'Workout',
        initialState,
        reducers: {

            activateWorkout: (state, action) => {
                state.workout = action.payload;
                state.activeExercise = 0;
            },
            stopWorkout: (state) => {
                state.activeExercise = 0;
                state.workout = null;
            },
            buildWorkout: (state) => {
                const workOut = state.workout?.exercises.forEach((exercise: string) => {
                    
                })
            },
            nextExercise: (state) => {

            }
        }
    }
);

export const { activateWorkout, stopWorkout } = WorkoutReducer.actions;

export const selectWorkout = (state: RootState) => state.Workout;

export default WorkoutReducer.reducer;

