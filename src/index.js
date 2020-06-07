import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons'
import App from "./containers/App";
import ErrorBoundry from "./components/ErrorBoundry";
import * as serviceWorker from './serviceWorker';


// Animal_crossing
ReactDOM.render(
    <App/>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();