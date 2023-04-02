import React from 'react';
import {connect} from "react-redux";
import {follow, setCurrentPage, toggleFetch, updateUsers} from "../../../State/UsersReducer";
import axios from "axios";
import Users from "./Users";

class UsersApiComponent extends React.Component {

    componentDidMount() {
        this.props.toggleFetch(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.updateUsers(response.data.items)
                this.props.toggleFetch(false);
            })

    }

    onPageChanged = (pageNumber) => {
        this.props.toggleFetch(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.updateUsers(response.data.items);
                this.props.toggleFetch(false);

            })

    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      isFetching={this.props.isFetching}

        />


    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
         isFetching:state.usersPage.isFetching

    }
}


let actionCreators={
    follow,
    updateUsers,
    setCurrentPage,
    toggleFetch
}
let UsersContainer = connect(mapStateToProps, actionCreators)(UsersApiComponent);

export default UsersContainer;