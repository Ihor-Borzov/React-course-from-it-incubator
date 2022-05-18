import { createSelector } from "reselect";

/* primitive selector */
export const getUsers= (state)=>{
  return state.usersPage.users;}


/* reselect complicated selector */
export const getUsersSuperSelector = createSelector(getUsers,(users)=>{
  return users.filter(u=>true);
 })



/* inside createSelector we have to pass a function callback which will be extracting something from state.
that callback function does not have a global state
the callback expects the dependencies we need (the array he is going to be selecting from). the first parameter will be primitive
 selector  we use to extract data from global state and the callback will get the result of that primitive callback in the arguments.


 So our main selector does complicated logic on the base of the result of primitive selector
*/


export const getAllUsersSelector= (state)=>{
  return getUsers(state).filter(u=>true);}













export const getPageSize= (state)=>{
return state.usersPage.pageSize;
}


export const getTotalUserCount=(state)=>{
 return   state.usersPage.totalUserCount
}



export const getCurrentPage=(state)=>{
  return  state.usersPage.currentPage
}


export const getIsFetching=(state)=>{
    return  state.usersPage.isFetching
  }

  
export const getFollowingInProgress=(state)=>{
    return  state.usersPage.followingInProgress
  }