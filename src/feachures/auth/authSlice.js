import { createSlice } from "@reduxjs/toolkit";
import {helpFetch} from '../../helpers/helpFetch'
export const authSlice = createSlice({
    name: 'auth',
    initialState: false,
    reducers: {
        modifySession: async(state, action)=>{
            const session = await helpFetch.get('api');
            console.log(session)
        }
    }
});
export const {modifySession} = authSlice.actions;
export default authSlice.reducer;