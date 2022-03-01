      const SET_USER_DATA = 'SET_USER_DATA';
      const UNFOLLOW = "UNFOLLOW";

      
       let initialState = {                                                 /*  this is state to start the app - first run. each reducer we initialized with special value */
  userId:null,
  email:null,
  login:null,
  isAuth:false,
  isFetching:false,
      }
      
      
      
      
      
       const authReducer = (state = initialState, action)=>{   
         
      
          switch(action.type){
            case SET_USER_DATA:
      return {     ...state,
        ...action.data,              /* this is the way we will add an object to the object state */
        isAuth:true
      }
      
                      default:                   
                          return state;
          }
      
      
      }
      
      
      
      export let setAuthUserData = (userId, email,  login ) =>  ({ type:SET_USER_DATA, data:{ userId, email, login}});     /*AC is an action creator;  this is the way to write arrow function with return in one line */ 
      
    
      
      export default authReducer;