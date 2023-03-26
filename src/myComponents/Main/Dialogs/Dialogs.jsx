import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {updateMessageTextActionCreate,addMessageActionCreate} from "../../../State/store";


function Dialogs(props) {
let newDialogsMessage= React.createRef();

function updateDialogsMessage (){
    let text = newDialogsMessage.current.value;
    let action = updateMessageTextActionCreate(text);
    props.store.dispatch(action)
}
function addMessage(){
   props.store.dispatch(addMessageActionCreate())
}
    let dialogs = props.store.getState().userData.map((item) => <DialogItem key={item.id} name={item.name} id={item.id}/>);
    let messages = props.store.getState().messagesArr.map((item, i) => <Message key={i} message={item}/>)
    return (
        <div className={s.dialogs}>
            <div>
                {dialogs}

            </div>
            <div className={s.messages}>
                {messages}
            </div>
            <div>
                <textarea ref={newDialogsMessage}
                          onChange={updateDialogsMessage}
                          value={props.store.getState().newMessageText}></textarea>
                <button onClick={addMessage} >send</button>
            </div>


        </div>

    )
}

export default Dialogs;