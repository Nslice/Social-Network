import {createReducer} from "@reduxjs/toolkit";
import {
    SET_USERS,
    SET_TOTAL_USERS_COUNT,
    SET_IS_FETCHING,
    SET_CURRENT_PAGE,
    FOLLOW,
    UNFOLLOW,
    SET_IN_FOLLOWING_PROGRESS
} from "redux/actions/types";



const initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 50,
    isFetching: false,
    currentPage: 1,
    inFollowingProgress: []
};


const setUsers = (state, action) => {
    return {...state, users: action.users};
};

const setTotalUsersCount = (state, action) => {
    return {...state, totalUsersCount: action.count};
};

const setIsFetching = (state, action) => {
    return {...state, isFetching: action.isFetching};
};

const setCurrentPage = (state, action) => {
    return {...state, currentPage: action.pageNumber};
};

const follow = (state, action) => {
    return {
        ...state,
        users: state.users.map(x => {
            if (x.id === action.userId)
                x = {...x, followed: true};
            return x;
        })
    };
};

const unfollow = (state, action) => {
    return  {
        ...state,
        users: state.users.map(x => {
            if (x.id === action.userId)
                x = {...x, followed: false};
            return x;
        })
    };
};

const setInFollowingProgress = (state, action) => {
    return {
        ...state,
        inFollowingProgress: action.inProgress
            ? [...state.inFollowingProgress, action.userId]
            : state.inFollowingProgress.filter(x => x !== action.userId)
    };
};



export const userPageReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(SET_USERS, setUsers)
        .addCase(SET_TOTAL_USERS_COUNT, setTotalUsersCount)
        .addCase(SET_IS_FETCHING, setIsFetching)
        .addCase(SET_CURRENT_PAGE, setCurrentPage)
        .addCase(FOLLOW, follow)
        .addCase(UNFOLLOW, unfollow)
        .addCase(SET_IN_FOLLOWING_PROGRESS, setInFollowingProgress)
        .addDefaultCase(state => state);
});