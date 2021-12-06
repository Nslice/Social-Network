import React from "react";
import {connect} from "react-redux";
import {userApi} from "../../api/api";
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching
} from "../../redux/users.reducer";
import Users from "./Users";



class UsersContainer extends React.Component {
    constructor(props) {
        console.log("UsersContainer.constructor");
        super(props);
    }

    componentDidMount() {
        console.log("UsersContainer.componentDidMount");
        this.setUsers();
    }

    componentWillUnmount() {
        console.log("UsersContainer.componentWillUnmount");
    }

    onPageChanged = pageNumber => {
        if (pageNumber === this.props.currentPage || this.props.isFetching)
            return;

        this.props.setIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        this.props.setUsers([]);

        userApi.getUsers(pageNumber, this.props.pageSize)
            .then(data => this.props.setUsers(data.items))
            .catch(console.log)
            .finally(() => this.props.setIsFetching(false));
    }

    setUsers() {
        if (!this.props.users.length) {
            this.props.setIsFetching(true);

            userApi.getUsers(this.props.currentPage, this.props.pageSize)
                .then(data => {
                    this.props.setUsers(data.items);
                    this.props.setTotalUsersCount(data.totalCount);
                })
                .catch(console.log)
                .finally(() => this.props.setIsFetching(false));
        }
    }

    follow = (userId) => {
        if (this.props.isAuth) {
            userApi.follow(userId)
                .then(data => {
                    if (data.resultCode === 0)
                        this.props.follow(userId);
                    else
                        console.log(data.messages.join("\n"));
                })
                .catch(console.log);
        }
    }

    unfollow = (userId) => {
        if (this.props.isAuth) {
            userApi.unfollow(userId)
                .then(data => {
                    if (data.resultCode === 0)
                        this.props.unfollow(userId);
                    else
                        console.log(data.messages.join("\n"));
                })
                .catch(console.log);
        }
    }

    render() {
        return (
            <Users users={this.props.users}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   isFetching={this.props.isFetching}
                   onPageChanged={this.onPageChanged}
                   isAuth={this.props.isAuth}
                   follow={this.follow}
                   unfollow={this.unfollow}/>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isAuth: state.auth.isAuth
    };
};

const mapDispatchToProps = {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching
};



export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);