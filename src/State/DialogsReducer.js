import React from "react";

let ADD_MESSAGE = 'ADD-MESSAGE',
    UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

function dialogsPageReducer(state, action) {
    switch (action.type) {

        case ADD_MESSAGE:
            state.userData[0].messages.push(state.newMessageText);
            state.newMessageText = '';
            return state;
        case UPDATE_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            return state;
        default:
            return state;
    }
}

export let addMessageActionCreate = () => ({type: ADD_MESSAGE});
export let updateMessageTextActionCreate = (text) => ({
    type: UPDATE_MESSAGE_TEXT,
    newMessageText: text
})

export default dialogsPageReducer;