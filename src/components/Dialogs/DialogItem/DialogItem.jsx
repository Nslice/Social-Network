import css from "./DialogItem.module.css";
import NavLinkV5Style from "../../Navbar/NavLinkV5Style";



const DialogItem = ({id, name}) => {
    const path = `/dialogs/${id}`;
    return (
        <div className={css.item}>
            <NavLinkV5Style to={path} activeClassName={css.activeLink}>{name}</NavLinkV5Style>
        </div>
    );
};



export default DialogItem;
