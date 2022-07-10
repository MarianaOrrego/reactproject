import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', //not-authenticated, authenticated
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        login: ( state,  action  ) => {
            
        },
        logout: ( state, payload ) =>{

        },
        checkinCredential: ( state ) => {

        }
    }
});
// Action creators are generated for each case reducer function
export const { login, logout, checkinCredential } = authSlice.actions;