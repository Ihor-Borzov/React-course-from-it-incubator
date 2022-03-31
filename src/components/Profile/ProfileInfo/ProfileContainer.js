import React from 'react';
import Profile from '../Profile';
import { connect } from 'react-redux';
import * as axios from "axios"
import {getUserProfile} from "../../../Redux/profile-reducer"
import { Navigate, useMatch } from 'react-router-dom';
import { usersAPI } from '../../../api/api';
import { withAuthRedirect } from '../../../HOC/withAuthRedirect';
import { compose } from 'redux';
import urlMatch from '../../../HOC/ProfileMatchURL';






/* class component we use mostly to do server requests.
as minimum you have to specify method render in your class cmponent */

class ProfileContainer extends React.Component{

     /* all the methods of life sycle you should do in componentDidMount function */
    componentDidMount(){

        let userId
        if(!this.props.match){userId=2}
        else{userId = this.props.match.params.userId} 
        
        this.props.getUserProfile(userId) /* this is thunk.      asynchronous server request */

    }   

render(){
    return(
<Profile   {...this.props}  />
    )
}

}




let mapStateToProps = (state)=>{
    return({
profile:state.profilePage.profile,
    }
    )
}



// /* this is HOC */
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// /* and this is HOC */
// let ProfileMatch = urlMatch(AuthRedirectComponent);
// export default  connect (mapStateToProps, {getUserProfile}) (ProfileMatch)


/* we changed all those method calls with one function compose */
export default compose(
    connect (mapStateToProps, {getUserProfile}),
    urlMatch,
    withAuthRedirect,
)(ProfileContainer)





