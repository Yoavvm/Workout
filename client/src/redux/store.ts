import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./features/user/UserSlice";
import  ExercisesReducer  from "./features/exercises/ExerciseSlice";

export const store = configureStore({
    reducer: {
       User: UserReducer,
       Exercises: ExercisesReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

