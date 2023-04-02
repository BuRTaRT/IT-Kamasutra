import React from 'react';
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, updateUsersAC} from "../../../State/UsersReducer";
import axios from "axios";
import Users from "./Users";

class UsersApiComponent extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.updateUsers(response.data.items)
            })

    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.updateUsers(response.data.items);

            })

    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
        />


    }

}

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

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersApiComponent);

export default UsersContainer;