import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let userData = [
    {name: 'misha', id: 1},
    {name: 'pasha', id: 2},
    {name: 'sasha', id: 3},
    {name: 'igor', id: 4},
    {name: 'stew', id: 5}
];
let messagesArr = ['Hello', 'Hello my friend', 'go play cs'];
let postsTextArr = [`Why nobody loves me?`, `What is this place?`];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App messagesArr={messagesArr} userData={userData} postsTextArr={postsTextArr} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
