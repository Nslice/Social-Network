import React from "react";
import {connect} from "react-redux";
import {
    setCurrentPage,
    getUsers,
    followUser,
    unfollowUser
} from "../../redux/users.reducer";
import Users from "./Users";



class UsersContainer extends React.Component {
    constructor(props) {
        console.log("UsersContainer.constructor");
        super(props);
    }

    componentDidMount() {
        console.log("UsersContainer.componentDidMount");
        if (!this.props.users.length)
            this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    componentWillUnmount() {
        console.log("UsersContainer.componentWillUnmount");
    }

    onPageChanged = pageNumber => {
        if (pageNumber === this.props.currentPage || this.props.isFetching)
            return;
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    render() {
        return (
            <Users
                page={{
                    pageSize: this.props.pageSize,
                    totalUsersCount: this.props.totalUsersCount,
                    currentPage: this.props.currentPage,
                    onPageChanged: this.onPageChanged
                }}
                userInterface={{
                    users: this.props.users,
                    follow: this.props.followUser,
                    unfollow: this.props.unfollowUser,
                    isFollowingProgress: this.props.isFollowingProgress
                }}
                isFetching={this.props.isFetching}
                isAuth={this.props.isAuth}/>
        );
    }
}


const mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingProgress: state.usersPage.isFollowingProgress,
        isAuth: state.auth.isAuth,
    };
};

const mapDispatchToProps = {
    setCurrentPage,
    getUsers,
    followUser,
    unfollowUser
};



export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);