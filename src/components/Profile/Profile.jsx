import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import s from "./Profile.module.css";
import Post from './MyPosts/Post/Post';


const Profile = (props)=>{
  


return(
<div className={s.postsBlock}>
<ProfileInfo/>
<MyPosts state={props.state} dispatch={props.dispatch}/>
</div>
)    
}

export default Profile;