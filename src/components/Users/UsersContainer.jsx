import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching
} from "../../redux/users.reducer";
import axios from "axios";
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

    onPageChanged = (pageNumber) => {
        if (pageNumber === this.props.currentPage || this.props.isFetching)
            return;

        this.props.setIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        this.props.setUsers([]);

        this.queryForUsers()
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setIsFetching(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    setUsers() {
        if (!this.props.users.length) {
            this.props.setIsFetching(true);

            this.queryForUsers()
                .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount);
                    this.props.setIsFetching(false);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }

    /**
     * @return {Promise}
     */
    queryForUsers() {
        const url = "https://social-network.samuraijs.com/api/1.0";
        return axios.get(`${url}/users?page=${this.props.currentPage}&count=${this.props.pageSize}`);
    }

    render() {
        return (
            <Users users={this.props.users}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   isFetching={this.props.isFetching}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}/>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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