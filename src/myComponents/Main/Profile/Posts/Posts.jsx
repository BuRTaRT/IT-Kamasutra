import React from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post";


let newPostElement = React.createRef();


function Posts(props) {
    let addPost = () => {
        props.dispatch({
            type: "ADD-POST"
        })
    }
    let updatePostText = () => {
        props.dispatch({
            type: "UPDATE-POST-TEXT",
            newPostText: newPostElement.current.value
        })
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