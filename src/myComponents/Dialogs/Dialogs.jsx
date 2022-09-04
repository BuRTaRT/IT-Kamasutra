import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

let activeClassName = ({isActive}) => isActive ? s.active : undefined;

function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                <div className={s.dialog}><NavLink className={activeClassName} to='/dialogs/1'>Misha</NavLink></div>
                <div className={s.dialog}><NavLink className={activeClassName} to='/dialogs/2'>Pasha</NavLink></div>
                <div className={s.dialog}><NavLink className={activeClassName} to='/dialogs/3'>Sasha</NavLink></div>
                <div className={s.dialog}><NavLink className={activeClassName} to='/dialogs/4'>Igor</NavLink></div>
                <div className={s.dialog}><NavLink className={activeClassName} to='/dialogs/5'>Stew</NavLink></div>

            </div>
            <div className={s.messages}>
                <div className={s.message}>hi</div>
                <div className={s.message}>How are you</div>
                <div className={s.message}>Go play cs</div>
            </div>

        </div>

    )
}

export default Dialogs;