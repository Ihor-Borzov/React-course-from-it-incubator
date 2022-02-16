
/*       { id:1, photoUrl:"https://i.pinimg.com/550x/17/e2/4a/17e24aab881fe2950c6121d729b859a3.jpg", followed:false, fullName:"Dimitry", status:"I am a boss", location:{city:"Minsk", country:"belarus"}},
      { id:2,  photoUrl:"https://i.pinimg.com/550x/17/e2/4a/17e24aab881fe2950c6121d729b859a3.jpg", followed:true, fullName:"Sahsa", status:"I am a boss", location:{city:"Moscow", country:"Russia"}},
      { id:3,  photoUrl:"https://i.pinimg.com/550x/17/e2/4a/17e24aab881fe2950c6121d729b859a3.jpg", followed:false, fullName:"Andrew", status:"I am a boss", location:{city:"Kyiv", country:"Ucraine"}},
 */




const FOLLOW = 'FOLLOW';
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE="SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT="SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING="TOGGLE_IS_FETCHING"


 let initialState = {                                                 /*  this is state to start the app - first run. each reducer we initialized with special value */
  users:[ 

     
    ],
     
    pageSize:5,
    totalUserCount:1,
    currentPage:3,
    isFetching:false
}





 const UsersReducer = (state = initialState, action)=>{   
   

    switch(action.type){
      case FOLLOW:
return {                                    /*  we opened and copied state, in the copy we took the link to the object users and used method map to it, so if we change that link with the method map - map returns new object */
  ...state, 
  users:state.users.map(u=>{
    if(u.id===action.userId){
      return{...u, followed:true}       /*So we opened u and copied it with spread operator , then we were able to change primitive type to true */
    }
    return u;     /* if "id" matches we return changed followed value and if "id" does not match we return same object */
  })          /* user comes in to the map and we return the same user, this is the same as users:[...state.users] */
}

        case UNFOLLOW:
          return {
            ...state, 
            users:state.users.map(u=>{
              if(u.id===action.userId){
                return{...u, followed:false}       /*So we opened u and copied it with spread operator , then we were able to change primitive type to true */
              }
              return u;     /* if "id" matches we return changed followed value and if "id" does not match we return same object */
            })          /* user comes in to the map and we return the same user, this is the same as users:[...state.users] */
          }

          case SET_USERS:
            return {...state, users:action.users}   /* perexateraty svoy massive */
           /*  return {...state, users:[...action.users]}  */   /*  this is the way we will glue two objects in to one with spread operator.  we will add new objects to the old array of objects */

          case SET_CURRENT_PAGE:
            return{...state,
    currentPage: action.currentPage,
            }

            case SET_TOTAL_USERS_COUNT:
              return{...state,
                totalUserCount: action.totALaUsersCount
              }


            case TOGGLE_IS_FETCHING:
              return{...state,
                isFetching: action.isFetching
              }
            

                default:                   
                    return state;
    }


}



export let followAC = (userId) =>  ({ type:FOLLOW, userId });     /*AC is an action creator;  this is the way to write arrow function with return in one line */ 

export let unfollowAC = (userId) =>  ({ type:UNFOLLOW, userId });

export let setUsersAC = (users) => {     /* we going to be taking users from a server and set them in to state */
  return{
   type:SET_USERS,
   users
  }
}

export let setCurrentPageAC=(currentPage)=>({type:SET_CURRENT_PAGE, currentPage})


export let setTotalUsersCountAC=(totALaUsersCount)=>({type:SET_TOTAL_USERS_COUNT, totALaUsersCount})

export let toggleIsFetchingAC=(isFetching)=>({type:TOGGLE_IS_FETCHING, isFetching})









export default UsersReducer;