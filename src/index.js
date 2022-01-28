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



/*############# EVERY LESSON SUMMARY:
LESSON #51
installed axios library: npm install axios --save
import axios in to users.jsx component
made first server request with axios.get().then()   at users.jsx component
add a folder with a picture and imported that picture to users.jsx
*/




 
  ReactDOM.render( 
    <React.StrictMode>
      <Provider store={store}>                   
      <App /> 
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




/*lesson#47 we removed rerenderEntireTree subscriber function on state change, 
and we removed invoking the function rerenderEntireTree. so now we could remove actual function rerenderEntireTree
and live only what was inside it, because only at the start this code will be rendering our app, we do not 
need to call it again
 */