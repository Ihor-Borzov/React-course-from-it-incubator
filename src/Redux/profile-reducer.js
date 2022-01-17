

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";



 let initialState = {                                                 /*  this is state to start the app - first run. each reducer we initialized with special value */
  postsData:[ 
      { id:1,  message:'Hi, how are you', likesCount:12},
        {id:2, message:'it is my first post', likesCount:11},
    ],
newPostText:'it-camasutra.com',
}





 const profileReducer = (state = initialState, action)=>{   
   

    switch(action.type){
        case ADD_POST:
            let newPost={
                id:5,
                message:state.newPostText,       
                likesCount:0
              };

              return {...state,  postsData:[...state.postsData, newPost],  newPostText : ""  };     /* this is  the way we duplicate our state with spread operator  this is  the way we duplicate our state.array with spread operator, why ?   because when we duplicating an object with spread operator we duplicating only primitives, but arrays and objects will copy only the links - so when you change them in new object you will get those changes in the old object  */
             /*  stateCopy.postsData = [...state.postsData];                  
              stateCopy.postsData.push(newPost);
              stateCopy.newPostText = "";
              return stateCopy; */
            
            
              case UPDATE_NEW_POST_TEXT:
                return{...state, newPostText:action.newText};
           /*      stateCopy.newPostText = action.newText;
                return stateCopy; */
                
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