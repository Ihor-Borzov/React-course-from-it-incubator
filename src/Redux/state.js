const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"


let store ={

  _state : {


    profilePage:{
        postsData:[ 
            { id:1,  message:'Hi, how are you', likesCount:12},
              {id:2, message:'it is my first post', likesCount:11},
          ],
newPostText:'it-camasutra.com',

    },


    dialogsPage:{
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



},
/* THESE TWO METHODS DO NOT CHANGE THE STATE */
getState(){
  return this._state
},

subscribe(observer){    /* №2 function subscribe receives rerenderEntireTree function and assign it to empty function. now reranderEntireTree is actually capable to rerender the app    */
  this._callSubscriber = observer;
},
/* //////////////////////// */


 _callSubscriber () {                           /* this is the way we create a method in an object,   this is our empty rerender entire tree */
  console.log("state changed")
},

/* 
 addPost () {

  let newPost={
    id:5,
    message:this._state.profilePage.newPostText,
    likesCount:0
  };
  this._state.profilePage.postsData.push(newPost);
  this._state.profilePage.newPostText = "";
  this._callSubscriber(this._state);
},

updateNewPostText (newText){

  this._state.profilePage.newPostText = newText;
  this._callSubscriber(this._state);
},
 */



dispatch(action){
if(action.type==="ADD-POST"){
  let newPost={
    id:5,
    message:this._state.profilePage.newPostText,
    likesCount:0
  };
  this._state.profilePage.postsData.push(newPost);
  this._state.profilePage.newPostText = "";
  this._callSubscriber(this._state);
}

else if(action.type==="UPDATE-NEW-POST-TEXT"){ 
  this._state.profilePage.newPostText = action.newText;
  this._callSubscriber(this._state);
}

else if(action.type === UPDATE_NEW_MESSAGE_BODY){
  debugger
  this._state.dialogsPage.newMessageBody = action.body;
  this._callSubscriber(this._state);

}

else if(action.type === SEND_MESSAGE){
 let body = this._state.dialogsPage.newMessageBody;
 this._state.dialogsPage.newMessageBody ="";
 this._state.dialogsPage.messagesData.push (
   {id:6,  message:body}
 ) 
 this._callSubscriber(this._state);
}

}/* End dispatch method */

}






export let addPostActionCreator = () =>  ({ type:ADD_POST });     /*  this is the way to write arrow function with return in one line */ 




export let updateNewPostTextActionCreator = (text) => {
  return{
   type:UPDATE_NEW_POST_TEXT,
    newText:text
  }
}

/* ////////////////////////////////// */

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












export default store;

window.store=store;
