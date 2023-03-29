import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Route} from "react-router-dom";


function Dialogs(props) {
    let users = props.dialogsPage.userData;

    let dialogs = users.map((item) => <DialogItem render={props.render} key={item.id} name={item.name} id={item.id}/>);
    function makeMessagesElements(id) {
        let user = users.filter(user => user.id === id)[0];//finding user in [users] by user.id
        return user.messages.map((item, i) => <Message key={i} message={item}/>)//returning [MessageElements]
    }
    let messages = props.dialogsPage.messagesArr.map((message,i)=> <Message key={i} message={message} />)
    let routes = users.map(user => {
        return <Route key={user.id} path={`/dialogs/${user.id}`} render={() => makeMessagesElements(user.id)}/>
    })
    let updateMessage=(e)=>{
        let value=e.target.value;
        props.updateDialogsMessage(value)
    }
    return (
        <div className={s.dialogs}>
            <div>
                {dialogs}
            </div>
            <div className={s.messages}>
                {routes}
                {/*{messages}*/}
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