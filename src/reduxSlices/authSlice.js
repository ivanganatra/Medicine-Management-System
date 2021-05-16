import { createSlice } from '@reduxjs/toolkit';
import db from '../firebase';
import axios from 'axios';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        userId: null,
        category: null,
        error: null
    },
    reducers: {
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

export const { LOGIN, LOGOUT } = authSlice.actions;

export const AUTOLOGIN = () => dispatch => {
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
        })
    }
}

export const ASYNC_LOGIN = userData => dispatch => {
    const authData = {
        email: userData.email,
        password: userData.password,
        returnSecureToken: true
    }
    let URL = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCqpuOG7xV3ZINsIPpxg_NxcTbve5UbNJc";
    if (userData.isSignIn) {
        URL = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCqpuOG7xV3ZINsIPpxg_NxcTbve5UbNJc";
    }

    axios.post(URL, authData)
        .then(response => {
            const token = response.data.idToken;
            const userId = response.data.localId;
            localStorage.setItem('Frosthack__token', token);
            localStorage.setItem('Frosthack__userId', userId);
            dispatch(AUTOLOGIN());
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
        })
}

export const selectUserData = state => state.auth;

export default authSlice.reducer;