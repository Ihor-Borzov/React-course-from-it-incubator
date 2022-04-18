import React from 'react';
import { Navigate } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../Redux/dialogs-reducer';
import { maxLengthCreator, required } from '../../utilities/validators';
import { Textarea } from '../common/FormsControls/FormsControls';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import Message from './Message/Message';



const  Dialogs =(props)=>{

    let addNewMessage=(values)=>{
        props.sendMessage(values.newMessageBody);
    }

    let state = props.dialogsPage;

    /* why did we add key property: to remove warnings from console "Each child in an array or iterator should have a unique "key" prop"*/                 
    let dialogsElements = state.dialogsData.map (dialog =><DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>)
       
let messagesElements = state.messagesData.map(messageObject=> <Message message={messageObject.message} key={messageObject.id}/> )

let newMessageBody = state.newMessageBody;




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
   <LoginReduxForm onSubmit={addNewMessage}/> 
   </div>

        </div>
        
        </div>
    )
}




const maxLength50 = maxLengthCreator(50)

const addMessageForm = (props)=>{
    return(
        <form onSubmit={props.handleSubmit}>


<div> 
<Field component={Textarea} validate={[required, maxLength50]} placeholder="enter your message"
    name="newMessageBody" >

    </Field>
    </div>

    <div><button>Send</button></div>
   

        </form>
    )
}




const LoginReduxForm = reduxForm({form:'dialogMessageForm'})(addMessageForm);


export default Dialogs;