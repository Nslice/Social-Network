import {connect} from "react-redux";
import {addMessage, updateNewMessageText} from "../../redux/dialogs.reducer";
import Dialogs from "./Dialogs";



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



export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);