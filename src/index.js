import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import state from './Redux/state';
import { reranderEntireTree } from './render';

import reportWebVitals from './reportWebVitals';




reranderEntireTree(state);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
