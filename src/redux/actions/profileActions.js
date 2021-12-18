import {userApi} from "api/api";
import {SET_USER_PROFILE} from "./types";



export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});


/**
 * ThunkCreator
 * @param {number} profileId
 * @return {(function(dispatch, getState): void)} thunk, which get and set profile info from server
 */
export const loadUserProfile = (profileId) => {
    return (dispatch, getState) => {
        userApi.getUserProfile(profileId)
            .then(data => dispatch(setUserProfile(data)))
            .catch(console.log);
    };
};