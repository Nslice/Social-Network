import {createReducer} from "@reduxjs/toolkit";
import {ADD_MESSAGE, UPDATE_NEW_MESSAGE_TEXT} from "redux/actions/types";



const initialState = {
    dialogs: [
        {id: 1, name: "Dimych2"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Valera"}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    newMessageText: ""
};


const addMessage = (state, action) => {
    const newMessage = {
        id: 4,
        message: state.newMessageText
    };
    return {
        ...state,
        messages: [...state.messages, newMessage],
        newMessageText: ""
    };
};

const updateNewMessageText = (state, action) => {
    return {
        ...state,
        newMessageText: action.text
    };
};



export const dialogsReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(ADD_MESSAGE, addMessage)
        .addCase(UPDATE_NEW_MESSAGE_TEXT, updateNewMessageText)
        .addDefaultCase(state => state);
});