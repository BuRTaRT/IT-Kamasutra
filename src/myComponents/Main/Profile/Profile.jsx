import React from "react";
import s from './Profile.module.css';
import PostsContainer from "./Posts/PostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


function Profile(props) {
    return (
        <main className={`${s.main} grid-elem`}>
            <img className={s.main_img} src="https://aquadar.com/wp-content/uploads/2021/06/img_5148-3.jpg"
                 alt="pff"/>
            <ProfileInfo store={props.store} dispatch={props.dispatch} />
            <PostsContainer store={props.store} />
        </main>
    )
}

export default Profile;