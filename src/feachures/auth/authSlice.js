import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {helpFetch} from '../../helpers/helpFetch'

export const getAuth = createAsyncThunk('auth/getAuth', async()=>{
    const API = helpFetch();
    const session = await API.get('api');
    return session.isLoggedIn;
});

const initialState = {
    auth: false
} 

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    },
    extraReducers(builder){
        builder.addCase(getAuth.fulfilled, (state, action)=>{
            state.auth = action.payload;
        })
    }
});
export default authSlice.reducer;