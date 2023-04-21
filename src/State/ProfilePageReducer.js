import React from 'react';
import {profileApi} from "../myComponents/Api/Api";

let ADD_POST = 'ADD-POST',
    SET_USER_PROFILE = "SET_USER_PROFILE",
    PUT_PROFILE_STATUS = 'PUT_PROFILE_STATUS',
    GET_PROFILE_STATUS = 'GET_PROFILE_STATUS ',
    UPDATE_PROFILE_STATUS = 'UPDATE_PROFILE_STATUS'

let initialState = {
    posts: [`Why nobody loves me?`, `What is this place?`],
    userProfile: null,
    status: ''
}


function profilePageReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, action.postText],
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile
            }
        case GET_PROFILE_STATUS:
            return {
                ...state,
                status: action.status
            }
        case UPDATE_PROFILE_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export let setUserProfile = (userProfile) => ({
    type: SET_USER_PROFILE,
    userProfile: userProfile
});
export let addPostAC = (postText) => ({type: ADD_POST, postText: postText});


export let setUserProfileThunk = (id) => {
    return (dispatch) => {
        profileApi.setProfile(id)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })

    }
}
export let setProfileStatusAC = (status) => ({
    type: GET_PROFILE_STATUS,
    status: status
});

export let getProfileStatus = (id) => {
    return (dispatch) => {
        profileApi.getStatus(id)
            .then(response => {
                dispatch(setProfileStatusAC(response.data))
            })
    }
}
export let putProfileStatus = (status) => {
    return (dispatch) => {
        profileApi.putStatus(status)
            .then(response => {
                dispatch(setProfileStatusAC(status))
            })
    }
}

export default profilePageReducer;
