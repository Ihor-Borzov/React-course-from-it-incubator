import React from 'react';
import Profile from '../Profile';
import { connect } from 'react-redux';
import * as axios from "axios"
import {setUserProfile} from "../../../Redux/profile-reducer"
import { useMatch } from 'react-router-dom';






/* class component we use mostly to do server requests.
as minimum you have to specify method render in your class cmponent */

class ProfileContainer extends React.Component{

     /* all the methods of life sycle you should do in componentDidMount function */
    componentDidMount(){

        let userId
        if(!this.props.match){userId=2}
        else{userId = this.props.match.params.userId} 
        

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+ userId)
        .then(response => { 
            this.props.setUserProfile (response.data);
        })      
    }   

render(){
    return(
<Profile   {...this.props}  />
    )
}

}


let mapStateToProps = (state)=>{
    return({
profile:state.profilePage.profile
    }
    )
}



const ProfileMatch = (props)=>{
    let match = useMatch("/profile/:userId");
    return(
        <ProfileContainer {...props} match={match}/>
    )
}

export default connect (mapStateToProps, {setUserProfile}) (ProfileMatch)






//!ffffffffffffffffffffffffffffffffffffffffffffff
/* if I would do <Profile   myProps={this.props}/>  then i would get my files in two object containers:
myProps.props. all my files
but when you do this way: <Profile  {...this.props}/>   you send to your component everything what is inside your current props,
not wrapping it in additional object wrapper   */

