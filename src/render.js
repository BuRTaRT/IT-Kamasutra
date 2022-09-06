import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";



const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (props)=>{
    console.log(props)
    root.render(
        <React.StrictMode>
            <App state={props} />
        </React.StrictMode>
    );

}