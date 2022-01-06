import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogs-reducer';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';



const Dialogs =(props)=>{

    let state = props.dialogsPage;
                     
    let dialogsElements = state.dialogsData.map (dialog =><DialogItem name={dialog.name} id={dialog.id}/>)
       
let messagesElements = state.messagesData.map(messageObject=> <Message message={messageObject.message}/> )

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