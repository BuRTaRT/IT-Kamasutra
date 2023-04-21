import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getUserData} from "../../State/authReducer";
import {LogOut} from "../../State/authReducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getUserData()

    }

    render() {
        return (
            <Header LogOut={this.props.LogOut} data={this.props.data}/>
        )
    }

}

let mapStateToProps = (state) => {
    return {
        data: state.auth
    }
}


export default connect(mapStateToProps, {getUserData, LogOut})(HeaderContainer)