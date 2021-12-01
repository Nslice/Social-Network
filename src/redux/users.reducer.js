const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";



const initialState = {
    users: [],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 1
};


const usersReducer = (state = initialState, action) => {
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
        default:
            return state;
    }
};



export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUserAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber});
export const setTotalUsersCountAC = (count) => ({type: SET_TOTAL_USERS_COUNT, count});

export default usersReducer;