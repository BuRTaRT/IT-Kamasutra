import React from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post";


function Posts (){
    return (
        <div className={s.posts}>
            <p>My Posts</p>
            <Post/>
        </div>
    )
}
export default Posts;