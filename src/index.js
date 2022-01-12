import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* import store from './Redux/store'; */       /*  this is our old store */
import store from './Redux/redux-store';     /* we start using new store - redux-store */
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';   /* this is new Provider for store from react-redux library */
/* import StoreContext, { Provider } from './storeContext'; */   /*  that was my old provider for store from Redux */




 let reranderEntireTree = (state) => {
  ReactDOM.render( 
    <React.StrictMode>
      <Provider store={store}>                    {/*#2 wrapp App in StoreContext.Provider and set the value attribute to ={store} */}
      <App /> 
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}


/* state ={state} store={store}  dispatch={store.dispatch.bind(store)} */


reranderEntireTree(store.getState());    /* state is imported to this file, so we just use it freely from import */


store.subscribe(()=>{                         
  let state = store.getState();
  reranderEntireTree(state)});  
  

/* so we subscribed on data change with subscribe, but redux works not like our previous state - redux does not return store when data changes: instead  (this._callSubscriber(this._state)) we have (this._callSubscriber()). so because (store.subscribe) is inner function of store library we can not change it from inside that she can send us new state each time we change data.So when we create our subscriber we have to send him callback function - so that function will get current state each time when subscriber been called  */














// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
