import {userApi} from "api/api";
import {
    FOLLOW,
    UNFOLLOW,
    SET_IN_FOLLOWING_PROGRESS,
} from "./types";



export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setIsFollowingProgress = (inProgress, userId) => ({type: SET_IN_FOLLOWING_PROGRESS, inProgress, userId});


/**
 * ThunkCreator
 * @param {number} userId
 * @return {(function(dispatch, getState): void)} thunk, which send request on server to follow to user
 */
export const followUser = (userId) => {
    return (dispatch, getState) => {
        const state = getState();
        if (state.auth.isAuth && !state.usersPage.inFollowingProgress.includes(userId)) {
            dispatch(setIsFollowingProgress(true, userId));
            userApi.follow(userId)
                .then(data => {
                    if (data.resultCode === 0)
                        dispatch(follow(userId));
                    else
                        console.log(data.messages.join("\n"));
                })
                .catch(console.log)
                .finally(() => dispatch(setIsFollowingProgress(false, userId)));
        }
    };
};


/**
 * ThunkCreator
 * Отличается от {@link followUser} только диспатчем экшена, в будущем может быть разница, например
 * при подписке уведмолять юзера, а при отписке нет
 * @param {number} userId
 * @return {(function(dispatch, getState): void)} - thunk, which send request on server to follow to user
 */
export const unfollowUser = (userId) => {
    return (dispatch, getState) => {
        const state = getState();
        if (state.auth.isAuth && !state.usersPage.inFollowingProgress.includes(userId)) {
            dispatch(setIsFollowingProgress(true, userId));
            userApi.unfollow(userId)
                .then(data => {
                    if (data.resultCode === 0)
                        dispatch(unfollow(userId));
                    else
                        console.log(data.messages.join("\n"));
                })
                .catch(console.log)
                .finally(() => dispatch(setIsFollowingProgress(false, userId)));
        }
    };
};