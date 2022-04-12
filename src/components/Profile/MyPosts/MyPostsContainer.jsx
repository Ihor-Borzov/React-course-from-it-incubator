import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profile-reducer';

import MyPosts from './MyPosts';
import s from "./MyPosts.module.css";  /* container component does not even need his own css */
import * as axios from "axios"






let mapStateToProps =(state)=> {
return{
posts:state.profilePage.postsData,
postsText:state.profilePage.newPostText,
}
}

let mapDispatchToProps = (dispatch)=>{
return{
  addPost:(text)=>{dispatch(addPostActionCreator(text));}
}
}


let MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);


export default MyPostsContainer;



