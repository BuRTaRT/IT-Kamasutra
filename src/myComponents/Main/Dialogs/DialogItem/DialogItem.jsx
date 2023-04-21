import React from "react";
import {NavLink} from "react-router-dom";
import s from "./DialogItem.module.css"


function DialogItem(props){
    let path =`/dialogs/${props.id}`;
    return(
        <div  className={s.dialogItem}><NavLink  activeClassName={s.active} to={path}>{props.name}</NavLink>
        </div>

    )
}

export default DialogItem;