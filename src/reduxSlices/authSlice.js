import { createSlice } from '@reduxjs/toolkit';
import db from '../firebase';
import axios from 'axios';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        userId: null,
        category: null,
        error: null,
        loading: true,
        logging: false
    },
    reducers: {
        SET_LOGGING: (state, action) => {
            state.logging = action.payload;
        },

        SET_LOADING: (state, action) => {
            state.loading = action.payload;
        },

        SET_ERROR_NULL: (state, action) => {
            state.error = null;
        },

        SET_ERROR: (state, action) => {
            state.error = action.payload;
        },

        LOGIN: (state, action) => {
            state.token = action.payload.token;
            state.userId = action.payload.userId;
            state.category = action.payload.category;
        },

        LOGOUT: (state) => {
            state.token = null;
            state.userId = null;
            localStorage.removeItem("Frosthack__token");
            localStorage.removeItem("Frosthack__userId");
            localStorage.removeItem("Frosthack__category");
        }
    }
})

export const { LOGIN, LOGOUT, SET_ERROR, SET_ERROR_NULL, SET_LOADING, SET_LOGGING } = authSlice.actions;

export const AUTOLOGIN = () => dispatch => {
    console.log("Hello");
    dispatch(SET_LOADING(true));
    const token = localStorage.getItem('Frosthack__token');
    if(token) {
        const userId = localStorage.getItem('Frosthack__userId');
        db.collection("users").doc(userId).get().then(data => {
            console.log(data.data());
            dispatch(LOGIN({
                token: token,
                userId: userId,
                category: data.data() ? data.data().category : null
            }))
            dispatch(SET_LOADING(false));
        })
    } else
        dispatch(SET_LOADING(false));
}

export const ASYNC_LOGIN = userData => dispatch => {
    
    if(userData.logging)
        dispatch(SET_LOGGING(true));
        
    dispatch(SET_LOADING(true));

    const authData = {
        email: userData.email,
        password: userData.password,
        returnSecureToken: true
    }
    let URL = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCqpuOG7xV3ZINsIPpxg_NxcTbve5UbNJc";
    if (userData.isSignIn) {
        URL = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCqpuOG7xV3ZINsIPpxg_NxcTbve5UbNJc";
    }
    console.log(authData);
    axios.post(URL, authData)
        .then(response => {
            console.log(response);
            const token = response.data.idToken;
            const userId = response.data.localId;
            localStorage.setItem('Frosthack__token', token);
            localStorage.setItem('Frosthack__userId', userId);
            dispatch(AUTOLOGIN());
            dispatch(SET_LOADING(false));
            dispatch(SET_LOGGING(false));
            if (!userData.isSignIn) {
                db.collection("users").doc(userId).set({
                    userId: userId,
                    contact: userData.contact,
                    email: userData.email,
                    category: userData.category
                })
            }
        })
        .catch(err => {
            console.log(err);
            console.log(err.message);
            console.log(err.response.data.error.message);
            dispatch(SET_ERROR(err.response.data.error.message));
            dispatch(SET_LOADING(false));
            dispatch(SET_LOGGING(false));
        })
}

export const selectUserData = state => state.auth;

export default authSlice.reducer;