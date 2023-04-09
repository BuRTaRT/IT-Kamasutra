import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getProfileStatus,
    putProfileStatus,
    setUserProfileThunk,
    updateProfileStatus
} from "../../../State/ProfilePageReducer";
import withRouter from "react-router-dom/withRouter";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userid = this.props.match.params.userid;
        if (!userid) {
            userid = "28648"
        }
        this.props.setUserProfileThunk(userid)
        this.props.getProfileStatus(userid)
    }

    render() {
        return (
            <Profile {...this.props}></Profile>
        )
    }


}


let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        status: state.profilePage.status
    }
}

export default compose(
    connect(mapStateToProps, {setUserProfileThunk, getProfileStatus,putProfileStatus}),
    withRouter
)(ProfileContainer)

// let authRedirectComponent = withAuthRedirect(ProfileContainer)
//
// let withRouterProfileContainer = withRouter(authRedirectComponent)
// export default connect(mapStateToProps, {setUserProfileThunk})(withRouterProfileContainer);
