import {connect} from "react-redux";
import {followAC, unfollowAC, setUserAC, setCurrentPageAC, setTotalUsersCountAC} from "../../redux/users.reducer";
import Users from "./Users";



const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        follow(userId) {
            dispatch(followAC(userId));
        },
        unfollow(userId) {
            dispatch(unfollowAC(userId));
        },
        setUsers(users) {
            dispatch(setUserAC(users));
        },
        setCurrentPage(page) {
            dispatch(setCurrentPageAC(page));
        },
        setTotalUsersCount(count) {
            dispatch(setTotalUsersCountAC(count));
        }
    };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);



export default UsersContainer;
