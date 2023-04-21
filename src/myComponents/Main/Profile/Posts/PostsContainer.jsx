import React from 'react';
import Posts from "./Posts";
import {connect} from "react-redux";
import {addPostAC} from "../../../../State/ProfilePageReducer";




let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (postText) => {
            let action = addPostAC(postText);
            dispatch(action);
        }

    }
}

let PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts);

export default PostsContainer;