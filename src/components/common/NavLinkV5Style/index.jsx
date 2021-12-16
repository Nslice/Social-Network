import React from "react";
import {NavLink} from "react-router-dom"



/**
 * Для того чтобы подписать активной ссылке класс из CSS модуля, как это работало в react-router-dom 5
 * @param activeClassName
 * @return {JSX.Element}
 */
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



export const NavLinkV5Style = React.forwardRef(navLinkWrapper);