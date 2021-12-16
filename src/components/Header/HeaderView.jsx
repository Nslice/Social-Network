import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import css from "./HeaderView.module.css";



export const HeaderView = ({isAuth, login}) => {
    return (
        <header className={css.header}>
            <img src="https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo.png" alt="no"/>
            <div className={css.loginBlock}>
                {
                    isAuth
                        ? <span>{login}</span>
                        : <Link to="/login" replace>Login</Link>
                }
            </div>
        </header>
    );
};


HeaderView.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    login: PropTypes.string
};