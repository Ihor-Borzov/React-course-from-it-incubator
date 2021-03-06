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


/*
Lesson #83
Selector is a function what expects whole global state, takes from it some piece  and returns that particular piece of state
We create primitive selector which does nothing but extracts needed us piece of state from global state. We call those selectors
 - dependences - because the state they extract will be determining if we will call main reselect.
#2 create main reselect function with the help of createSelector() method what returns selector. That method expects dependences-
(primitive selectors) and callback with main selecting logic. the callback gets in his parameters the return from each dependence selector (which is piece of state), and calculation happens on that piece of state.



LESSON#80
issue: when you press on the button messages and then press reload : you load the header then header make auth server request, 
you load the messages, but the server request did not get back yet (it is asynchronous), so messages redirect you to the Login page - you
 get to the login page but then your request gets back and isAuth becams true and Login page redirects you to the Profile page. That glitch 
 happens because of the delay of the data we receive. we rerendering pages with information, which is not full (because when we press reload
  we make auth request, but auth request takes time to be executed, because it is server request) that is why first browser tries to render dialogs
  then he sees that user is not authorized, because request is still going - he sends us to the login, then we receive response from server
   isAuth becomes true and login page moves us to the profile.
To fix that - we have to prevent anything from rendering until we doing authentication
for that the component app will be responsible to wait and show us preloader until authentication is going - for that we have to use promises and
method then and also set a variable "marker" which will get true when authentication is finished  with no matter user authorized or not
(for that we have to change the marker from true to false only when all the async authentication requests finished and we received response.
  just execute the function which changes the "marker" last in the method .then)

 - change functional app.js to class component
 - remove authorization from the HeaderContainer
 - create app-reducer.js
 - invoke authenticate function from auth-reducer in the thunk of app-reducer (initializeApp) : ror that we have to return our promise (in the authenticate
   function it is the server request - so just return the whole server request)
 - let that request to execute and then in the method .then call another function which will change your marker  in app-reducer to true .  
 !!! remember each method then   returns a promise
 - in the app component in componentDidMount invoke initializeApp() and in the render method set if statement which will check the marker and
 will show the preloader in marker is false



LESSON#79 how to show error from the server response
- whenever you send server request to login - you  may succeed or fail depends of the data (login, password) you specified.
So if you succeed the server will return resultCode === 0 but if you failed the resultCode !=0
- the response from server you receive in your thunk -  if(resultCode === 0){...}  else {you code to handle the failure}
- if your component made from redux-form => you may handle the failure and show user that something is wrong by method stopSubmit()
- aas the arguments you have to specify what is the name of your redux-form (you can get this name from  const LoginReduxForm = reduxForm({form:'login'})(LoginForm))
and the second parameter is the Field name in your redux-form and what message you want to send to that field (the field is a tag or your upgraded
  component) will receive this message in props.meta.error. 
  - instead of sending this info to a field you can sand it to the wholl form as a common error, for that just specify at the field name (_error)
- dispatch(stopSubmit("login", {_error:message}))
  - 


Lesson#77  Redux-Form validators:
- to add a validator to redux-from first you have to  create a function Validator, this function receives input and returns undefined if everything
is ok or returns a string with an error message if the value is invalid {you specify it with logic}.
- then you can import your validators in to the file with your form and pass it as a parameter to attribute "validate={[validator,]}" to
to corresponding field you want to validate. your form will automatically deny submitting if the input is invalid.
- to be able to do any UI changes with the errors - you have to pass the validators not to regular attribute "component='input'" but you
have to create your custom component and pass everything to it <Field component={MyInput} name="postText" placeholder:"message"/>
-  MyInput will receive props which will include : input, meta, ...otherProps.   input - has validators and other functions inside itself,
meta contains all the information about this field: touched, error ... and otherProps contains placeholder and other not very important props.
 - all that information you have to pass to the actual tag you will be render, but you can sat css for that tag depending on the changes in 
 your field, what validators will return. remember each time you change something redux-form rerender component.


LESSON#75   REDUX-FORM
- npm install redux-form
- create login page with form in a separate component
- import redux form reducer in to our store  (import {reducer as formReducer} from 'redux-form')
         let reducers = combineReducers({reducer1:..., form:formReducer})
- wrap LoginForm component into Redux-form HOC
- all the input tags change to <field></field> add to each of them attribute "component="input"" what will
     specify what kind of tag you want to render, also add to each of them attribute "name"
- set eventListener <form onSubmit={props.handleSubmit}>...</form>, and create a method onSubmit=(whichReceivesData)=>{},
 in a component what renders React-form HOC  and pass this method through props to React-form HOC  


LESSON#73
IMPORTANT: response from put request on profile/status does not return updated status - it just set it at the server but does not return it to you,
in response. you have to set your global state from the argument (status) you receive to your thunk !!!

- create pipeline to getStatus.; create pipeline to setStatus.
the span in Profile status has to get value fro the global state,
the input has to get the value from local state. when input onBlur he has to change the global state and change the status on the server



LESSON#71  CREATING THE LOCAL STATE
- the  local state you can create only for a class component. Because class component creates an object what can have some properties, 
and functional component you can only invoke, execute, but can not add properties
- to change the state you have to use a method this.SetState - this method is asynchronous (keep that in mind, they can ask you at interview)
and this method will rerender the page after changing thew local State. 


LESSON#69 HOC
- HOC is a function, what expects an argument - component.creates the containerComponent with some functionality and the renders inner component
tis way our inner component receives functionality been wrapped in a containerComponent with functionality.
- HOW TO PERFORM IT?
- create a function in a separate file. src->HOC->withAuthRedirect this function should expect a component as an argument and be exported,
- inside the function create class component which will have needed functionality and will render received function at the end.
- also if you need to get some state or dispatch use function connect inside the function withAuthRedirect and pass to connect your class component
- then just return result of connect out from the function withAuthRedirect.
- then at the file where you call this function withAuthRedirect you will receive : let WithRedirect = withAuthRedirect(Component)
1. the class component with some props, what connect function returns: withRedirectConnectClassComponent
2. inside that withRedirectConnectClassComponent we will get our HOCClassContainer what we wrote in  the function withAuthRedirect
3. HOCClassContainer inside will have our component which needs to be rendered
- then all this package (WithRedirect) we put in our main connect as a component.
so here is the pipe line who renders whom.:
-mainConnect->withRedirectConnectClassComponent->HOCClassContainer->Component

- it could be more components, the one rule : you insert your HOC in the main connect and then do the render in whatever sequence you like 


LESSON#68   REDIRECT (NAVIGATE)
- to redirect user from some page to another:  inside the functional component before return write a check
- and as a result of this check render a component with tag navigate and to (path) the component you want to redirect to:
if(props.isAuth===false){return<Navigate to={"/login"}/>}

- what we did : is we get a property isAuth from auth-reducer (this property is true when we signed in and is false when we did not sign in)
and send this property through mapSStateToProps to functional component. and then inside functional component before return check this property
and redirect if it is false

LESSON#66
- create thunk function in user-reducer.js 
- in to that thunk copy everything from the usersContainer=>componentDidMount
 - substitute all the props to dispatch.
 -wrap the thunk in getUsersThunkCreator - it will receive the parameters and return thunk
 - install middleware "npm i redux-thunk"
 import thunkMiddleware from "redux-thunk" in to redux-store.js file
  - insert  applyMiddleware (thunkMiddleware) in redux createStore to enable to dispatch not only objects action, but also functions
  -  import thunkCreator to the usersContainer and invoke it sending needed parameters to it
  - in connect:
  connect(stateDispatchToProps,{getUsersThunkCreator:(currentPage,PageSize)=>{dispatch(getUsersThunkCreator(currentPage,PageSize))}})
  so the connect returns us a callback, when we invoke the function getUsersThunkCreator in th usersContainer we first invoke thunkCreator, it will return
  us function and then we dispatch function, the function will get to dispatch and dispatch will see that this is the function, so he will 
  understand that this is thunk and will invoke the function dispatching all the subfunctions,  subfunctions are action creators, so we invoke them, they return 
  actions, actions will dispatch to reducer and change the state, component will rerender... and our thunk will continue to invoke the functions
  down the road

  - create thunk for render, follow, unfollow
  - homework  substitute to thunk all the other axios requests


LESSON #64
create in User-reducer in the initialState object a property followingInProgress:false
create the whole pipe line to change the followingInProgress
- disable button follow/unfollow while axios request is in progress using a property followingInProgress
- you can see when you disable on e button, you disable all of them.  to change that - change the 
followingInProgress property to array

LESSON#63
- create api folder. create api.js file in that folder
- from UserContainer class=> method componentDidMount take axios request and move it to api.js
- in the api.js create a function (call it getUsers) which will be returning axios request, export this function
- import getUsers function to UsersContainer and call method then     getUsers.then
- from the place where you invoke getUsers(parameters) send him all needed parameters 

LESSON #51
installed axios library: npm install axios --save
import axios in to users.jsx component
made first server request with axios.get().then()   at users.jsx component
add a folder with a picture and imported that picture to users.jsx

lesson#47 we removed rerenderEntireTree subscriber function on state change, 
and we removed invoking the function rerenderEntireTree. so now we could remove actual function rerenderEntireTree
and live only what was inside it, because only at the start this code will be rendering our app, we do not 
need to call it again
 */