import {createReducer} from "@reduxjs/toolkit";
import {
    ADD_POST,
    SET_USER_PROFILE,
    UPDATE_NEW_POST_TEXT
} from "redux/actions/types";



const initialState = {
    profile: null,
    posts: [
        {id: 1, name: "gubich", message: 'Hi, how are you?', likesCount: 12},
        {id: 2, name: "alich", message: 'It\'s my first post', likesCount: 11}
    ],
    newPostText: ""
};


const addPost = (state, action) => {
    const newPost = {
        id: 5,
        name: "дядя боря",
        message: state.newPostText,
        likesCount: 0
    };
    return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ""
    };
};

const updateNewPostText = (state, action) => {
    return {...state, newPostText: action.text};
};

const setUserProfile = (state, action) => {
    return {...state, profile: action.profile};
};



export const profileReducer = createReducer(initialState, (builder) => {
    return builder
        .addCase(ADD_POST, addPost)
        .addCase(UPDATE_NEW_POST_TEXT, updateNewPostText)
        .addCase(SET_USER_PROFILE, setUserProfile)
        .addDefaultCase(state => state);
});