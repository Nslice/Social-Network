import css from "./Dialogs.module.css";
import React from "react";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs.reducer";



const Dialogs = (props) => {
    console.log("Rendered Dialogs");

    const dialogs = props.dialogsPage.dialogs.map(x => <DialogItem id={x.id} name={x.name}/>);
    const messages = props.dialogsPage.messages.map(x => <Message message={x.message}/>);

    const texMessageElement = React.createRef();
    const [isError, setIsError] = React.useState(false);


    const onSendMessageClick = () => {
        setIsError(false);

        const text = texMessageElement.current.value;
        if (!text) {
            setIsError(true)
            return;
        }
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
            <div className={css.messageBlock}>
                <div>{messages}</div>
                <div className={css.inputBlock}>
                    <div>
                        <TextField
                            className={css.textField}
                            inputRef={texMessageElement}
                            fullWidth
                            multiline
                            maxRows={4}
                            variant="filled"
                            label="Message"
                            value={props.dialogsPage.newMessageText}
                            onChange={onMessageChange}
                            error={isError}
                            helperText={isError ? "Empty field" : null}
                        />
                    </div>
                    <div>
                        <Button onClick={onSendMessageClick}
                                color="secondary"
                                variant="contained"
                                style={{"margin-top": "5px"}}
                                endIcon={<KeyboardArrowRightIcon/>}
                        >Send</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Dialogs;