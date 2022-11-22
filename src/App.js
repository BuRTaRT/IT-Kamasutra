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
                    <Route path='/dialogs' render={() => <Dialogs store={props.store}/>}/>
                    <Route path='/profile'
                           render={() => <Profile store={props.store} dispatch={props.dispatch}
                           />}/>
                </div>
                <Footer/>

            </div>
        </BrowserRouter>

    );
}


export default App;
