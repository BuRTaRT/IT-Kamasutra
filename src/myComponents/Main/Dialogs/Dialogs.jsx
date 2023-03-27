import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Route} from "react-router-dom";


function Dialogs(props) {
    let users = props.users;


    function makeMessagesElements(id) {
        let user = users.filter(user => user.id === id)[0];//finding user in [users] by user.id
        return user.messages.map((item, i) => <Message key={i} message={item}/>)//returning [MessageElements]
    }
    let dialogs = users.map((item) => <DialogItem key={item.id} name={item.name} id={item.id}/>);
    let routes = users.map(user => {
        return <Route key={user.id} path={`/dialogs/${user.id}`} render={() => makeMessagesElements(user.id)}/>
    })
    return (
        <div className={s.dialogs}>
            <div>
                {dialogs}
            </div>
            <div className={s.messages}>

                {routes}

            </div>
            <div>
                <textarea
                    onChange={props.updateDialogsMessage}
                    value={props.newMessageText}>

                </textarea>
                <button onClick={props.addMessage}>send</button>
            </div>


        </div>

    )
}

export default Dialogs;