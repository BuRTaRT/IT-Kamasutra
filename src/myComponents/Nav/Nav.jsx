import React from 'react';
import s from './Nav.module.css'
import {NavLink} from "react-router-dom";


let activeClassName=({ isActive }) => isActive ? s.active : undefined;
function Header(){

    return (
        <nav className={`${s.nav} grid-elem`}>
            <div className={s.nav_item}><NavLink className={activeClassName} to="/profile">Profile</NavLink></div>
            <div className={s.nav_item}><NavLink className={activeClassName} to="/dialogs">Dialogs</NavLink></div>
            <div className={s.nav_item}>News</div>
            <div className={s.nav_item}>Music</div>
            <div className={s.nav_item}>Settings</div>
        </nav>
    )
}

export default Header;