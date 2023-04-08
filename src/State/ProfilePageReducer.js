import React from 'react';
import {profileApi} from "../myComponents/Api/Api";

let ADD_POST = 'ADD-POST',
    UPDATE_POST_TEXT = 'UPDATE-POST-TEXT',
    SET_USER_PROFILE = "SET_USER_PROFILE"

let initialState = {
    posts: [`Why nobody loves me?`, `What is this place?`],
    newPostText: '',
    userProfile: null

}


function profilePageReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, state.newPostText],
                newPostText: ''
            }
        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile
            }
        default:
            return state;
    }
}

export let setUserProfile = (userProfile) => ({
    type: SET_USER_PROFILE,
    userProfile: userProfile
});
export let addPostActionCreate = () => ({type: ADD_POST});
export let updatePostTextActionCreate = (text) => ({
    type: UPDATE_POST_TEXT,
    newPostText: text
})
export let setUserProfileThunk = (id) => {
    return (dispatch) => {
        profileApi.setProfile(id)
            .then(response=>{
            dispatch(setUserProfile(response.data))
        })

    }
}
export default profilePageReducer;
