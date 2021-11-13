const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";


const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 5,
                name: "дядя боря",
                message: state.newPostText,
                likesCount: 0
            };

            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        }
        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.text;
            return state;
        }
        default:
            return state;
    }
};



export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, text: text});


export default profileReducer;