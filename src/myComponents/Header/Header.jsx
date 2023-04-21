import React from "react";
import s from "./Header.module.css"

let Header = (props) => {
    let logout = () => {
      props.LogOut();

    }
    return (
        <header className={`${s.header} grid-elem`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png" alt="logo"/>
            {props.data.isAuth
                ? <div onClick={logout} className={s.login}>{props.data.login}</div>
                : <div className={s.login}><a>login</a></div>
            }
        </header>
    )
}


export default Header;