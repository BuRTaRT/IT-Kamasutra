import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

function Dialog(props){
    let path =`/dialogs/${props.id}`
    return(
        <div className={s.dialog}><NavLink activeClassName={s.active} to={path}>{props.name}</NavLink></div>
    )
}
function Message(props){
    return(
        <div className={s.message}>{props.message}</div>
    )
}
let userData=[
    {name:'misha',id:1},
    {name:'pasha',id:2},
    {name:'sasha',id:3},
    {name:'igor',id:4},
    {name:'stew',id:5}
]
let dialogs =userData.map((item)=> <Dialog key={item.id} name={item.name} id={item.id}/>);
function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialog_items}>
                {dialogs}

            </div>
            <div className={s.messages}>
                <Message message='Hello'/>
                <Message message='Hello my friend'/>
                <Message message='go play cs'/>
            </div>

        </div>

    )
}

export default Dialogs;