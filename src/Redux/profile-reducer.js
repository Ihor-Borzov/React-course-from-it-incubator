

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";



 let initialState = {                                                 /*  this is state to start the app - first run. each reducer we initialized with special value */
  postsData:[ 
      { id:1,  message:'Hi, how are you', likesCount:12},
        {id:2, message:'it is my first post', likesCount:11},
    ],
newPostText:'it-camasutra.com',
}





 const profileReducer = (state = initialState, action)=>{    /* here we specified: if state is not received - use initial state: this is state to start an app */
   

    switch(action.type){
        case ADD_POST:
            let newPost={
                id:5,
                message:state.newPostText,        /* we do not use this in reducers, because we perform our functions taking data from receiving argument (state) and this argument is our profile-reducer object */
                likesCount:0
              };
              state.postsData.push(newPost);
              state.newPostText = "";
              return state;

              case UPDATE_NEW_POST_TEXT:
                state.newPostText = action.newText;
                return state;
                
                default:                    /* this is default case - will work when no cases matched */
                    return state;
    }


}



export let addPostActionCreator = () =>  ({ type:ADD_POST });     /*  this is the way to write arrow function with return in one line */ 


export let updateNewPostTextActionCreator = (text) => {
  return{
   type:UPDATE_NEW_POST_TEXT,
    newText:text
  }
}









export default profileReducer;