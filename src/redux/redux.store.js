import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import thunkMiddleWare from "redux-thunk";
import {profileReducer} from "./reducers/profile.reducer";
import {dialogsReducer} from "./reducers/dialogs.reducer";
import {authReducer} from "./reducers/auth.reducer";
import {userPageReducer} from "./reducers/userPageReducer";



const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: userPageReducer,
    auth: authReducer
});



// Подключение к плагину в бразуере Redux Devtools https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    })
    : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunkMiddleWare)
);



export const store = createStore(reducers, enhancer);