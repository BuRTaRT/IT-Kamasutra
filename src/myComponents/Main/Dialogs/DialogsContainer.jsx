import React from "react";
import {updateMessageTextActionCreate, addMessageActionCreate} from "../../../State/DialogsReducer";
import Dialogs from "./Dialogs";



function DialogsContainer(props) {
    let users = props.store.getState().dialogsPage.userData;
    let newMessageBody =props.store.getState().dialogsPage.newMessageText
    function updateNewDialogsMessage(e) {
        let text = e.target.value;
        let action = updateMessageTextActionCreate(text);
        props.store.dispatch(action)
    }
    function addNewMessage() {
        props.store.dispatch(addMessageActionCreate())
    }

   return ( <Dialogs updateDialogsMessage={updateNewDialogsMessage} newMessageText={newMessageBody} addMessage={addNewMessage} users={users}/>

    )
}

export default DialogsContainer;