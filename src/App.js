import React from "react";
import "./App.css"
import Header from "./myComponents/Header/Header";
import Nav from "./myComponents/Nav/Nav";
import Main from "./myComponents/Main/Main";
import Footer from "./myComponents/Footer/Footer";
import Dialogs from "./myComponents/Dialogs/Dialogs";
import { Routes,  BrowserRouter, Route} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                {/*<header className="header">*/}
                {/*    <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="logo"/>*/}
                {/*</header>*/}
                {/* <nav className="nav"></nav>*/}
                {/* <div className="content"></div>*/}

                <Header/>
                <Nav/>
                <div className='app-wrapper-main'>
                    <Routes>
                    <Route path='/dialogs' element={<Dialogs/>}/>
                    <Route path='/profile' element={<Main/>}/>
                    </Routes>
                </div>
                <Footer/>

            </div>
        </BrowserRouter>

    );
}


export default App;
