import React from 'react';
import {addPostActionCreate, updatePostTextActionCreate} from "../../../../State/ProfilePageReducer";
import Posts from "./Posts";
import {connect} from "react-redux";




let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateText: (text) => {
            let action = updatePostTextActionCreate(text);
            dispatch(action);
        },
        addPost: () => {
            let action = addPostActionCreate();
            dispatch(action);
        }

    }
}

let PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts);

export default PostsContainer;