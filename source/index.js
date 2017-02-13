'use strict';

import React from 'react';
import  ReactDOM from 'react-dom';

import App from './components/App/index';

const defaultState = {
    title: 'Todo list',
    placeholder: "Enter task",
};

ReactDOM.render(
    <App {...defaultState}/>,
    document.getElementById('app')
);
