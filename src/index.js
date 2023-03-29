import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from "./App";
import store from "./State/reduxStore";
import {BrowserRouter} from "react-router-dom";
import  {Provider} from "react-redux";



const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>);





