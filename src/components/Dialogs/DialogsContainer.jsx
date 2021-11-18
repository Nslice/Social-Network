import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs.reducer";



const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => dispatch(addMessageActionCreator()),
        updateNewMessageText: (text) => dispatch(updateNewMessageBodyActionCreator(text))
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);



export default DialogsContainer;