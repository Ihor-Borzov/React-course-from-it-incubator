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

    }



},

getState(){
  return this._state
},

 _callSubscriber () {                           /* this is the way we create a method in an object,   this is our rerender entire tree */
  console.log("state changed")
},

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

 subscribe(observer){    /* №2 function subscribe receives rerenderEntireTree function and assign it to empty function. now reranderEntireTree is actually capable to rerender the app    */
  this._callSubscriber = observer;
},

}





export default store;

window.store=store;
