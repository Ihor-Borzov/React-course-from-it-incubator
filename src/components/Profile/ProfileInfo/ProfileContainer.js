import React from 'react';
import Profile from '../Profile';
import { connect } from 'react-redux';
import * as axios from "axios"
import {getUserProfile} from "../../../Redux/profile-reducer"
import { Navigate, useMatch } from 'react-router-dom';
import { usersAPI } from '../../../api/api';
import { withAuthRedirect } from '../../../HOC/withAuthRedirect';






/* class component we use mostly to do server requests.
as minimum you have to specify method render in your class cmponent */

class ProfileContainer extends React.Component{

     /* all the methods of life sycle you should do in componentDidMount function */
    componentDidMount(){

        let userId
        if(!this.props.match){userId=2}
        else{userId = this.props.match.params.userId} 
        
        this.props.getUserProfile(userId) /* this is thunk */

    }   

render(){
    return(
<Profile   {...this.props}  />
    )
}

}





/* this is the way we perform redirect with a container component.    so there is connect, which will send the props to ProfileMatch component 
(it is a component, what catches the url address, and then send the props to AuthRedirectComponent (this component performs redirect if you are not 
    logged in)) or if you logged in it sends the props to ProfileContainer - it is receives the props and render theProfile component */
// export let AuthRedirectComponent = (props)=>{
//         /* this is the way we perform redirect. if we did not log in => redirect */
//         if(!props.isAuth){return<Navigate to={"/login"}/>}
//   return  <ProfileContainer {...props}/>
// }


let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
 









let mapStateToProps = (state)=>{
    return({
profile:state.profilePage.profile,
    }
    )
}


/* this functional component does one thing: it catches user id in the url if it isw there!  */
const ProfileMatch = (props)=>{
    let match = useMatch("/profile/:userId");
    return(
        <AuthRedirectComponent {...props} match={match}/>
    )
}





export default connect (mapStateToProps, {getUserProfile}) (ProfileMatch)


/* because we export connect as default - the link we have in Navbar for ProfileContainer is actually our connect, so when you click on Profile
you execute connect
*/






//!ffffffffffffffffffffffffffffffffffffffffffffff
/* if I would do <Profile   myProps={this.props}/>  then i would get my files in two object containers:
myProps.props. all my files
but when you do this way: <Profile  {...this.props}/>   you send to your component everything what is inside your current props,
not wrapping it in additional object wrapper   */

