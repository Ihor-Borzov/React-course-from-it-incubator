import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './Redux/state';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';




 let reranderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state ={state}  addPost={store.addPost.bind(store)} updateNewPostText = {store.updateNewPostText.bind(store)}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}



reranderEntireTree(store.getState());    /* state is imported to this file, so we just use it freely from import */

store.subscribe(reranderEntireTree);  /* #1 rerenderEntireTree as a callback we send to state.js  in to the function subscribe.   rerenderEntireTree is a subscriber */

















// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
