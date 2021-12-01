import css from "./Message.module.css";



const Message = ({message}) => {
    return (
        <div className={css.message}>
            {message}
        </div>
    );
};



export default Message;