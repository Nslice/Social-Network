import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import {Preloader} from "components/common/Preloader"
import css from "./UsersView.module.css";
import userPhoto from "assets/images/user.png";



export const UsersView = ({page, userWrapper, isFetching, isAuth}) => {
    const getButton = (x) => {
        if (!isAuth)
            return null;
        const isDisabled = (userId) => userWrapper.inFollowingProgress.includes(userId);
        return (
            <div>
                {
                    x.followed
                        ? <button onClick={() => userWrapper.unfollow(x.id)} disabled={isDisabled(x.id)}>Unfollow</button>
                        : <button onClick={() => userWrapper.follow(x.id)} disabled={isDisabled(x.id)}>Follow</button>
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
                    userWrapper.users.map(x =>
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


UsersView.propTypes = {
    page: PropTypes.shape({
        pageSize: PropTypes.number.isRequired,
        totalUsersCount: PropTypes.number.isRequired,
        currentPage: PropTypes.number.isRequired,
        onPageChanged: PropTypes.func.isRequired
    }).isRequired,
    userWrapper: PropTypes.shape({
        users: PropTypes.array.isRequired,
        follow: PropTypes.func.isRequired,
        unfollow: PropTypes.func.isRequired,
        inFollowingProgress: PropTypes.arrayOf(PropTypes.number).isRequired,
    }),
    isFetching: PropTypes.bool.isRequired,
    isAuth: PropTypes.bool.isRequired
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