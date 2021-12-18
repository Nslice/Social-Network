import {ADD_MESSAGE, UPDATE_NEW_MESSAGE_TEXT} from "./types";



export const addMessage = () => ({type: ADD_MESSAGE});
export const updateNewMessageText = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, text});