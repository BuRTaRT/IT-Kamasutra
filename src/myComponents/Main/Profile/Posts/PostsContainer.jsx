import React from "react";
import {addPostActionCreate, updatePostTextActionCreate} from "../../../../State/ProfilePageReducer";
import Posts from "./Posts";

// let newPostElement = React.createRef();


 function PostsContainer(props) {
    let addNewPost = () => {
        let action = addPostActionCreate();
        props.store.dispatch(action);
    }
    let updateNewPostText = (e) => {
        let text = e.target.value;
        let action = updatePostTextActionCreate(text);
        props.store.dispatch(action);
    }
  return <Posts  addPost={addNewPost} newPostText={props.store.getState().profilePage.newPostText} updateText={updateNewPostText} posts ={props.store.getState().profilePage.posts}  />
}

export default PostsContainer;