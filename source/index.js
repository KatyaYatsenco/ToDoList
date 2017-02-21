'use strict';

import React from 'react';
import  ReactDOM from 'react-dom';

import App from './components/App/index';

import '../source/index.css';


const defaultState = {
    title: 'Todo list',
    placeholder: "   ..enter a task",
};

ReactDOM.render(
    <App {...defaultState}/>,
    document.getElementById('app')
);
