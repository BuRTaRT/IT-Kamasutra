import React from "react";
import {combineReducers, legacy_createStore as createStore} from "redux";
import ProfilePageReducer from "./ProfilePageReducer";
import DialogsReducer from "./DialogsReducer";
import UsersReducer from "./UsersReducer";



let reducers = combineReducers({
    profilePage: ProfilePageReducer,
    dialogsPage: DialogsReducer,
    usersPage:UsersReducer
})

let store = createStore(reducers);

export default store;