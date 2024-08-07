import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        status: false,
        userData: null
    },
    reducers: {
        login: (state, actions) => {
            state.status = true;
            state.userData = actions.payload.userData
        },

        logout: (state) => {
            state.status = false;
            state.userData = null
        }
    }
})  

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;