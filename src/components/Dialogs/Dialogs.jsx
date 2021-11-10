import css from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {
    const dialogs = [
        {id: 1, name: "Dimych2"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Valera"}
    ].map(x => <DialogItem id={x.id} name={x.name}/>);


    const messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ].map(x => <Message message={x.message}/>);

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