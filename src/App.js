import React from "react";
import "./App.css"
import Header from "./myComponents/Header/Header";
import Nav from "./myComponents/Nav/Nav";
import Profile from "./myComponents/Main/Profile/Profile";
import Footer from "./myComponents/Footer/Footer";
import Dialogs from "./myComponents/Main/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {updatePostText} from "./State/state";


function App(props) {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <Nav/>
                <div className='app-wrapper-main'>
                    <Route path='/dialogs' render={() => <Dialogs state={props.state}/>}/>
                    <Route path='/profile'
                           render={() => <Profile profilePage={props.state.profilePage} updatePostText={updatePostText}
                                                  addPost={props.addPost}/>}/>
                </div>
                <Footer/>

            </div>
        </BrowserRouter>

    );
}


export default App;
