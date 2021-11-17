import css from "./Dialogs.module.css";
import React from "react";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {
    const textMessageElement = React.createRef();
    const [isError, setIsError] = React.useState(false);


    const onSendMessageClick = () => {
        setIsError(false);
        const text = textMessageElement.current.value;
        if (!text) {
            setIsError(true)
            return;
        }
        props.addMessage();
    };

    const onMessageChange = (e) => {
        const text = e.target.value;
        props.updateNewMessageText(text);
    };

    const dialogElements = props.dialogs.map(x => <DialogItem id={x.id} name={x.name}/>);
    const messageElements = props.messages.map(x => <Message message={x.message}/>);


    return (
        <div className={css.dialogs}>
            <div className={css.dialogItems}>
                {dialogElements}
            </div>
            <div className={css.messageBlock}>
                <div>{messageElements}</div>
                <div className={css.inputBlock}>
                    <div>
                        <TextField className={css.textField}
                                   inputRef={textMessageElement}
                                   fullWidth
                                   multiline
                                   maxRows={4}
                                   variant="filled"
                                   label="Message"
                                   value={props.newMessageText}
                                   onChange={onMessageChange}
                                   error={isError}
                                   helperText={isError ? "Empty message" : null}
                        />
                    </div>
                    <div>
                        <Button onClick={onSendMessageClick}
                                color="secondary"
                                variant="contained"
                                style={{"marginTop": "5px"}}
                                endIcon={<KeyboardArrowRightIcon/>}>
                            Send
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Dialogs;