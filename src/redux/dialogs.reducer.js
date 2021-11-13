const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";


const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const newMessage = {
                id: 4,
                message: state.newMessageText
            };

            state.messages.push(newMessage);
            state.newMessageText = "";
            return state;
        }
        case UPDATE_NEW_MESSAGE_BODY: {
            state.newMessageText = action.body;
            return state;
        }
        default:
            return state;
    }
};



export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updateNewMessageBodyActionCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});


export default dialogsReducer;