import {ADD_POST, UPDATE_NEW_POST_TEXT} from "./types";



export const addPost = () => ({type: ADD_POST});
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text});