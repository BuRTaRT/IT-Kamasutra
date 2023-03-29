import React from 'react'
import {updateMessageTextActionCreate, addMessageActionCreate} from "../../../State/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateDialogsMessage: (text) => {
            let action = updateMessageTextActionCreate(text);
            dispatch(action)
        },
        addMessage: () => {
            dispatch(addMessageActionCreate())
        }
    }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;