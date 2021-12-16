import {userApi} from "api/api";



const SET_USER_DATA = "SET_USER_DATA";


const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};



export const authReducer = (state = initialState, action) => {
     switch (action.type) {
         case SET_USER_DATA:
             return {
                 ...state,
                 ...action.data,
                 isAuth: true
             };
         default:
             return state;
     }
};


/**
 * ActionCreator
 * @param {number} userId
 * @param {string} email
 * @param {string} login
 * @return {{type: string, data: {login, userId, email}}}
 */
export const setUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}});


/**
 * ThunkCreator
 * @return {(function(dispatch, getState): void)} thunk, which send request to get current auth info
 */
export const authMe = () => {
    return (dispatch, getState) => {
        userApi.authMe()
            .then(data => {
                if (data.resultCode === 0) {
                    const {id, email, login} = data.data;
                    dispatch(setUserData(id, email, login));
                }
                else
                    console.log(data.messages.join("\n"));
            })
            .catch(console.log);
    };
};



/*
 * https://social-network.samuraijs.com/signUp
 * login: talatrio312
 * email: trio.bone@gmail.com
 *  pass: 123
 */