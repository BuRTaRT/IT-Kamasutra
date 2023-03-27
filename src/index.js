import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from "./App";
import store from "./State/reduxStore";
import {BrowserRouter} from "react-router-dom";
import  {Provider} from "./StoreContext";



const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (store) => {
    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>);
};
rerenderEntireTree(store);
store.subscribe(() => {
    rerenderEntireTree(store)
});








