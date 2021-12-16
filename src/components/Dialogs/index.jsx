import {connect} from "react-redux";
import {addMessage, updateNewMessageText} from "redux/dialogs.reducer";
import {DialogsView} from "./DialogsView";



const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    };
};

const mapDispatchToProps = {
    addMessage,
    updateNewMessageText
};



export const Dialogs = connect(mapStateToProps, mapDispatchToProps)(DialogsView);