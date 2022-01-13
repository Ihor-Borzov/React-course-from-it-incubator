const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
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

        newMessageBody:""
}








const dialogsReducer = (state = initialState, action)=>{
   

    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:{
          let stateCopy = {...state};
          stateCopy.newMessageBody = action.body;
            return stateCopy;
    }

            case SEND_MESSAGE:
              let stateCopy = {...state};
              stateCopy.messagesData = [...state.messagesData];  /* #1   provide square brackets if you create an array - be careful!!! */
                let body = stateCopy.newMessageBody;
       stateCopy.newMessageBody ="";
       stateCopy.messagesData.push({id:0,  message:body});      /*#2 pay attention the method push works only with array  and will not work with an object */
         return stateCopy;
         default:
             return state;

    }

 
}


export let sendMessageCreator = () => {
    return{
     type:SEND_MESSAGE,
     
    }
  }
  
  
  export let updateNewMessageBodyCreator = (body) => {
    return{
     type:UPDATE_NEW_MESSAGE_BODY,
     body:body,
    }
  }
  





export default dialogsReducer;