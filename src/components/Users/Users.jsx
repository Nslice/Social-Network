import {NavLink} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader"
import css from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";



/**
 * @param {object} obj - props
 * @param {object} obj.page
 * @param {object} obj.userInterface
 * @param {boolean} obj.isFetching
 * @param {boolean} obj.isAuth
 * @return {JSX.Element}
 */
const Users = ({page, userInterface, isFetching, isAuth}) => {
    console.log(`render ${Users.name}`);

    const getButton = x => {
        if (!isAuth)
            return null;
        const isDisabled = userId => userInterface.isFollowingProgress.includes(userId);
        return (
            <div>
                {
                    x.followed
                        ? <button onClick={() => userInterface.unfollow(x.id)} disabled={isDisabled(x.id)}>Unfollow</button>
                        : <button onClick={() => userInterface.follow(x.id)} disabled={isDisabled(x.id)}>Follow</button>
                }
            </div>
        );
    };


    return (
        <div>
            <PageSelector {...page}/>
            <Preloader visible={isFetching}/>

            <div className={css.usersContainer}>
                {
                    userInterface.users.map(x =>
                        <div className={css.userContainer} key={x.id}>
                            <div>
                                <div>
                                    <NavLink to={`/profile/${x.id}`}>
                                        <img src={x.photos?.small ?? userPhoto} className={css.userPhoto} alt="no"/>
                                    </NavLink>
                                </div>
                                {getButton(x)}
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
};


/**
 * @param {object} obj
 * @param {number} obj.totalUsersCount
 * @param {number} obj.pageSize
 * @param {number} obj.currentPage
 * @param {function} obj.onPageChanged
 * @return {JSX.Element}
 */
const PageSelector = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    const pagesCount = Math.min(Math.ceil(totalUsersCount / pageSize), 20);
    console.log("Render PageSelector");
    return (
        <div className={css.pages}>
            {
                Array(pagesCount)
                    .fill(null)
                    .map((x, i) => {
                        const pageNumber = i + 1;
                        return (
                            <span className={(currentPage === pageNumber) ? css.selectedPage : ""}
                                  onClick={() => onPageChanged(pageNumber)}
                                  key={pageNumber}>
                                {pageNumber}
                            </span>
                        );
                    })
            }
        </div>
    );
};



export default Users;