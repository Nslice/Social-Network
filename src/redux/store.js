import profileReducer from "./profile.reducer";
import dialogsReducer from "./dialogs.reducer";



const store = {
    _state:  {
        profilePage: {
            posts: [
                {id: 1, name: "gubich", message: 'Hi, how are you?', likesCount: 12},
                {id: 2, name: "alich", message: 'It\'s my first post', likesCount: 11}
            ],
            newPostText: ""  // TODO мне не нравится что тут создаются поля для UI (это используется в MyPosts)
        },
        dialogsPage: {
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
        },
    },

    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    },
};



export default store;