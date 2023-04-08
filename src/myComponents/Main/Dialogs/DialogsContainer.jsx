import React from 'react'
import {
    updateMessageTextActionCreate,
    addMessageActionCreate,
    changeDialogAC,

} from "../../../State/DialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";


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
        },
        changeDialog: (currentDialog) => {
            dispatch(changeDialogAC(currentDialog))
        }

    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
