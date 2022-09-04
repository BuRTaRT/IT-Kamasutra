import React from 'react';
import s from "./Comments.module.css";
import Comment from "./Comment/Comment";


function Comments(props) {
    return (
        <div className={s.comments}>
            <Comment message={`Why nobody loves me?`}/>
            <Comment message={`What is this place?`}/>

        </div>
    )
}

export default Comments;