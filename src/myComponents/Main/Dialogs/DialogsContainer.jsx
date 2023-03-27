import React from "react";
import {updateMessageTextActionCreate, addMessageActionCreate} from "../../../State/DialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../../StoreContext";


function DialogsContainer(props) {
    // let users = props.store.getState().dialogsPage.userData;
    // let newMessageBody = props.store.getState().dialogsPage.newMessageText
    //
    // function updateNewDialogsMessage(e) {
    //     let text = e.target.value;
    //     let action = updateMessageTextActionCreate(text);
    //     props.store.dispatch(action)
    // }
    //
    // function addNewMessage() {
    //     props.store.dispatch(addMessageActionCreate())
    // }

    return (
        <StoreContext.Consumer>
            {
                store => {


                    let users = store.getState().dialogsPage.userData;
                    let newMessageBody = store.getState().dialogsPage.newMessageText

                    function updateNewDialogsMessage(e) {
                        let text = e.target.value;
                        let action = updateMessageTextActionCreate(text);
                        store.dispatch(action)
                    }

                    function addNewMessage() {
                        store.dispatch(addMessageActionCreate())
                    }


                    return <Dialogs updateDialogsMessage={updateNewDialogsMessage}
                                    newMessageText={newMessageBody}
                                    addMessage={addNewMessage}
                                    users={users}/>


                }
            }
        </StoreContext.Consumer>

    )
}

export default DialogsContainer;