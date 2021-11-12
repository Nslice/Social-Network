import css from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {
    const state = props.store.getState();
    const dialogs = state.dialogsPage.dialogs.map(x => <DialogItem id={x.id} name={x.name}/>);
    const messages = state.dialogsPage.messages.map(x => <Message message={x.message}/>);

    return (
        <div className={css.dialogs}>
            <div className={css.dialogItems}>
                {dialogs}
            </div>
            <div className={css.messages}>
                {messages}
            </div>

        </div>
    );
};



export default Dialogs;