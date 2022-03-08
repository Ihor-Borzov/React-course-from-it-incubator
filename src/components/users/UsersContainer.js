import React from "react"
import { connect } from "react-redux"
import { toggleFollowingProgress, follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow } from "../../Redux/users-reducer"
import * as axios from "axios"
import Users from "./Users"
import preLoaderGif from "../../assets/images/loader.gif"
import Preloader from "../common/preloader/Preloader"
import { getUsers, usersAPI } from "../../api/api"


class UsersContainer extends React.Component {
    
    /* 
    constructor(props){
        super(props);    
            }         WE DO NOT NEED CONSTRUCTOR ANYMORE, BECAUSE WE DO NOT DO ANYTHING EXTRA IN IT, cONSTRUCTOR WILL AUTOMATICALLY CREATE HIMSELF AND SEND HIS PROPS TO HIS SUPER*/
    
    
    componentDidMount(){
        this.props.toggleIsFetching(true);
            /* this is the way to make a server request through the function */
 usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount/100);
        })
    }
    
    
    onPageChanged = (pageNumber)=>{
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount/100);  /* i divide on 100, because it retrieve to many users */
        })
    }
    
    
    
        render(){
            return (
            <>  {/* this is just a tag (fake patch) */}
            {this.props.isFetching ?  <Preloader/> : null}

            <Users  totalUsersCount = {this.props.totalUsersCount}
              pageSize={this.props.pageSize}  
              currentPage={this.props.currentPage}
              onPageChanged = {this.onPageChanged}
              users = {this.props.users} 
              follow ={this.props.follow}
              unfollow={this.props.unfollow}
              toggleFollowingProgress = {this.props.toggleFollowingProgress}

              followingInProgress = {this.props.followingInProgress}
 />
</>
    )
    
             }
    }
    





let mapStateToProps = (state)=>{
    return{
        users:state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
    }
}




export default connect(mapStateToProps,
     {
/* connect has the links to Action creators */
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount,
toggleIsFetching, toggleFollowingProgress
}
)(UsersContainer);