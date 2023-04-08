import React from 'react';
import {connect} from "react-redux";
import {
    getUsers,
    toggleFollowingProgress,
    unfollowThunk,
    followThunk

} from "../../../State/UsersReducer";
import Users from "./Users";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      isFetching={this.props.isFetching}
                      followingInProgress={this.props.followingInProgress}
                      unfollowThunk={this.props.unfollowThunk}
                      followThunk={this.props.followThunk}

        />


    }

}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    }
}


let actionCreators = {
    toggleFollowingProgress,
    getUsers,
    unfollowThunk,
    followThunk
}
export default compose(
    connect(mapStateToProps, actionCreators),
    withAuthRedirect
)(UsersContainer)


