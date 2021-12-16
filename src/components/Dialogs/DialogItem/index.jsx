import PropTypes from "prop-types";
import {NavLinkV5Style} from "components/common/NavLinkV5Style";
import css from "./DialogItem.module.css";



export const DialogItem = ({id, name}) => {
    const path = `/dialogs/${id}`;
    return (
        <div className={css.item}>
            <NavLinkV5Style to={path} activeClassName={css.activeLink}>{name}</NavLinkV5Style>
        </div>
    );
};


DialogItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
};
