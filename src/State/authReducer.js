import {authApi} from "../myComponents/Api/Api";

const SET_USER_DATA = "SET_USER_DATA"

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
                ...action.data,
                isAuth: true

            }


        default:
            return state;
    }
}

export let getUserData = (userId, login, email) => {
    return {
        type: SET_USER_DATA,
        data: {
            userId,
            login,
            email
        }
    }
}
export let getUserDataThunk = () => {

    return (dispatch) => {
        authApi.auth().then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(getUserData(id, login, email))
            }

        })

    }
}

export default authReducer;