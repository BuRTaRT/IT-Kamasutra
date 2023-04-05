import React from 'react';
import {connect} from "react-redux";
import {follow, setCurrentPage, toggleFetch, unfollow, updateUsers} from "../../../State/UsersReducer";
import Users from "./Users";
import {usersApi} from "../../Api/Api";

class UsersApiComponent extends React.Component {

    componentDidMount() {
        this.props.toggleFetch(true);
        usersApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.updateUsers(data)
                this.props.toggleFetch(false);
            })

    }

    onPageChanged = (pageNumber) => {
        this.props.toggleFetch(true);
        this.props.setCurrentPage(pageNumber);
        usersApi.onPageChangeAxios(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.updateUsers(data);
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
                      unfollow={this.props.unfollow}

        />


    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching

    }
}


let actionCreators = {
    follow,
    unfollow,
    updateUsers,
    setCurrentPage,
    toggleFetch
}
let UsersContainer = connect(mapStateToProps, actionCreators)(UsersApiComponent);

export default UsersContainer;