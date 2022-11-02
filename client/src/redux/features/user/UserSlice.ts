import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import loginRequest from './loginRequest';
import register from './register';

export type UserState = {
    status: "loading" | "idle" | "pending",
    error: string | null,
    user: {} | null
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
            login: (state, action: PayloadAction<{}>) => {
                console.log('login action')
                state.user = action.payload;
            },
            logout: (state) => {
                state.user = null;
            }
        },
        extraReducers: (builder) => {
            builder.addCase(loginRequest.fulfilled, (state, action:PayloadAction<any>) => {
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

