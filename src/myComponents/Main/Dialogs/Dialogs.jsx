import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {FormControls} from "../../common/formControls/formControls";
import {maxLengthC, minLengthC, required} from "../../../utils/validators";

let minLength=minLengthC(2);
let maxLength =maxLengthC(6)

let Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'message'} typefield={'textarea'} validate={[required,maxLength,minLength]} component={FormControls}></Field>
            <button>send</button>
        </form>
    )
}

function Dialogs(props) {
    let dialogs = props.dialogsPage.userData.map((item) => <DialogItem
        key={item.id}
        name={item.name}
        id={item.id}/>)
    let messages = props.dialogsPage.userData[0].messages.map((message, i) => <Message key={i} message={message}/>)
    let onSubmit = (formData) => {
        props.addMessage(formData.message);

    }
    return (
        <div className={s.dialogs}>
            <div>
                {dialogs}
            </div>
            <div className={s.messages}>
                {messages}
            </div>
            <DialogsForm onSubmit={onSubmit}/>
        </div>

    )
}

let DialogsForm = reduxForm({form: 'dialogs'})(Form);

export default Dialogs;