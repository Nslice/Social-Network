import React from "react";
import {NavLink} from "react-router-dom";
import {useLocation} from 'react-router-dom';
import css from "./Navbar.module.css";



export const Navbar = () => {
    console.log("Navbar");

    const location = useLocation();
    const [activeLink, setActiveLink] = React.useState(location.pathname);

    const onClick = (link) => setActiveLink(link);

    const classNameHandler = (isActive, link) => {
        if (isActive || link === activeLink)
            return css.activeLink;
        else
            return null;
    };

    return (
        <nav className={css.nav}>
            <div className={css.item}>
                <CustomNavLink to="/profile/2" className={classNameHandler} onClick={onClick}>
                    Profile
                </CustomNavLink>
            </div>
            <div className={css.item}>
                <CustomNavLink to="/dialogs" className={classNameHandler} onClick={onClick}>
                    Messages
                </CustomNavLink>
            </div>
            <div className={css.item}>
                <CustomNavLink to="/users" className={classNameHandler} onClick={onClick}>
                    Users
                </CustomNavLink>
            </div>
            <div className={css.item}>
                <CustomNavLink to="/news" className={classNameHandler} onClick={onClick}>
                    News
                </CustomNavLink>
            </div>
            <div className={css.item}>
                <CustomNavLink to="/music" className={classNameHandler} onClick={onClick}>
                    Music
                </CustomNavLink>
            </div>
            <div className={css.item}>
                <CustomNavLink to="/settings" className={classNameHandler} onClick={onClick}>
                    Settings
                </CustomNavLink>
            </div>
        </nav>
    );
};



const CustomNavLink = ({to, className, onClick, ...props}) => {
    console.log("bind");
    const onClickHandler = onClick?.bind(null, to); // TODO: говорят нехорошо использовать bind в JSX, много много раз создает функции ссылка у меня :ошибки в реакт.мд
    const classNameHandler = ({isActive}) => {
        return className(isActive, to);
    };

    return <NavLink to={to} onClick={onClickHandler} className={classNameHandler} {...props} />
};

