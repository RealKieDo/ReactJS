import React from 'react';
import ReactDOM from 'react-dom';


import App from './components/App'
import './style.css'
/*
function App() {
    return(
        <div>
        <h1>Test</h1>
        <p>Hi and welcome</p>
        </div>
    )
}
*/


ReactDOM.render(
    //JSX
    /*
    <div>
    <h1>test</h1>
    <p>Here is test</p>
    <li> Hello </li>
    </div>,
    */

    <App />
, document.getElementById('root'));