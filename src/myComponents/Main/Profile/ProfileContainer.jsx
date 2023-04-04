import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../../State/ProfilePageReducer";
import withRouter from "react-router-dom/withRouter";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userid=this.props.match.params.userid;
         if(!userid){
             userid ="2"
         }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userid)
            .then(response => {
                this.props.setUserProfile(response.data)

            })

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


let mapDispatchToProps = (dispatch) => {
    return {
        setUserProfile: (userProfile) => {
            dispatch(setUserProfileAC(userProfile))
        }
    }

}
let withRouterProfileContainer = withRouter(ProfileContainer)
export default connect(mapStateToProps, mapDispatchToProps)(withRouterProfileContainer);
