import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getUserDataThunk} from "../../State/authReducer";


class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getUserDataThunk()

    }

    render() {
        return (
            <Header data={this.props.data}/>
        )
    }

}

let mapStateToProps = (state) => {
    return {
        data: state.auth
    }
}


export default connect(mapStateToProps, {getUserDataThunk})(HeaderContainer)