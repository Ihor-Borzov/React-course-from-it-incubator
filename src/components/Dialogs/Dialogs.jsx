import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';



const Dialogs =(props)=>{
    /* let us pretend we received this array from the backend and we need to display it  */
let dialogs =[ 
    { id:1, name:'Dimych'}, 
      {id:2,name:'Endry'},
      {id:3,name:'Sveta'},
      {id:4,name:'Sasha'},
      {id:5,name:'Victor'},
      {id:6,name:'Valera'},]


      let messages =[ 
        { id:1,  message:'Hi'},
          {id:2, message:'How is your It camasutra'},
          {id:3, message:'Yo'},
          {id:4, message:'Yo'},
          {id:5, message:'Yo'},]


                              /* and here isa a method which will allow you to put the needet data from the received array in to jsx markup and put it in to the new array, then to display it you just put that array in the return... that is it    */   
      let dialogsElements = dialogs.map (dialog =><DialogItem name={dialog.name} id={dialog.id}/>)
       
let messagesElements = messages.map(messageObject=> <Message message={messageObject.message}/> )



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