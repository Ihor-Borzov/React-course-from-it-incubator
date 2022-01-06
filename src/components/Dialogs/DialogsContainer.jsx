import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogs-reducer';
import Dialogs from './Dialogs';



/* #1 create a component container, let this container receive state */
const DialogsContainer =(props)=>{

    /* №2 create all the functions you presentational component wil need */
let onSendMessageClick = ()=>{
    props.store.dispatch(sendMessageCreator());
}

let onNewMessageChange =(body)=>{
props.store.dispatch(updateNewMessageBodyCreator(body));
}

/* #3 send all the functions your presentational component will use */
    return (
  <Dialogs  updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}  dialogsPage={props.store.getState().dialogsPage} />
    )
}

export default DialogsContainer;