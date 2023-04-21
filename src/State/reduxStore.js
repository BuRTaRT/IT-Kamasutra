import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import ProfilePageReducer from "./ProfilePageReducer";
import DialogsReducer from "./DialogsReducer";
import UsersReducer from "./UsersReducer";
import authReducer from "./authReducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'




let reducers = combineReducers({
    profilePage: ProfilePageReducer,
    dialogsPage: DialogsReducer,
    usersPage:UsersReducer,
    auth:authReducer,
    form: formReducer
})

let store = createStore(reducers,applyMiddleware(thunk));

export default store;