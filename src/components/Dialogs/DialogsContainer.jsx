import React from 'react';
import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';






/* those two function have to return an object and parameters of that object will be props.
first function by default receives state. 
first functions object will be data from state 
second functions object will be callback functions*/

let mapStateToProps =(state)=>{
return{
dialogsPage:state.dialogsPage
}
}


/* here this function has dispatch which binded to store, so you can call dispatch an do not worry about anything */
let mapDispatchToProps =(dispatch)=>{
    return{
        updateNewMessageBody :(body)=>{dispatch(updateNewMessageBodyCreator(body));},
        sendMessage : ()=>{dispatch(sendMessageCreator());}
    }
}


/* so connect returns new container component
 we called function connect, connect returned something, then we called whatever returned connect
here we component dialogs connected to store
  How it works... 
  function connect creates container component, inside that container component it renders presentational component
  and sends to presentational component attributes what sits in those two objects (as keys) from functions f1 and f2
so in the Dialogs you will get props.a props.b
*/

/* inside connect is locsl subscribe to change the app when changed the state:
 each time when there is a change in a state invokes the function mapStateToProps and creates a new object,
 new object compares with an old object. if nothing changed in that peace of nw state from mapStateToProps object
 then there is no reason to rerender the page.
 React-redux expects us not to change existing objects in state by ourselves, that is why when we were changing them
 straight from reducers React-Redux was thinking that nothing changed and did not compare state objects, that
 is why we have to make a copy of an object, before working with it.
 so to make it work - we have to in the reducer work and return not our native sate, but duplicate our native state 
 and work with duplicated copy, then when reducer will return to dispatch  changed stateCopy - dispatch will give it to
 connect and connect will check the difference between stateCopy and state and rerender the page if there are any differences
 

*/

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);    






export default DialogsContainer;