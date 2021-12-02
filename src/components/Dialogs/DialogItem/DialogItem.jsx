import NavLinkV5Style from "../../common/NavLinkV5Style/NavLinkV5Style";
import css from "./DialogItem.module.css";



const DialogItem = ({id, name}) => {
    const path = `/dialogs/${id}`;
    return (
        <div className={css.item}>
            <NavLinkV5Style to={path} activeClassName={css.activeLink}>{name}</NavLinkV5Style>
        </div>
    );
};



export default DialogItem;
