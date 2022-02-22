import React from 'react';
import Profile from '../Profile';
import { connect } from 'react-redux';
import * as axios from "axios"
import {setUserProfile} from "../../../Redux/profile-reducer"




/* class component we use mostly to do server requests.
as minimum you have to specify method render in your class cmponent */

class ProfileContainer extends React.Component{

     /* all the methods of life sycle you should do in componentDidMount function */
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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





export default connect (mapStateToProps, {setUserProfile}) (ProfileContainer)






//!ffffffffffffffffffffffffffffffffffffffffffffff
/* if I would do <Profile   myProps={this.props}/>  then i would get my files in two object containers:
myProps.props. all my files
but when you do this way: <Profile  {...this.props}/>   you send to your component everything what is inside your current props,
not wrapping it in additional object wrapper   */

