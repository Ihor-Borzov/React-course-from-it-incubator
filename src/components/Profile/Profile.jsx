import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from "./Profile.module.css";
import Post from './MyPosts/Post/Post';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { Navigate } from 'react-router-dom';


const Profile = (props)=>{

   
return(
<div className={s.postsBlock}>
<ProfileInfo profile={props.profile}/>
<MyPostsContainer />
</div>
)    
}

export default Profile;