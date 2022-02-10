import React from "react"
import { connect } from "react-redux"
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from "../../Redux/users-reducer"
import Users from "./Users"



let mapStateToProps = (state)=>{
    return{
        users:state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
    
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
    dispatch(setTotalUsersCountAC(totalCount))}




}
}





export default connect(mapStateToProps, mapDispatchToProps)(Users);