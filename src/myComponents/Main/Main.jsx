import React from "react";
import s from './Main.module.css'
import Profile from "./Profile/Profile";
import Posts from "./Posts/Posts";
import Comments from "./Comments/Comments";


function Main() {
    return (
        <main className={`${s.main} grid-elem`}>
            <img className={s.main_img} src="https://aquadar.com/wp-content/uploads/2021/06/img_5148-3.jpg"
                 alt="pff"/>
            <Profile/>
            <Posts/>
            <Comments/>
        </main>
    )
}

export default Main;