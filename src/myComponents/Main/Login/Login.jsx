import React from 'react';
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {LogIn} from "../../../State/authReducer";
import {FormControls} from "../../common/formControls/formControls";
import {maxLengthC, minLengthC, required} from "../../../utils/validators";
import {Redirect} from "react-router-dom";


const maxLength = maxLengthC(30);
const minLength = minLengthC(3);


let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field validate={[required, maxLength, minLength]} typefield={'input'} name={"email"}
                        component={FormControls} placeholder={'login'}/></div>
            <div><Field validate={[required, maxLength, minLength]} type={'password'} typefield={'input'}
                        name={"password"} component={FormControls} placeholder={'password'}/></div>
            <div><Field name={"rememberMe"} component={'input'} type="checkbox"/>rememberMe</div>
            <div>
                {props.error && <div className="error">{props.error}</div>}
                <button>Login</button>
            </div>

        </form>
    )
}


let Login = (props) => {
    let onSubmit = (formData) => {
        props.LogIn(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) return <Redirect to={'/profile'}/>
    else if (!props.isAuth) return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
let mapStateToProps = (state) => {
    return {
        auth: state.auth,
        isAuth: state.auth.isAuth
    }
}


let LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
let LoginContainer = connect(mapStateToProps, {LogIn})(Login)
export default LoginContainer;