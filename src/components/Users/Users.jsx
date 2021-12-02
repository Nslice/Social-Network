import Preloader from "../common/Preloader/Preloader"
import css from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";



const Users = (props) => {
    console.log(`render ${Users.name}`);

    const pagesCount =  Math.min(Math.ceil(props.totalUsersCount / props.pageSize), 20);

    return (
        <div>
            <div className={css.pages}>
                {
                    Array(pagesCount).fill(null).map((x, i) => {
                        const pageNumber = i + 1;
                        return (
                            <span className={(props.currentPage === pageNumber) ? css.selectedPage : ""}
                                  onClick={() => props.onPageChanged(pageNumber)}
                                  key={pageNumber}>
                                {pageNumber}
                            </span>
                        )
                    })
                }
            </div>

            <Preloader visible={props.isFetching}/>

            <div className={css.usersContainer}>
                {
                    props.users.map(x =>
                        <div className={css.userContainer} key={x.id}>
                            <div>
                                <div>
                                    <img src={x?.photos?.small ?? userPhoto} className={css.userPhoto} alt="no"/>
                                </div>
                                <div>
                                    {
                                        x.followed
                                            ? <button onClick={() => props.unfollow(x.id)}>Unfollow</button>
                                            : <button onClick={() => props.follow(x.id)}>Follow</button>
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



export default Users;


