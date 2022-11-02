import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
            login: (state, action: PayloadAction<User>) => {
                console.log('login action')
                state.user = action.payload;
            },
            logout: (state) => {
                state.user = null;
            }
        },
        extraReducers: (builder) => {
            builder.addCase(loginRequest.fulfilled, (state, action:PayloadAction<User>) => {
                console.log(action.payload)
                state.user = action.payload
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

