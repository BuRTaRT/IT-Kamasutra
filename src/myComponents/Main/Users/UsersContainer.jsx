import React from 'react';
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, updateUsersAC} from "../../../State/UsersReducer";
import UsersC from "./UsersC";


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            let action = followAC(id);
            dispatch(action)
        },
        updateUsers: (users) => {
            let action = updateUsersAC(users);
            dispatch(action)
        },
        setCurrentPage: (page) => {
            let action = setCurrentPageAC(page);
            dispatch(action)
        }


    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);

export default UsersContainer;