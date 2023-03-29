import React from "react";
import "./App.css"
import Header from "./myComponents/Header/Header";
import Nav from "./myComponents/Nav/Nav";
import Profile from "./myComponents/Main/Profile/Profile";
import Footer from "./myComponents/Footer/Footer";
import DialogsContainer from "./myComponents/Main/Dialogs/DialogsContainer";
import {Route} from "react-router-dom";
import UsersContainer from "./myComponents/Main/Users/UsersContainer";


function App(props) {
    return (


        <div className="App-wrapper">
            <Header/>
            <Nav/>
            <div className='app-wrapper-main'>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/profile' render={() => <Profile/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
            </div>
            <Footer/>

        </div>


    );
}


export default App;
