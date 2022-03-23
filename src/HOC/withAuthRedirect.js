import React from "react"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"




/* so in some component wherever we need to apply this functionality - we are going to use our HOC component.
we simply invoke this function - expression in componentContainer.js file:
let AuthRedirectComponent = withAuthRedirect(Dialogs)

so it is invokes the function, sending her our Component, the function creates a class component, this class component inside the render method
has needed logic. but our function returns this class component and assign it to AuthRedirectComponent.

then invokes AuthRedirectComponent executing the logic inside it.


*/


/* we moved map state to props outside the container, because there is no sense to copy it each time we create new container component */

let mapStateToPropsForRedirect = (state)=>{
    return({
isAuth:state.auth.isAuth
    }
    )
}



export const withAuthRedirect = (Component)=>{
    class RedirectComponent extends React.Component{
        render = ()=>{
            if(!this.props.isAuth){return <Navigate to={"/login"}/> }      /* if we meet this criteria we exit from the function with return, redirecting  to the login page   */
            return <Component {...this.props}/>                        /* this works like else -  we render needed component, sending her props */
        }
    }

    let  connectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)


    return connectedRedirectComponent
}


/* our connect will get additional props for RedirectComponent and the function will return this RedirectComponent,
then match will render this render this RedirectComponent, sending her his(Match) props and further
*/