import {createReducer} from "@reduxjs/toolkit";
import {SET_USER_DATA} from "redux/actions/types";



const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};


const setUserData = (state, action) => {
    return {
        ...state,
        ...action.data,
        isAuth: true
    };
};



export const authReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(SET_USER_DATA, setUserData)
        .addDefaultCase(state => state)
});


/* TODO:
 * https://social-network.samuraijs.com/signUp
 * login: talatrio312
 * email: trio.bone@gmail.com
 *  pass: 123
 */