import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {
    setCurrentPage,
    getUsers,
    followUser,
    unfollowUser
} from "redux/users.reducer";
import {withAuthRedirect} from "hoc/withAuthRedirect";
import {UsersView} from "./UsersView";



class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
        this.onPageChanged = this.onPageChanged.bind(this);
    }

    componentDidMount() {
        console.log("UsersContainer.componentDidMount");
        if (!this.props.users.length)
            this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    componentWillUnmount() {
        console.log("UsersContainer.componentWillUnmount");
    }

    onPageChanged(pageNumber) {
        if (pageNumber === this.props.currentPage || this.props.isFetching)
            return;
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    render() {
        return (
            <UsersView
                page={{
                    pageSize: this.props.pageSize,
                    totalUsersCount: this.props.totalUsersCount,
                    currentPage: this.props.currentPage,
                    onPageChanged: this.onPageChanged
                }}
                userWrapper={{
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


UsersContainer.propTypes = {
    // state:
    users: PropTypes.array.isRequired,
    pageSize: PropTypes.number.isRequired,
    totalUsersCount: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    isFetching: PropTypes.bool.isRequired,
    isFollowingProgress: PropTypes.arrayOf(PropTypes.number).isRequired,
    isAuth: PropTypes.bool.isRequired,
    // dispatch:
    setCurrentPage: PropTypes.func.isRequired,
    getUsers: PropTypes.func.isRequired,
    followUser: PropTypes.func.isRequired,
    unfollowUser: PropTypes.func.isRequired
};


const mapStateToProps = (state) => {
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



export const Users = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect(UsersContainer));