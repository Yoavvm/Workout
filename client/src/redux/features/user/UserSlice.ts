import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { type } from "os";
import { RootState } from "../../store";
import loginRequest from './loginRequest';
import register from './register';

export type UserState = {
    status: "loading" | "idle" | "pending",
    error: string | null,
    user: User | null
}

export type User = {
    _id:string,
    email: string,
    token: string,
    myWorkouts: []
}

type LoginPayload = {
    token: string,
    userData: User
}

const initialState: UserState = {
    status: "idle",
    error: null,
    user: null
}

export const UserReducer = createSlice(
    {
        name: 'User',
        initialState,
        reducers: {
            login: (state, action: PayloadAction<LoginPayload>) => {
                console.log(action.payload.token)
                
                axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`
                state.user = action.payload.userData;

            },
            logout: (state) => {
                state.user = null;
            }
        },
        extraReducers: (builder) => {
            builder.addCase(loginRequest.fulfilled, (state, action:PayloadAction<LoginPayload>) => {
                console.log(action.payload)
                axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`
                state.user = action.payload.userData

            })
            builder.addCase(register.fulfilled, (state, action) => {
                state.user = action.payload

            })
        },


    }
);

export const { login, logout } = UserReducer.actions;

export const selectUser = (state: RootState) => state.User;

export default UserReducer.reducer;

