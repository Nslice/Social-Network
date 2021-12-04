import {NavLink} from "react-router-dom";
import css from "./Header.module.css";



const Header = ({isAuth, login}) => {
    const userButton = isAuth
        ? <span>{login}</span>
        : <NavLink to={`/login`}>Login</NavLink>;

    return (
        <header className={css.header}>
            <img src="https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo.png" alt="no"/>
            <div className={css.loginBlock}>
                {userButton}
            </div>
        </header>
    );
};



export default Header;