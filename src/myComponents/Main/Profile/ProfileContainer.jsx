import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfileAC} from "../../../State/ProfilePageReducer";


class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
