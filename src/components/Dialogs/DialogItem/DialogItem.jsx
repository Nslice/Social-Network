import css from "../Dialogs.module.css";
import NavLinkV5Style from "../../Navbar/NavLinkV5Style";



const DialogItem = (props) => {
    const path = `/dialogs/${props.id}`;
    return (
        <div className={`${css.dialog} ${css.active}`}>
            <NavLinkV5Style to={path}>{props.name}</NavLinkV5Style>
        </div>
    );
};



export default DialogItem;
