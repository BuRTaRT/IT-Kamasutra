import React from 'react';
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";



function Header(){

    return (
        <nav className={`${s.nav} grid-elem`}>
            <div className={s.nav_item}><NavLink activeClassName={s.active}  to="/profile">Profile</NavLink></div>
            <div className={s.nav_item}><NavLink activeClassName={s.active}  to="/dialogs">Dialogs</NavLink></div>
            <div className={s.nav_item}>News</div>
            <div className={s.nav_item}>Music</div>
            <div className={s.nav_item}>Settings</div>
        </nav>
    )
}

export default Header;