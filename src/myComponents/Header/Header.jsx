import React from "react";
import s from "./Header.module.css"

let Header = () => {
    return (
        <header className={`${s.header} grid-elem`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="logo"/>
        </header>
    )
}

export default Header;