import {userApi} from "api/api";
import {SET_USER_DATA} from "./types";



/**
 * ActionCreator
 * @param {number} userId
 * @param {string} email
 * @param {string} login
 * @return {{type: string, data: {login, userId, email}}}
 */
export const setUserData = (userId, email, login) =>
    ({type: SET_USER_DATA, data: {userId, email, login}});


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