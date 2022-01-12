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
 we called function connect, connect returned something, the we called whatever returned connect
here we component dialogs connected to store
  How it works... 
  function connect creates container component, inside that container component it renders presentational component
  and sends to presentational component attributes what sits in those two objects (as keys) from functions f1 and f2
so in the Dialogs you will get props.a props.b props.c


*/
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);    






export default DialogsContainer;