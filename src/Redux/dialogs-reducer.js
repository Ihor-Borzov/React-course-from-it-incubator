const SEND_MESSAGE = "SEND_MESSAGE"







 /*  this is state to start the app - first run */ 
let initialState = {                              
  messagesData:[ 
    { id:1,  message:'Hi'},
      {id:2, message:'How is your It camasutra'},
      {id:3, message:'Yo'},
      {id:4, message:'Yo'},
      {id:5, message:'Yo'},
    ],

    dialogsData:[ 
        { id:1, name:'Dimych'}, 
          {id:2,name:'Endry'},
          {id:3,name:'Sveta'},
          {id:4,name:'Sasha'},
          {id:5,name:'Victor'},
          {id:6,name:'Valera'},
        ],
/* 
        newMessageBody:"" */
}








const dialogsReducer = (state = initialState, action)=>{
   let stateCopy;
    switch(action.type){
       /*  case UPDATE_NEW_MESSAGE_BODY:
          return {...state, newMessageBody:action.body };  */    /* create the object fill it with old vales add new and update new values and right away return it! */


    

            case SEND_MESSAGE:
             
              let body = action.newMessageBody;
              return {...state,
                
                messagesData:[...state.messagesData, {id:0,  message:body}]};              /*  we are simply saying: hey stateCopy you have messages object,but this object is just a link to the object from state now, can you actually reassign it to a real object!  */
         
                default:
             return state;

    }

 
}


export let sendMessageCreator = (newMessageBody) => {
    return{
     type:SEND_MESSAGE,
     newMessageBody
    }
  }
  
  






export default dialogsReducer;