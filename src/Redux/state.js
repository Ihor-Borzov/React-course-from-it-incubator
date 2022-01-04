import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sidebarReducer from "./sidebar-reducer"


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

    },

    sidebar:{}


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


dispatch(action){

  this._state.profilePage = profileReducer(this._state.profilePage, action);   /*we assign to our reducer object profilePage, so reducer wil change it and return changed profilePage object and assign the result to , we send to our reducer needet him pice of state and action object */
  this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
  this._state.sideBar = sidebarReducer(this._state.sideBar, action);

  this._callSubscriber(this._state);


}/* End dispatch method */

}





/* ////////////////////////////////// */













export default store;

window.store=store;
