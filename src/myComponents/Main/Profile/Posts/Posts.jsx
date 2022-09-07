import React from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post";


let newPostElement = React.createRef();


function Posts(props) {
    let addPost = () => {
        props.addPost();
    }

    let updatePostText = () => {
        props.updatePostText(newPostElement.current.value);
    }
    let postsArr = props.profilePage.posts.map((item, i) => <Post key={i} message={item}/>);
    return (
        <div className={s.posts}>
            <p>My Posts</p>
            <textarea ref={newPostElement} value={props.profilePage.newPostText} onChange={updatePostText}
                      placeholder="Your news"></textarea>
            <button onClick={addPost} type='button'>Send</button>
            <div className={s.posts}>
                {postsArr}
            </div>
        </div>
    )
}

export default Posts;