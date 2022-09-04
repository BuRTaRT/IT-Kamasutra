import React from 'react';
import s from "./Post.module.css"

function Post() {
    return (
        <div className={s.post}>
            <textarea name="" id="" cols="30" rows="10" placeholder="Your news"></textarea>
            <button type='button'>Send</button>
        </div>
    )
}

export default Post;