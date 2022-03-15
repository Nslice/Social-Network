import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {withAuthRedirect} from "hoc/withAuthRedirect";
import {followUser, unfollowUser} from "redux/actions/userActions";
import {setCurrentPage, getUsers} from "redux/actions/userPageActions";
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
                    inFollowingProgress: this.props.inFollowingProgress
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
    inFollowingProgress: PropTypes.arrayOf(PropTypes.number).isRequired,
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
        inFollowingProgress: state.usersPage.inFollowingProgress,
        isAuth: state.auth.isAuth
    };
};

const mapDispatchToProps = {
    setCurrentPage,
    getUsers,
    followUser,
    unfollowUser
};



export const Users = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect(UsersContainer));