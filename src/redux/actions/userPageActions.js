import {userApi} from "api/api";
import {
    SET_USERS,
    SET_TOTAL_USERS_COUNT,
    SET_IS_FETCHING,
    SET_CURRENT_PAGE
} from "./types";



export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber});
export const setTotalUsersCount = (count) => ({type: SET_TOTAL_USERS_COUNT, count});
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});


/**
 * ThunkCreator
 * @param {number} currentPage
 * @param {number} pageSize
 * @return {(function(dispatch, getState): void)} - thunk, which load users from server
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
};