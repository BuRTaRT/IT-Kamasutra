import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from "./App";
import store from "./State/store";


const root = ReactDOM.createRoot(document.getElementById('root'));
    let rerenderEntireTree=()=>{

        root.render(
            <React.StrictMode>
                <App store={store} dispatch={store.dispatch.bind(store)} />
            </React.StrictMode>
        );
    };
    rerenderEntireTree();
    store.subscribe(rerenderEntireTree);








