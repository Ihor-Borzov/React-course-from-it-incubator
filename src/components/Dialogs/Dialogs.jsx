import React from 'react';
import { Navigate } from 'react-router-dom';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogs-reducer';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';



const  Dialogs =(props)=>{

    let state = props.dialogsPage;

    /* why did we add key property: to remove warnings from console "Each child in an array or iterator should have a unique "key" prop"*/                 
    let dialogsElements = state.dialogsData.map (dialog =><DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>)
       
let messagesElements = state.messagesData.map(messageObject=> <Message message={messageObject.message} key={messageObject.id}/> )

let newMessageBody = state.newMessageBody;



let onSendMessageClick = ()=>{
    props.sendMessage();
}

let onNewMessageChange =(e)=>{
    let body = e.target.value;
    props.updateNewMessageBody(body);
}


    return (
        <div className={s.dialogs}>
         <div className={s.dialogsItems}>

{/*this is the way to build components by javascript arrey  */}
       
         {
        dialogsElements  
         }   
         </div>
        
        <div className={s.messages}>
<div>{  messagesElements}</div>
<div>
    <div><textarea value={newMessageBody} placeholder="enter your message"
    onChange={onNewMessageChange}></textarea></div>
    <div><button onClick={onSendMessageClick}>Send</button></div>
</div>


{/* 

<textarea ref={textfield}></textarea> <button onClick={send}>Send</button> */}
        </div>
        
        </div>
    )
}

export default Dialogs;