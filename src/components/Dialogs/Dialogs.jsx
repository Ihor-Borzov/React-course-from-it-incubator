import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';



const Dialogs =(props)=>{
    /* let us pretend we received this array from the backend and we need to display it  */



                              /* and here isa a method which will allow you to put the needet data from the received array in to jsx markup and put it in to the new array, then to display it you just put that array in the return... that is it    */   
      let dialogsElements = props.dialogs.map (dialog =><DialogItem name={dialog.name} id={dialog.id}/>)
       
let messagesElements = props.messages.map(messageObject=> <Message message={messageObject.message}/> )



    return (
        <div className={s.dialogs}>
         <div className={s.dialogsItems}>

{/*this is the way to build components by javascript arrey  */}
       
         {
        dialogsElements  
         }   
         </div>
        
        <div className={s.messages}>
{  messagesElements}
        </div>
        
        </div>
    )
}

export default Dialogs;