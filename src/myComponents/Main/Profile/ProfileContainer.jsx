import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfileThunk} from "../../../State/ProfilePageReducer";
import withRouter from "react-router-dom/withRouter";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userid = this.props.match.params.userid;
        if (!userid) {
            userid = "2"
        }
        this.props.setUserProfileThunk(userid)

    }

    render() {
        return (
            <Profile {...this.props}></Profile>
        )
    }


}


let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile
    }
}

export default compose(
    connect(mapStateToProps, {setUserProfileThunk}),
    withRouter
)(ProfileContainer)

// let authRedirectComponent = withAuthRedirect(ProfileContainer)
//
// let withRouterProfileContainer = withRouter(authRedirectComponent)
// export default connect(mapStateToProps, {setUserProfileThunk})(withRouterProfileContainer);
