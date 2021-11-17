import React from "react";
import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs.reducer";



const DialogsContainer = ({store}) => {
    const addMessage = () => {
        store.dispatch(addMessageActionCreator());
    };

    const updateNewMessageText = (text) => {
        store.dispatch(updateNewMessageBodyActionCreator(text));
    };

    const state = store.getState();

    return (
        <Dialogs dialogs={state.dialogsPage.dialogs}
                 messages={state.dialogsPage.messages}
                 newMessageText={state.dialogsPage.newMessageText}
                 addMessage={addMessage}
                 updateNewMessageText={updateNewMessageText}
        />
    );
};



export default DialogsContainer;