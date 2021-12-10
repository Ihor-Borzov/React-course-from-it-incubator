import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from "./Profile.module.css";


const Profile = ()=>{
return(
<div >
  <div>
  <img src="https://images.moviesanywhere.com/abe382d486edde3c74c469210c7b27ae/98fd2ad0-1513-461a-af1f-f9647b348954.png?r=2x1&w=300"/>
  </div>
<div>ava + description</div>
<MyPosts/>
  Main Content</div>
)    
}

export default Profile;