import React from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post";


let newPostElement = React.createRef();


function Posts(props) {
    let addPost =()=>{
        props.addPost(newPostElement.current.value);
        newPostElement.current.value ='';
    }
    let postsArr = props.state.postsTextArr.map((item, i) => <Post key={i} message={item}/>);
    return (
        <div className={s.posts}>
            <p>My Posts</p>
            <textarea ref={newPostElement} name="" id="" cols="30" rows="10" placeholder="Your news"></textarea>
            <button onClick={addPost} type='button'>Send</button>
            <div className={s.posts}>
                {postsArr}
            </div>
        </div>
    )
}

export default Posts;