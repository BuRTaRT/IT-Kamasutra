import React from 'react';
import s from "./Post.module.css";


function Post(props){
    return(
        <div className={s.post}>
            <img src="https://images-cdn.9gag.com/photo/a31zryQ_700b.jpg"
                 alt=""/>
            <div className={s.post_text}>{props.message}</div>
        </div>
    )
}
export default Post;