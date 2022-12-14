import React from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post";
import {addPostActionCreate,updatePostTextActionCreate} from "../../../../State/store";

let newPostElement = React.createRef();



function Posts(props) {
    let addPost = () => {
        props.dispatch(addPostActionCreate())
    }
    let updatePostText = () => {
        props.dispatch(updatePostTextActionCreate((newPostElement.current.value)))
    }
    let postsArr = props.store.getState().profilePage.posts.map((item, i) => <Post key={i} message={item}/>);
    return (
        <div className={s.posts}>
            <p>My Posts</p>
            <textarea ref={newPostElement} value={props.store.getState().profilePage.newPostText}
                      onChange={updatePostText}
                      placeholder="Your news"></textarea>
            <button onClick={addPost} type='button'>Send</button>
            <div className={s.posts}>
                {postsArr}
            </div>
        </div>
    )
}

export default Posts;