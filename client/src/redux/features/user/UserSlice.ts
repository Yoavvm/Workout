import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import { WorkOut } from "../workout/workoutSlice";
import loginRequest from './loginRequest';
import register from './register';

export type UserState = {
    status: "loading" | "idle" | "pending",
    error: string | null,
    userData: UserData | null
}

export type UserData = {
    token:string,
    user: User
}

export type User = {
    _id:string,
    email: string,
    token: string,
    myWorkouts: WorkOut[]
}



type LoginPayload = {
    token: string,
    userData: UserData
}

const initialState: UserState = {
    status: "idle",
    error: null,
    userData: null
}

export const UserReducer = createSlice(

    {
        name: 'User',
        initialState,
        reducers: {
            
            logout: (state) => {
                axios.defaults.headers.common['Authorization'] = undefined;
                state.userData = null;
            }
        },
        extraReducers: (builder) => {
            builder.addCase(loginRequest.fulfilled, (state, action:PayloadAction<UserData>) => {
                console.log(action.payload)
                
                axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`
                state.userData = action.payload

            })
            builder.addCase(register.fulfilled, (state, action) => {
                state.userData = action.payload

            })
        },


    }
);

export const { logout } = UserReducer.actions;

export const selectUser = (state: RootState) => state.User;

export default UserReducer.reducer;

