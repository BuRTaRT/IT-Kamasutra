import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Route} from "react-router-dom";


function Dialogs(props) {
    let dialogs = props.dialogsPage.userData.map((item) => <DialogItem
        changeDialog={props.changeDialog}
        key={item.id}
        name={item.name}
        getMessages={props.getMessages}
        id={item.id}/>)

    let updateMessage = (e) => {
        let value = e.target.value;
        props.updateDialogsMessage(value)
    }
    let messages = props.dialogsPage.currentUser.messages.map((message,i) => <Message key={i} message={message}/>)
    let routes = props.dialogsPage.userData.map((u) => (
        <Route key={u.id} path={`/dialogs/${u.id}`} render={() => messages}/>
    ))
    return (
        <div className={s.dialogs}>
            <div>
                {dialogs}
            </div>
            <div className={s.messages}>
                {routes}
                {/*<Route path={'/dialogs/1'} render={() => messages}/>*/}
                {/*<Route path={'/dialogs/2'} render={() => messages}/>*/}
                {/*<Route path={'/dialogs/3'} render={() => messages}/>*/}
                {/*<Route path={'/dialogs/4'} render={() => messages}/>*/}
                {/*<Route path={'/dialogs/5'} render={() => messages}/>*/}

            </div>
            <div>
                <textarea
                    onChange={updateMessage}
                    value={props.dialogsPage.newMessageText}>

                </textarea>
                <button onClick={props.addMessage}>send</button>
            </div>


        </div>

    )
}

export default Dialogs;