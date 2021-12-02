const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";


const initialState = {
    posts: [
        {id: 1, name: "gubich", message: 'Hi, how are you?', likesCount: 12},
        {id: 2, name: "alich", message: 'It\'s my first post', likesCount: 11}
    ],
    newPostText: ""
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
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
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            };
        default:
            return state;
    }
};



export const addPost = () => ({type: ADD_POST});
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, text: text});

export default profileReducer;