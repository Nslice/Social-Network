import * as React from "react";
import {NavLink} from "react-router-dom"


// TODO: надо разобраться со структурой проектов React, и перенести этот модуль куда-нибудь
// по смыслу это глобальный кастомный компонент доступный во всем проекте для JSX

// Для того чтобы подписать активной ссылко класс из CSS модуля
const navLinkWrapper = ({activeClassName, ...props}, ref) => {
    return (
        <NavLink
            ref={ref}
            {...props}
            className={({isActive}) => [props.className, isActive ? activeClassName : null]
                .filter(Boolean)
                .join(" ")
            }
        />
    );
};

const NavLinkV5Style = React.forwardRef(navLinkWrapper);


export default NavLinkV5Style;