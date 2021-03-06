import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import {getAuthUserData, logout} from "../../Redux/auth-reducer"
import { authAPI } from '../../api/api'

class HeaderContainer extends React.Component{

componentDidMount=()=>{
    //this.props.getAuthUserData()  /* moved to app.js */
}


render=()=>{
return(
<Header {...this.props}/>
)
}

}


let mapStateToProps=(state)=>{
    return({
        isAuth:state.auth.isAuth,
        login:state.auth.login
    })
}

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer)