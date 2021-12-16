import {userApi} from "api/api";



const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_IS_FETCHING = "SET_IS_FETCHING";
const SET_IS_FOLLOWING_PROGRESS = "SET_IS_FOLLOWING_PROGRESS";


const initialState = {
    users: [],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingProgress: []
};



export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(x => {
                    if (x.id === action.userId)
                        x = {...x, followed: true};
                    return x;
                })
            };
        case UNFOLLOW:
            return  {
                ...state,
                users: state.users.map(x => {
                    if (x.id === action.userId)
                        x = {...x, followed: false};
                    return x;
                })
            };
        case SET_USERS:
            return  {...state, users: action.users};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.pageNumber};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count};
        case SET_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case SET_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                isFollowingProgress: action.inProgress
                    ? [...state.isFollowingProgress, action.userId]
                    : state.isFollowingProgress.filter(x => x !== action.userId)
            };
        default:
            return state;
    }
};


export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber});
export const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count});
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
export const setIsFollowingProgress = (inProgress, userId) => ({type: SET_IS_FOLLOWING_PROGRESS, inProgress, userId});


/**
 * ThunkCreator
 * @param {number} currentPage
 * @param {number} pageSize
 * @return {(function(dispatch, getState): void)} thunk, which load users from server
 */
export const getUsers = (currentPage, pageSize) => {
    return (dispatch, getState) => {
        dispatch(setUsers([]));
        dispatch(setIsFetching(true));

        userApi.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            })
            .catch(console.log)
            .finally(() => dispatch(setIsFetching(false)));
    };
}


/**
 * ThunkCreator
 * @param {number} userId
 * @return {(function(dispatch, getState): void)} thunk, which send request on server to follow to user
 */
export const followUser = (userId) => {
    return (dispatch, getState) => {
        const state = getState();
        if (state.auth.isAuth && !state.usersPage.isFollowingProgress.includes(userId)) {
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
 * @return {(function(dispatch, getState): void)} thunk, which send request on server to follow to user
 */
export const unfollowUser = (userId) => {
    return (dispatch, getState) => {
        const state = getState();
        if (state.auth.isAuth && !state.usersPage.isFollowingProgress.includes(userId)) {
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