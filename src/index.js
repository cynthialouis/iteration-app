import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './style/App.css';
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render((
        <BrowserRouter>
            <App> </App>
        </BrowserRouter>
    ), document.getElementById('root')
);
