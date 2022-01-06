import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';
import s from "./MyPosts.module.css";  /* container component does not even need his own css */



const MyPostsContainer = (props) => {
 
  let state = props.store.getState();

let addPost =() =>{
 props.store.dispatch(addPostActionCreator());     /* here we use callback to get our action object */
}

/* we created a function in the container component and just send this function to presentational component as a .... in a props */
let onPostChange =(text)=>{
  let action = updateNewPostTextActionCreator(text);
  props.store.dispatch(action);
}


  return (
<MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.postsData} postsText = {state.profilePage.newPostText}/>
  )
}

export default MyPostsContainer;