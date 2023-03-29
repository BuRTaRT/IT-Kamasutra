import React from "react";
import {combineReducers, legacy_createStore as createStore} from "redux";
import ProfilePageReducer from "./ProfilePageReducer";
import DialogsReducer from "./DialogsReducer";



let reducers = combineReducers({
    profilePage: ProfilePageReducer,
    dialogsPage: DialogsReducer
})

let store = createStore(reducers);

export default store;