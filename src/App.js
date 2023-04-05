import React from "react";
import "./App.css"
import Nav from "./myComponents/Nav/Nav";
import Footer from "./myComponents/Footer/Footer";
import DialogsContainer from "./myComponents/Main/Dialogs/DialogsContainer";
import {Route} from "react-router-dom";
import UsersContainer from "./myComponents/Main/Users/UsersContainer";
import ProfileContainer from "./myComponents/Main/Profile/ProfileContainer";
import HeaderContainer from "./myComponents/Header/HeaderContainer";


function App(props) {
    return (


        <div className="App-wrapper">
            <HeaderContainer/>
            <Nav/>
            <div className='app-wrapper-main'>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/profile/:userid?' render={() => <ProfileContainer/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
            </div>
            <Footer/>

        </div>


    );
}


export default App;
