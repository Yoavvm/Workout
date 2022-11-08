import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import type { RootState, AppDispatch } from '../../store'


const loginRequest = createAsyncThunk('loginRequest',
    async (loginPayload: LoginPayload) => {
        const response: any = await axios.post<{}>('http://localhost:3001/users', loginPayload)
        return response.data;
    }
)



export default loginRequest;

export type LoginPayload = {
    email: string,
    password: string
}