import React from "react";
import "./App.css"
import Header from "./myComponents/Header";
import Nav from "./myComponents/Nav";
import Main from "./myComponents/Main";
import Footer from "./myComponents/Footer";


function App() {
    return (
        <div className="App-wrapper">
            {/*<header className="header">*/}
            {/*    <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="logo"/>*/}
            {/*</header>*/}
            {/* <nav className="nav"></nav>*/}
            {/* <div className="content"></div>*/}
            <Header/>
            <Nav/>
            <Main/>
            <Footer/>


        </div>
    );
}


export default App;
