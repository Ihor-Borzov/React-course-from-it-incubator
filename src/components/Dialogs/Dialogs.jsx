import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';



const Dialogs =(props)=>{
                     
    let dialogsElements = props.state.dialogsData.map (dialog =><DialogItem name={dialog.name} id={dialog.id}/>)
       
let messagesElements = props.state.messagesData.map(messageObject=> <Message message={messageObject.message}/> )

let textfield = React.createRef();

let send = ()=>{
  alert( textfield.current.value) ;

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
{  messagesElements}

<textarea ref={textfield}></textarea> <button onClick={send}>Send</button>
        </div>
        
        </div>
    )
}

export default Dialogs;