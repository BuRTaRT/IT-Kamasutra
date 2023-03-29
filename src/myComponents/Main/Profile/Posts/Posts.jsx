import React from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post";

function Posts(props) {
    let updateText=(e)=>{
        let value = e.target.value;
        props.updateText(value)
    }
    let posts = props.posts.map((item, i) => <Post key={i} message={item}/>);
    return (
        <div className={s.posts}>
            <p>My Posts</p>
            <textarea  value={props.newPostText}
                      onChange={updateText}
                      placeholder="Your news"></textarea>
            <button onClick={props.addPost} type='button'>Send</button>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    )
}

export default Posts;