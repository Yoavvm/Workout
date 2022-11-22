import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store";
import { Exercise } from "../exercises/ExerciseSlice";


export type WorkOutState = {
    status: "loading" | "idle" | "pending",
    error: string | null,
    workout: WorkOut | null,
    workoutBuild: Exercise[] | null,
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
    workoutBuild: null,
    activeExercise: 0
}

export const WorkoutReducer = createSlice(

    {
        name: 'Workout',
        initialState,
        reducers: {

            activateWorkout: (state, action) => {
                state.workout = action.payload.workOut;
                state.workoutBuild = action.payload.activatedWorkoutBuild;
                state.activeExercise = 0;
            },
            stopWorkout: (state) => {
                state.activeExercise = 0;
                state.workout = null;
                state.workoutBuild = null;
            },
            buildWorkout: (state) => {
                const workOut = state.workout?.exercises.forEach((exercise: string) => {

                })
            },
            nextExercise: (state) => {
                if (state.workoutBuild && state.activeExercise < state.workoutBuild?.length - 1) {
                    state.activeExercise++

                }
            },
            prevExercise: (state) => {
                if (state.workoutBuild && state.activeExercise > 0) {
                    state.activeExercise--

                }
            }
        }
    }
);

export const { activateWorkout, stopWorkout, nextExercise, prevExercise } = WorkoutReducer.actions;

export const selectWorkout = (state: RootState) => state.Workout;

export default WorkoutReducer.reducer;

