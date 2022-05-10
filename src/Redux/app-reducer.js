import {getAuthUserData} from './auth-reducer'



const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS"



let initialState = {
    initialized:false
}


const appReducer = (state = initialState, action)=>{          /* we have to export this state */
    switch (action.type){

case INITIALIZED_SUCCESS:
return({...state,
    initialized : true})

default:
    return state

    }
}




export const initializedSuccess = ()=>{return ({type: INITIALIZED_SUCCESS, })}




export const initializeApp = () =>{
    return((dispatch)=>{
        let promise = dispatch(getAuthUserData());   /* here we get a promise from dispatch of getAuthUserData (because axios request is promise)  */


        promise.then(()=>{dispatch(initializedSuccess())});  /* this is the way we call our thunk only after the getAuthUserData thunk will finish executing */
        
    })
}


export default appReducer