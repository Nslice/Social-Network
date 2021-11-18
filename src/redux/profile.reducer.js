const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";


const initialState = {
    posts: [
        {id: 1, name: "gubich", message: 'Hi, how are you?', likesCount: 12},
        {id: 2, name: "alich", message: 'It\'s my first post', likesCount: 11}
    ],
    newPostText: ""  // TODO мне не нравится что тут создаются поля для UI (это используется в MyPosts)
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: 5,
                name: "дядя боря",
                message: state.newPostText,
                likesCount: 0
            };

            const stateCopy = {...state}
            stateCopy.posts = state.posts.slice();

            stateCopy.posts.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            const stateCopy = {...state}
            stateCopy.newPostText = action.text;
            return stateCopy;
        }
        default:
            return state;
    }
};



export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, text: text});


export default profileReducer;