import React from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post";
// import {addPostActionCreate, updatePostTextActionCreate} from "../../../../State/ProfilePageReducer";

// let newPostElement = React.createRef();


function Posts(props) {

    let posts = props.posts.map((item, i) => <Post key={i} message={item}/>);
    return (
        <div className={s.posts}>
            <p>My Posts</p>
            <textarea  value={props.newPostText}
                      onChange={props.updateText}
                      placeholder="Your news"></textarea>
            <button onClick={props.addPost} type='button'>Send</button>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}

export default Posts;