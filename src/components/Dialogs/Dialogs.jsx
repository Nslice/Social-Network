import css from "./Dialogs.module.css";
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs.reducer";



const Dialogs = (props) => {
    const dialogs = props.dialogsPage.dialogs.map(x => <DialogItem id={x.id} name={x.name}/>);
    const messages = props.dialogsPage.messages.map(x => <Message message={x.message}/>);

    const onSendMessageClick = () => {
        props.dispatch(addMessageActionCreator());
    };

    const onMessageChange = (e) => {
        const text = e.target.value;
        props.dispatch(updateNewMessageBodyActionCreator(text));
    };

    return (
        <div className={css.dialogs}>
            <div className={css.dialogItems}>
                {dialogs}
            </div>
            <div className={css.messages}>
                <div>{messages}</div>
                <div>
                    <div><textarea onChange={onMessageChange} value={props.dialogsPage.newMessageText} placeholder="Enter your message"/></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Dialogs;