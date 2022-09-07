import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import {addPost, updatePostText} from "./State/state";



const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (props)=>{
    root.render(
        <React.StrictMode>
            <App state={props} updatePostText={updatePostText} addPost={addPost} />
        </React.StrictMode>
    );

}