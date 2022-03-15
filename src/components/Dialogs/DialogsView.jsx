import React from "react";
import PropTypes from 'prop-types';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import {DialogItem} from "./DialogItem";
import {Message} from "./Message";
import css from "./DialogsView.module.css";



export const DialogsView = (props) => {
    const textMessageElement = React.createRef(); // почему не useRef
    const [isError, setIsError] = React.useState(false);


    const onSendMessageClick = (e) => { // TODO: чекнуть арг
        setIsError(false);
        const text = textMessageElement.current.value;
        if (!text) {
            setIsError(true)
            return;
        }
        props.addMessage();
        textMessageElement.current.focus();
    };

    const onMessageChange = (e) => {
        const text = e.target.value;
        props.updateNewMessageText(text);
    };

    const dialogElements = props.dialogs.map(x => <DialogItem key={x.id} id={x.id} name={x.name}/>);
    const messageElements = props.messages.map(x => <Message key={x.id} message={x.message}/>);


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
                                   value={props.newMessageText}
                                   onChange={onMessageChange}
                                   fullWidth
                                   multiline
                                   minRows={3}
                                   maxRows={10}
                                   autoFocus
                                   variant="filled"
                                   label="Message"
                                   error={isError}
                                   helperText={isError ? "Empty message" : null}/>
                    </div>
                    <div>
                        <Button onClick={onSendMessageClick}
                                color="secondary"
                                variant="contained"
                                style={{marginTop: "5px"}}
                                endIcon={<KeyboardArrowRightIcon/>}>
                            Send
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};


DialogsView.propTypes = {
    // state:
    dialogs: PropTypes.array.isRequired,
    messages: PropTypes.array.isRequired,
    newMessageText: PropTypes.string.isRequired,
    // dispatch:
    addMessage: PropTypes.func.isRequired,
    updateNewMessageText: PropTypes.func.isRequired
};