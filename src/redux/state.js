const store = {
    _state:  {
        profilePage: {
            posts: [
                {id: 1, name: "gubich", message: 'Hi, how are you?', likesCount: 12},
                {id: 2, name: "alich", message: 'It\'s my first post', likesCount: 11}
            ],
            newPostText: "textNewPost"  // TODO мне не нравится что тут создаются поля для UI (это используется в MyPosts)
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
            ]
        },
    },

    _callSubscriber () {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },

    addPost() {
        const newPost = {
            id: 5,
            name: "дядя боря",
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this);
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }
};



export default store;