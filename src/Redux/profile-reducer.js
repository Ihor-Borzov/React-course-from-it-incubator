import { profileAPI, usersAPI } from "../api/api";


const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";



 let initialState = {                                                 /*  this is state to start the app - first run. each reducer we initialized with special value */
  postsData:[ 
      { id:1,  message:'Hi, how are you', likesCount:12},
        {id:2, message:'it is my first post', likesCount:11},
    ],
newPostText:'it-camasutra.com',
profile: null,
status:"",
}





 const profileReducer = (state = initialState, action)=>{   
   

    switch(action.type){
        case ADD_POST:
            let newPost={
                id:5,
                message:action.text,       
                likesCount:0
              };

              return {...state,  postsData:[...state.postsData, newPost]  };     /* this is  the way we duplicate our state with spread operator  this is  the way we duplicate our state.array with spread operator, why ?   because when we duplicating an object with spread operator we duplicating only primitives, but arrays and objects will copy only the links - so when you change them in new object you will get those changes in the old object  */
             /*  stateCopy.postsData = [...state.postsData];                  
              stateCopy.postsData.push(newPost);
              stateCopy.newPostText = "";
              return stateCopy; */
            
            
             


                case SET_USER_PROFILE:
                  return{
                    ...state,
                    profile: action.profile
                  }

                  case SET_STATUS:
                    return{
                      ...state,
                      status: action.status
                    }


                
                default:                    /* this is default case - will work when no cases matched */
                    return state;
    }


}



export let addPostActionCreator = (text) =>  ({ type:ADD_POST, text });     /*  this is the way to write arrow function with return in one line */ 





export let setUserProfile = (profile) => {
  return{
   type:SET_USER_PROFILE,
   profile
  }
}

export let setStatus=(status)=>{
  return{
    type:SET_STATUS,
    status
  }
}



/* thunk */
export const getUserProfile = (userId)=>{
  return((dispatch)=>{
    usersAPI.getProfile(userId).then((response)=>{
      dispatch(setUserProfile (response))})
  })
}


/* thunk - because we have server request we have to use thunk */
export const getStatus = (userId)=>{
  return((dispatch)=>{
    profileAPI.getStatus(userId).then((response)=>{
      dispatch(setStatus (response.data))})
  })
}



export const updateStatus = (status)=>{
  return((dispatch)=>{
    profileAPI.updateStatus(status).then((response)=>{
if(response.data.resultCode===0){dispatch(setStatus (status))}
      })
  })
}




export default profileReducer;