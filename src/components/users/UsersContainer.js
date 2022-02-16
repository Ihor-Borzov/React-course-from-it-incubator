import React from "react"
import { connect } from "react-redux"
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, toggleIsFetchingAC, unfollowAC } from "../../Redux/users-reducer"
import * as axios from "axios"
import Users from "./Users"
import preLoaderGif from "../../assets/images/loader.gif"
import Preloader from "../common/preloader/Preloader"


class UsersContainer extends React.Component {
    
    /* 
    constructor(props){
        super(props);    
            }         WE DO NOT NEED CONSTRUCTOR ANYMORE, BECAUSE WE DO NOT DO ANYTHING EXTRA IN IT, cONSTRUCTOR WILL AUTOMATICALLY CREATE HIMSELF AND SEND HIS PROPS TO HIS SUPER*/
    
    
    componentDidMount(){
        this.props.toggleIsFetching(true);
            /* we changed quotes to be able to write with variables */
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items)})
    }
    
    
    onPageChanged = (pageNumber)=>{
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount/100);  /* i divide on 100, because it retrieve to many users */
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
              unFollow={this.props.unFollow}
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
    isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch)=>{
return{
follow:(userid)=>{dispatch(followAC(userid))},


unFollow:(userid)=>{dispatch(unfollowAC(userid))},


setUsers:(users)=>dispatch(setUsersAC(users)),

setCurrentPage:(pageNumber)=>{
    dispatch(setCurrentPageAC(pageNumber))},

    setTotalUsersCount:(totalCount)=>{
    dispatch(setTotalUsersCountAC(totalCount))},

toggleIsFetching:(isFetching)=>{dispatch(toggleIsFetchingAC(isFetching))}


}
}





export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);