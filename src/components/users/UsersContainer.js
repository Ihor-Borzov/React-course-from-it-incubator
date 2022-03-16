import React from "react"
import { connect } from "react-redux"
import { getUsers, toggleFollowingProgress, follow, setCurrentPage, unfollow } from "../../Redux/users-reducer"
import Users from "./Users"
import Preloader from "../common/preloader/Preloader"



class UsersContainer extends React.Component {
    
    /* 
    constructor(props){
        super(props);    
            }         WE DO NOT NEED CONSTRUCTOR ANYMORE, BECAUSE WE DO NOT DO ANYTHING EXTRA IN IT, cONSTRUCTOR WILL AUTOMATICALLY CREATE HIMSELF AND SEND HIS PROPS TO HIS SUPER*/
    
    
    componentDidMount(){
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    
    
    onPageChanged = (pageNumber)=>{
        this.props.setCurrentPage(pageNumber);
         this.props.getUsers(pageNumber, this.props.pageSize) 
     }
    
    
    
        render(){
            return (
            <>  {/* this is just a tag (fake patch) */}
            {this.props.isFetching ?  <Preloader/> : null}   {/*  this fetching if working while everything is rendering on the page */}

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
follow, unfollow,
     setCurrentPage,
 toggleFollowingProgress,
getUsers,
}
)(UsersContainer);