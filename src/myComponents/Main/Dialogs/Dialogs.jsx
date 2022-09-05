import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


function Dialogs(props) {
    let dialogs = props.userData.map((item) => <DialogItem key={item.id} name={item.name} id={item.id}/>);
    let messages = props.messagesArr.map((item, i) => <Message key={i} message={item}/>)
    return (
        <div className={s.dialogs}>
            <div>
                {dialogs}

            </div>
            <div className={s.messages}>
                {messages}
            </div>

        </div>

    )
}

export default Dialogs;