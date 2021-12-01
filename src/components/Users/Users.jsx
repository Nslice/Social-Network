import React from "react";
import axios from "axios";
import css from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";



/*
свой реализовать на node.jsтут апи https://social-network.samuraijs.com/docs#samuraijs_social_network
*/
class Users extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.getUsers();
    }


    onPageChanged (pageNumber) {
        console.log("onPageChanged");
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                setTimeout(() => this.props.setUsers(response.data.items), 5);
            });
    }

    getUsers() {
        const url = "https://social-network.samuraijs.com/api/1.0";

        console.log("Запрос");
        axios.get(`${url}/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                setTimeout(() => this.props.setUsers(response.data.items), 5);
                this.props.setTotalUsersCount(response.data.totalCount);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        console.log(`render ${Users.name}`);

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }


        return (
            <div>
                <div className={css.pages}>
                    {
                        pages.map(x => {
                            return (
                                <span className={this.props.currentPage === x && css.selectedPage}
                                      onClick={() => this.onPageChanged(x)}
                                      key={x}>
                                    {x}
                                </span>
                            )
                        })
                    }
                </div>

                <div className={css.usersContainer}>
                    {
                        this.props.users.map(x =>
                            <div className={css.userContainer} key={x.id}>
                                <div>
                                    <div>
                                        <img src={x?.photos?.small ?? userPhoto} className={css.userPhoto} alt="no"/>
                                    </div>
                                    <div>
                                        {
                                            x.followed
                                                ? <button onClick={() => this.props.unfollow(x.id)}>Unfollow</button>
                                                : <button onClick={() => this.props.follow(x.id)}>Follow</button>
                                        }
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <div>{x.name}</div>
                                        <div>{x.status}</div>
                                    </div>
                                    <div>
                                        <div>x.location.country</div>
                                        <div>x.location.city</div>
                                    </div>
                                </div>

                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}


export default Users;