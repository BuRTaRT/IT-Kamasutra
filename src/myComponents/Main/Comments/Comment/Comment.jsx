import React from 'react';
import s from "./Comment.module.css";


function Comment(props){
    return(
        <div className={s.comment}>
            <img src="https://images-cdn.9gag.com/photo/a31zryQ_700b.jpg"
                 alt=""/>
            <div className={s.comment_text}>{props.message}</div>
        </div>
    )
}
export default Comment;