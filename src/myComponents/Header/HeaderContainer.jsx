import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getUserData} from "../../State/authReducer";
import axios from "axios";

class HeaderContainer extends React.Component {

 componentDidMount() {
     axios.get('https://social-network.samuraijs.com/api/1.0/auth/me',{withCredentials:true})
         .then((response)=>{
             if(response.data.resultCode === 0) {
                 let {id,login,email} = response.data.data;
                 this.props.getUserData(id,login,email)
             }

         })
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



export default connect(mapStateToProps, {getUserData})(HeaderContainer)