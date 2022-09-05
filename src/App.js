import React from "react";
import "./App.css"
import Header from "./myComponents/Header/Header";
import Nav from "./myComponents/Nav/Nav";
import Profile from "./myComponents/Main/Profile/Profile";
import Footer from "./myComponents/Footer/Footer";
import Dialogs from "./myComponents/Main/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


function App(props) {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <Nav/>
                <div className='app-wrapper-main'>
                    <Route path='/dialogs' render={()=><Dialogs userData={props.userData} messagesArr={props.messagesArr}/>}/>
                    <Route path='/profile' render={()=><Profile postsTextArr={props.postsTextArr}/>}/>
                </div>
                <Footer/>

            </div>
        </BrowserRouter>

    );
}


export default App;
