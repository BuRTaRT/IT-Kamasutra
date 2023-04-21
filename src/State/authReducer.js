import {authApi} from "../myComponents/Api/Api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA",
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false


}

function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data

            }
        case  LOGIN:
            return {
                ...state,
                isAuth: true

            }
        case  LOGOUT:
            return {
                ...state,
                userId: null,
                login: null,
                email: null
            }


        default:
            return state;
    }
}

export let setUserData = (userId, login, email, isAuth) => {
    return {
        type: SET_USER_DATA,
        data: {
            userId,
            login,
            email,
            isAuth: isAuth
        }
    }
}
export let getUserData = () => {
    return (dispatch) => {
        authApi.auth().then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setUserData(id, login, email, true))
            }

        })

    }
}

export let LoginAC = (email, password, rememberMe) => {
    return {
        type: LOGIN,
        data: {
            password,
            email,
            rememberMe
        }
    }
}
export let LogIn = (email, password, rememberMe) => {
    return (dispatch) => {

        authApi.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                console.log(response.data)
                dispatch(LoginAC(email, password, rememberMe))
                dispatch(getUserData())
            } else{
                dispatch(stopSubmit('login',{_error:"common error"}))
            }


        })

    }
}
export let LogOutAC = () => {
    return {
        type: LOGOUT
    }
}
export let LogOut = () => {
    return (dispatch) => {
        authApi.logOut().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(LogOutAC())
                dispatch(setUserData(null, null, null, false))

            }

        })

    }
}


export default authReducer;