import React from "react";

let ADD_POST = 'ADD-POST',
    UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

function profilePageReducer(state, action) {
    switch (action.type) {
        case ADD_POST:
            state.posts.push(state.newPostText);
            state.newPostText = '';
            return state;
        case UPDATE_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;
        default:
            return state;
    }
}

export let addPostActionCreate = () => ({type: ADD_POST});
export let updatePostTextActionCreate = (text) => ({
    type: UPDATE_POST_TEXT,
    newPostText: text
})
export default profilePageReducer;
